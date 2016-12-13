package Handler

import (
	"Service"
	"encoding/xml"
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

type Query struct {
	StationAndRouteList []StationAndRoute `xml:"Placemark"`
}

type StationAndRoute struct {
	Name       string `xml:"name"`
	StyleUrl   string `xml:"styleUrl"`
	Point      string `xml:"Point>coordinates"`
	LineString string `xml:"LineString>coordinates"`
}

type Station struct {
	Name     string
	StyleUrl string
	Point    string
}

type Route struct {
	Name       string
	StyleUrl   string
	LineString string
}

func (s StationAndRoute) String() string {
	return fmt.Sprintf("%s - %s - %s - %s", s.Name, s.StyleUrl, s.Point, s.LineString)
}

func (s Station) String() string {
	return fmt.Sprintf("%s - %s - %s", s.Name, s.StyleUrl, s.Point)
}

func (r Route) String() string {
	return fmt.Sprintf("%s - %s - %s", r.Name, r.StyleUrl, r.LineString)
}

func Map(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	result := Service.ListStationsByRouteID(r.FormValue("from"), r.FormValue("to"),
		r.FormValue("departure"), r.FormValue("arrival"), r.FormValue("route"))

	fmt.Println(result)

	var neededStations []string
	var outputStationList []Station
	var StationList []Station
	var RouteList []Route
	var userName = r.FormValue("username")

	//ezt átírni majd a kész kml-re
	xmlFile, err := os.Open("tmp.kml")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return
	}
	defer xmlFile.Close()

	b, _ := ioutil.ReadAll(xmlFile)
	fmt.Println(string(b))

	var q Query
	xml.Unmarshal(b, &q)

	for _, stationOrRoute := range q.StationAndRouteList {
		fmt.Printf("\t%s\n", stationOrRoute)
		if len(stationOrRoute.Point) > 0 {
			var station = Station{stationOrRoute.Name, stationOrRoute.StyleUrl, stationOrRoute.Point}
			StationList = append(StationList, station)
		} else {
			var route = Route{stationOrRoute.Name, stationOrRoute.StyleUrl, stationOrRoute.LineString}
			RouteList = append(RouteList, route)
		}
	}

	for _, station := range StationList {
		fmt.Printf("%s\n", station)
	}

	for _, route := range RouteList {
		fmt.Printf("%s\n", route)
	}

	var beforeFirstStation = true
	var afterLastStation = false
	for _, station := range result.Stations {

		if station == result.From {
			beforeFirstStation = false
		}

		if station == result.To {
			afterLastStation = true
			break
		}

		if !beforeFirstStation && !afterLastStation {
			neededStations = append(neededStations, station)
		}
	}
	neededStations = append(neededStations, result.To)

	for _, station := range neededStations {
		fmt.Printf("%s\n", station)
	}

	var route = Route{result.From + " - " + result.To, RouteList[0].StyleUrl, ""}
	fmt.Printf("%s\n", route)

	fmt.Println(len(neededStations))

	for i := 0; i < len(neededStations)-1; i++ {
		fmt.Println(i)
		var station1 = neededStations[i]
		var station2 = neededStations[i+1]
		for _, tmpRoute := range RouteList {
			if (station1 + " - " + station2) == tmpRoute.Name {
				route.LineString += tmpRoute.LineString
				break
			}
		}
	}
	fmt.Printf("%s\n", route)

	for _, stationName := range neededStations {
		for _, station := range StationList {
			if station.Name == stationName {
				outputStationList = append(outputStationList, station)
				break
			}
		}
	}

	var KMLOutput = "<?xml version='1.0' encoding='UTF-8'?>\n" +
		"<kml xmlns='http://www.opengis.net/kml/2.2'>\n" +
		"<Document>\n"

	for _, station := range outputStationList {
		KMLOutput += "<Placemark>\n" +
			"<name>" + station.Name + "</name>\n" +
			"<styleUrl>" + station.StyleUrl + "</styleUrl>\n" +
			"<Point>\n" +
			"<coordinates>" + station.Point + "</coordinates>\n" +
			"</Point>\n" +
			"</Placemark>\n"
	}

	KMLOutput += "<Placemark>\n" +
		"<name>" + route.Name + "</name>\n" +
		"<styleUrl>" + route.StyleUrl + "</styleUrl>\n" +
		"<LineString>\n" +
		"<tessellate>1</tessellate>\n" +
		"<coordinates>" + route.LineString + "</coordinates>\n" +
		"</LineString>\n" +
		"</Placemark>\n" +
		"<Style id='icon-1899-0288D1-nodesc-normal'> <IconStyle> <color>ffD18802</color> <scale>1.0</scale> <Icon> <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href> </Icon> </IconStyle> <LabelStyle> <scale>0.0</scale> </LabelStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <Style id='icon-1899-0288D1-nodesc-highlight'> <IconStyle> <color>ffD18802</color> <scale>1.0</scale> <Icon> <href>http://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png</href> </Icon> </IconStyle> <LabelStyle> <scale>1.0</scale> </LabelStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <StyleMap id='icon-1899-0288D1-nodesc'> <Pair> <key>normal</key> <styleUrl>#icon-1899-0288D1-nodesc-normal</styleUrl> </Pair> <Pair> <key>highlight</key> <styleUrl>#icon-1899-0288D1-nodesc-highlight</styleUrl> </Pair> </StyleMap> <Style id='line-000000-1-nodesc-normal'> <LineStyle> <color>ff000000</color> <width>1</width> </LineStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <Style id='line-000000-1-nodesc-highlight'> <LineStyle> <color>ff000000</color> <width>2.0</width> </LineStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <StyleMap id='line-000000-1-nodesc'> <Pair> <key>normal</key> <styleUrl>#line-000000-1-nodesc-normal</styleUrl> </Pair> <Pair> <key>highlight</key> <styleUrl>#line-000000-1-nodesc-highlight</styleUrl> </Pair> </StyleMap> <Style id='line-0288D1-1-nodesc-normal'> <LineStyle> <color>ffD18802</color> <width>1</width> </LineStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <Style id='line-0288D1-1-nodesc-highlight'> <LineStyle> <color>ffD18802</color> <width>2.0</width> </LineStyle> <BalloonStyle> <text><![CDATA[<h3>$[name]</h3>]]></text> </BalloonStyle> </Style> <StyleMap id='line-0288D1-1-nodesc'> <Pair> <key>normal</key> <styleUrl>#line-0288D1-1-nodesc-normal</styleUrl> </Pair> <Pair> <key>highlight</key> <styleUrl>#line-0288D1-1-nodesc-highlight</styleUrl> </Pair> </StyleMap>" +
		"	</Document>\n" +
		"</kml>"

	fmt.Println(KMLOutput)

	var JSONOutput = "{\n" +
		"\"timezone\": \"+1:00\",\n" +
		"\"defaultstopinterval\": \"00:00:10\",\n" +
		"\"vehicles\":\n" +
		"[\n" +
		"{\n" +
		"\"name\": \"" + result.From + " - " + result.To + "\"," +
		"\"info\": \"Blazing Fast!\"," +
		"\"route\": \"" + result.From + " - " + result.To + "\"," +
		"\"stops\":" +
		"[" +
		"{" +
		"\"name\": \"" + result.From + "\"," +
		"\"departure\": {\"time\": \"" + result.Departure + "\", \"day\": 1}" +
		"}," +
		"{" +
		"\"name\": \"" + result.To + "\"," +
		"\"arrival\": {\"time\": \"" + result.Arrival + "\", \"day\": 1}" +
		"}" +
		"]" +
		"}" +
		"]" +
		"}"

	f, err := os.Create("Web/Plugins/Transit/train" + userName + ".kml")
	check(err)

	defer f.Close()

	n1, err := f.WriteString(KMLOutput)
	fmt.Printf("wrote %d bytes\n", n1)

	f.Sync()

	g, err := os.Create("Web/Plugins/Transit/train" + userName + ".json")
	check(err)

	defer g.Close()

	n2, err := g.WriteString(JSONOutput)
	fmt.Printf("wrote %d bytes\n", n2)

	g.Sync()

	t, _ := template.ParseFiles("View/Map/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", result)
}
