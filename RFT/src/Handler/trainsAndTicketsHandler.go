package Handler

import (
	"Service"
	"fmt"
	//"html/template"
	"net/http"
	"strings"
)

func SearchTimetable(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	//TODO: kitálni, hogy hogyan legyen lekezelve a discount és a pótjegy nélkül majd az ár kiszámításánál
	//TODO: valamint a helyi közlekedés nélkül és a kerékpárszállítással is
	discount := r.FormValue("discount")
	if(strings.HasSuffix(discount, ")")) {
		id := strings.LastIndex(discount, "(")
		if(discount[(id+1):(id+2)] == "d") {
			d := "0"
			fmt.Println(d)
		}	else {
			d := discount[(id+1):(id+3)]
			fmt.Println(d)
		}

	} else {
		d := "100"
		fmt.Println(d)
	}


	result := Service.SearchTimetable(r.FormValue("from"), r.FormValue("to"), r.FormValue("date"),
		r.FormValue("discount"), r.FormValue("withoutExtraTicket"), r.FormValue("withoutLocalTransportation"),
		r.FormValue("withoutChange"), r.FormValue("withBicycleDelivery"))
	fmt.Println(result)
	fmt.Println(r.FormValue("from"))
	fmt.Println(r.FormValue("to"))
	fmt.Println(r.FormValue("date"))
	fmt.Println(r.FormValue("discount"))
	fmt.Println(r.FormValue("withoutExtraTicket"))
	fmt.Println(r.FormValue("withoutLocalTransportation"))
	fmt.Println(r.FormValue("withoutChange"))
	fmt.Println(r.FormValue("withBicycleDelivery"))

	/*if TODO:feltétel? {

	} else {

	}*/

}
