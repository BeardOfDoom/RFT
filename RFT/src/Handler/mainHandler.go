package Handler

import (
  "html/template"
  "net/http"
)

func Homepage(w http.ResponseWriter, r *http.Request) {
  //data := "valami"
  t, _ := template.ParseFiles("View/HomePage/main.html")
	t.Execute(w, "HomePage")
}
