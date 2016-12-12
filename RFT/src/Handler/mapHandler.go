package Handler

import (
	"Service"
	"fmt"
	"html/template"
	"net/http"
)

func Map(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	result := Service.ListStationsByRouteID(r.FormValue("from"), r.FormValue("to"),
													r.FormValue("departure"), r.FormValue("arrival"), r.FormValue("route"))

	fmt.Println(result)
	t, _ := template.ParseFiles("View/Map/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", result)
}
