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

func GetTrainType(from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km string) Adapter.TrainType {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlGetTrainType(from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km)
	return result
}

func SeatReserve(id string) Adapter.WagonData {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlSeatReserve(id)
	return result
}
