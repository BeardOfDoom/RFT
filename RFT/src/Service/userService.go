package Service

import (
  "Adapter"
)

func Authentificate(username, password string) bool {
  sqlAdapter := Adapter.SQLFactory("username", "password", "host", "db", 1) //port
  valid := sqlAdapter.MysqlAuthentificate(username, password)
  return valid
}

func Registration(username, password, email string) int {
  SQLAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306);
  validationCode := SQLAdapter.MysqlRegistration(username, password, email)
  return validationCode
}
