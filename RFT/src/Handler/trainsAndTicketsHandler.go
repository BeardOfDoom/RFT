package Handler

import (
	"Service"
	"fmt"
	//"html/template"
	"net/http"
)

func SearchTimetable(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	//TODO: kitálni, hogy hogyan legyen lekezelve a discount és a pótjegy nélkül majd az ár kiszámításánál
	//TODO: valamint a helyi közlekedés nélkül és a kerékpárszállítással is
	result := Service.SearchTimetable(r.FormValue("from"), r.FormValue("to"), r.FormValue("date"),
		r.FormValue("discount"), r.FormValue("extraTicket"), r.FormValue("withoutLocalTransportation"),
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
