package Handler

import (
	"Service"
	"fmt"
	"net/http"
  "html/template"
)

func Registration(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()
	firstname := r.FormValue("firstname")
	lastname := r.FormValue("lastname")
	username := r.FormValue("username")
	password := r.FormValue("password")
	email := r.FormValue("email")

	validationCode := Service.Registration(firstname, lastname, username, password, email) //0 - OK,  -1 - User already exists -2 - Unexpected error
	if validationCode == 0 {
    data := ""
    t, _ := template.ParseFiles("View/Register/succes.html", "View/Layout/main.html")
    t.ExecuteTemplate(w, "layout", data)
	} else if validationCode == -1 {
    data := ""
    t, _ := template.ParseFiles("View/Register/wrongUsername.html", "View/Layout/main.html")
    t.ExecuteTemplate(w, "layout", data)
	} else {
		fmt.Println(validationCode)
	}
}
