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
		r.FormValue("discount"), r.FormValue("potjegy"), r.FormValue("helyi"),
		r.FormValue("atszallas"), r.FormValue("kerekpar"))
	fmt.Println(result)
	fmt.Println(r.FormValue("from"))
	fmt.Println(r.FormValue("to"))
	fmt.Println(r.FormValue("date"))
	fmt.Println(r.FormValue("discount"))
	fmt.Println(r.FormValue("potjegy"))
	fmt.Println(r.FormValue("helyi"))
	fmt.Println(r.FormValue("atszallas"))
	fmt.Println(r.FormValue("kerekpar"))

	/*if TODO:feltétel? {

	} else {

	}*/

}
