package Handler

import(
  "net/http"
  "Service"
)

func Authentificate(w http.ResponseWriter, r *http.Request) {
  r.ParseForm()

  _ = Service.Authentificate(r.FormValue("username"), r.FormValue("password"))
}
