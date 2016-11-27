package Handler

import (
	"fmt"
	"net/http"
	"Service"
)

func Authentificate(w http.ResponseWriter, r *http.Request) {
	r.ParseForm()

	valid := Service.Authentificate(r.FormValue("username"), r.FormValue("password"))
	fmt.Println(valid)
}
