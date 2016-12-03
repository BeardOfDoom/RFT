package Service

import (
	"Adapter"
	"Settings"
)

func Authentificate(username, password string) Adapter.Authentification {
	sqlAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	valid := sqlAdapter.MysqlAuthentificate(username, password)
	return valid
}

func Registration(firstname, lastname, username, password, email string) int {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	validationCode := SQLAdapter.MysqlRegistration(firstname, lastname, username, password, email)
	return validationCode
}
