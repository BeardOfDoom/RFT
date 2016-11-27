package Handler

import (
	"fmt"
	"net/http"
	"Service"
	"html/template"
)

func Authentificate(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	valid := Service.Authentificate(r.FormValue("username"), r.FormValue("password"))
	fmt.Println(valid)

	if(valid) {
		data := "" //TODO: itt kell majd struktokkal átadni a bejelentkezéshez szükséges infókat
		t, _ := template.ParseFiles("View/HomePage/index.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", data)
	} else {
		data := ""
		t, _ := template.ParseFiles("View/Login/error.html", "View/Layout/main.html")
		t.ExecuteTemplate(w, "layout", data)
	}

}
