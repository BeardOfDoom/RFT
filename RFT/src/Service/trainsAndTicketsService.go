package Service

import (
	"Adapter"
)

func SearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar string) Adapter.SQLData {
	SQLAdapter := Adapter.SQLFactory("sql7146419", "5rzhPtLbf7", "sql7.freemysqlhosting.net", "sql7146419", 3306)
	result := SQLAdapter.MysqlSearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar)
	return result
}
