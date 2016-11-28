package Handler

import (
	"Service"
	"fmt"
	"html/template"
	"net/http"
)

func SearchTimetable(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	result := Service.SearchTimetable(r.FormValue("from"), r.FormValue("to"), r.FormValue("date"),
		r.FormValue("discount"), r.FormValue("potjegy"), r.FormValue("helyi"),
		r.FormValue("atszallas"), r.FormValue("kerekpar"))
	fmt.Println(result)

	if result.Exits {
		data := result
		t, _ := template.ParseFiles("View/HomePage/index.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", data)
	} else {
		data := ""
		t, _ := template.ParseFiles("View/Login/error.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", data)
	}

}
