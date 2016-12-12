package Service

import (
	"Adapter"
	"Settings"
)

func SearchTimetable(from, to, date, discount string, potjegy, helyi, atszallas, kerekpar bool) Adapter.Data {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlSearchTimetable(from, to, date, discount, potjegy, helyi, atszallas, kerekpar)
	return result
}

func ListStationsByRouteID(from, to, departure, arrival, route_id string) Adapter.MapData {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlListStationsByRouteID(from, to, departure, arrival, route_id)
	return result
}
