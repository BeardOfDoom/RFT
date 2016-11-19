package Handler

import (
  "html/template"
  "net/http"
)

func Homepage(w http.ResponseWriter, r *http.Request) {
  data := ""
  t, _ := template.ParseFiles("View/HomePage/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}

func TrainsAndTickets(w http.ResponseWriter, r *http.Request) {
  data := ""
  t, _ := template.ParseFiles("View/TrainsAndTickets/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}

func Login(w http.ResponseWriter, r *http.Request) {
  data := ""
  t, _ := template.ParseFiles("View/Login/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}

func Register(w http.ResponseWriter, r *http.Request) {
  data := ""
  t, _ := template.ParseFiles("View/Register/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}

func Map(w http.ResponseWriter, r *http.Request) {
	data := ""
	t, _ := template.ParseFiles("View/Map/index.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", data)
}
