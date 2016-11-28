package Service

import (
	"Adapter"
)

func Authentificate(username, password string) Adapter.Authentification {
	sqlAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306)
	valid := sqlAdapter.MysqlAuthentificate(username, password)
	return valid
}

func Registration(firstname, lastname, username, password, email string) int {
	SQLAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306)
	validationCode := SQLAdapter.MysqlRegistration(firstname, lastname, username, password, email)
	return validationCode
}

func SearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar string) Adapter.SQLData {
	SQLAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306)
	result := SQLAdapter.MysqlSearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar)
	return result
}
