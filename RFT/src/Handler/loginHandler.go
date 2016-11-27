package Handler

import (
	"net/http"
	//"Service"
	"Adapter"
)

func Authentificate(w http.ResponseWriter, r *http.Request) {
	//r.ParseForm()

	//_ = Service.Authentificate(r.FormValue("username"), r.FormValue("password"))
	SQLAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306)
	SQLAdapter.MySqlTest()
}
