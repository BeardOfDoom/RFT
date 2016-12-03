package Service

import (
	"Adapter"
	"Settings"
)

func SearchTimetable(from, to, date, discount string, potjegy, helyi, atszallas, kerekpar bool) Adapter.SQLDataSlice {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlSearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar)
	return result
}
