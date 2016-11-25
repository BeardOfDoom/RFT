package Handler

import(
  "net/http"
  "Service"
)

func RegistrationAuthentificate(w http.ResponseWriter, r *http.Request) {
  r.ParseForm()

  _ = Service.RegistrationAuthentificate(r.FormValue("username"), r.FormValue("password"), r.FormValue("fullname"))
}
