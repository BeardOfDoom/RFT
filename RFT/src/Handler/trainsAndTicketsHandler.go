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

	var withoutExtraTicket, withoutChange, withBicycleDelivery, withoutLocalTransportation bool
	var d string
	//d tartalmazza a kedvezmenyt
	discount := r.FormValue("discount")
	if strings.HasSuffix(discount, ")") {
		id := strings.LastIndex(discount, "(")
		if discount[(id+1):(id+2)] == "d" {
			d = "100"
		} else {
			d = discount[(id + 1):(id + 3)]
		}

	} else {
		d = "0"
	}

	date := r.FormValue("date")
	year := date[11:15]
	month := convertMonth(date[4:7])
	day := date[8:10]
	date = year + "-" + month + "-" + day
	if r.FormValue("withoutExtraTicket") != "" {
		withoutExtraTicket = true
	} else {
		withoutExtraTicket = false
	}
	if r.FormValue("withoutLocalTransportation") != "" {
		withoutLocalTransportation = true
	} else {
		withoutLocalTransportation = false
	}
	if r.FormValue("withoutChange") != "" {
		withoutChange = true
	} else {
		withoutChange = false
	}
	if r.FormValue("withBicycleDelivery") != "" {
		withBicycleDelivery = true
	} else {
		withBicycleDelivery = false
	}
	result := Service.SearchTimetable(r.FormValue("from"), r.FormValue("to"), date,
		d, withoutExtraTicket, withoutLocalTransportation,
		withoutChange, withBicycleDelivery)

	if len(result.Data) > 0 {
		t, _ := template.ParseFiles("View/TrainsAndTickets/result.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", result)
	} else {
		t, _ := template.ParseFiles("View/TrainsAndTickets/noResult.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", "")
	}

}

func GetTrainType(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	result := Service.GetTrainType(r.FormValue("from1"), r.FormValue("to1"), r.FormValue("departure1"),
		r.FormValue("arrival1"), r.FormValue("train1ID"), r.FormValue("from2"),
		r.FormValue("to2"), r.FormValue("departure2"), r.FormValue("arrival2"),
		r.FormValue("train2ID"), r.FormValue("price"), r.FormValue("km"))

	t, _ := template.ParseFiles("View/TrainsAndTickets/ticket.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", result)
}

func SeatReserve(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	fmt.Println(r.FormValue("seat1"))
	fmt.Println(r.FormValue("seat2"))
	result := Service.SeatReserve(r.FormValue("trainID"), r.FormValue("from1"), r.FormValue("to1"),
												r.FormValue("departure1"), r.FormValue("arrival1"), r.FormValue("train1ID"),
												r.FormValue("from2"),	r.FormValue("to2"), r.FormValue("departure2"),
												r.FormValue("arrival2"), r.FormValue("train2ID"), r.FormValue("price"),
												r.FormValue("km"), r.FormValue("seat1"), r.FormValue("seat2"))

	t, _ := template.ParseFiles("View/TrainsAndTickets/reservation.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", result)
}

func CheckReservation(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	result := Service.CheckReservation(r.FormValue("wagonID"), r.FormValue("seat"))
	fmt.Println(result)
	if !result {
		data := Service.UpdateWagonReservation(r.FormValue("wagonID"), r.FormValue("seat"), r.FormValue("from1"),
																					r.FormValue("to1"), r.FormValue("departure1"), r.FormValue("arrival1"),
																					r.FormValue("train1ID"), r.FormValue("from2"), r.FormValue("to2"),
																					r.FormValue("departure2"), r.FormValue("arrival2"), r.FormValue("train2ID"),
																					r.FormValue("price"), r.FormValue("km"), r.FormValue("seat1"),
																					r.FormValue("seat2"), r.FormValue("selectedTrain"))
		fmt.Println(data)
	} else {
		//TODO Matyi ird oda
		/*t, _ := template.ParseFiles("View/TrainsAndTickets/reservation.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", result)*/
	}

}
