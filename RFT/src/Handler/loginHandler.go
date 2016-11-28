package Handler

import (
	"Service"
	"fmt"
	"html/template"
	"net/http"
)

func Authentificate(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	valid := Service.Authentificate(r.FormValue("username"), r.FormValue("password"))
	fmt.Println(valid)

	if valid.Valid {
		t, _ := template.ParseFiles("View/Login/login.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", valid)
	} else {
		t, _ := template.ParseFiles("View/Login/error.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", "")
	}

}
