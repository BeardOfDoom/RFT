package Handler

import (
	"Service"
	"fmt"
	"html/template"
	"net/http"
	"strings"
)

func convertMonth(date string) string {
	var month string
	switch date {
	case "Jan":
		month = "01"
	case "Feb":
		month = "02"
	case "Mar":
		month = "03"
	case "Apr":
		month = "04"
	case "May":
		month = "05"
	case "Jun":
		month = "06"
	case "Jul":
		month = "07"
	case "Aug":
		month = "08"
	case "Sep":
		month = "09"
	case "Oct":
		month = "10"
	case "Nov":
		month = "11"
	case "Dec":
		month = "12"
	}
	return month
}

func SearchTimetable(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	//TODO: kitálni, hogy hogyan legyen lekezelve a discount és a pótjegy nélkül majd az ár kiszámításánál
	//TODO: valamint a helyi közlekedés nélkül és a kerékpárszállítással is

	//d tartalmazza a kedvezmenyt
	discount := r.FormValue("discount")
	if strings.HasSuffix(discount, ")") {
		id := strings.LastIndex(discount, "(")
		if discount[(id+1):(id+2)] == "d" {
			d := "0"
			fmt.Println(d)
		} else {
			d := discount[(id + 1):(id + 3)]
			fmt.Println(d)
		}

	} else {
		d := "100"
		fmt.Println(d)
	}

	date := r.FormValue("date")
	year := date[11:15]
	month := convertMonth(date[4:7])
	day := date[8:10]
	date = year + "-" + month + "-" + day
	fmt.Println(date)

	result := Service.SearchTimetable(r.FormValue("from"), r.FormValue("to"), r.FormValue("date"),
		r.FormValue("discount"), r.FormValue("withoutExtraTicket"), r.FormValue("withoutLocalTransportation"),
		r.FormValue("withoutChange"), r.FormValue("withBicycleDelivery"))
	fmt.Println(result)
	/*fmt.Println(r.FormValue("from"))
	fmt.Println(r.FormValue("to"))
	fmt.Println(r.FormValue("date"))
	fmt.Println(r.FormValue("discount"))
	fmt.Println(r.FormValue("withoutExtraTicket"))
	fmt.Println(r.FormValue("WiFi"))
	fmt.Println(r.FormValue("withoutChange"))
	fmt.Println(r.FormValue("withBicycleDelivery"))*/

	if true {
		t, _ := template.ParseFiles("View/TrainsAndTickets/result.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", "")
	} else {

	}

}