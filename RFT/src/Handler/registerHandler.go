package Handler

import(
  "net/http"
  "Service"
  "fmt"
)

func Registration(w http.ResponseWriter, r *http.Request) {
  r.ParseForm()
  firstname := r.FormValue("firstname")
  lastname := r.FormValue("lastname")
  username := r.FormValue("username")
  password := r.FormValue("password")
  email := r.FormValue("email")

  validationCode := Service.Registration(firstname, lastname, username, password, email) //0 - OK,  -1 - User already exists -2 - Unexpected error
  if (validationCode == 0) {
    //TODO
    fmt.Println(validationCode)
  } else if (validationCode == -1) {
    //TODO
    fmt.Println(validationCode)
  } else {
    //TODO
    fmt.Println(validationCode)
  }
}
