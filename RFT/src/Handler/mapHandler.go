package Handler

import (
	"fmt"
	"html/template"
	"net/http"
)

func Map(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	fmt.Println("from: " + r.FormValue("from"))
	fmt.Println("to: " + r.FormValue("to"))
	fmt.Println("departure: " + r.FormValue("departure"))
	fmt.Println("arrival: " + r.FormValue("arrival"))
	fmt.Println("train: " + r.FormValue("train"))
	fmt.Println("route: " + r.FormValue("route"))

	data := ""
	t, _ := template.ParseFiles("View/Map/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}
