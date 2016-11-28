package Handler

import (
	"html/template"
	"net/http"
)

func Logout(w http.ResponseWriter, r *http.Request) {
	t, _ := template.ParseFiles("View/Logout/logout.html", "View/Layout/main.html")
	t.ExecuteTemplate(w, "layout", "")
}
