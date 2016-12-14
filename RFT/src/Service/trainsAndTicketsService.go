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

func SeatReserve(id, from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km, seat1, seat2 string) Adapter.WagonData {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlSeatReserve(id, from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km, seat1, seat2)
	return result
}

func CheckReservation(wagonID, seat string) bool {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlCheckReservation(wagonID, seat)
	return result
}

func UpdateWagonReservation(wagonID, seat, from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km, seat1, seat2, selectedTrain string) Adapter.TrainType {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlUpdateWagonReservation(wagonID, seat, from1, to1, departure1, arrival1, train1ID, from2, to2, departure2, arrival2, train2ID, price, km, seat1, seat2, selectedTrain)
	return result
}

func BuyTicket(firstname, lastname ,from1, to1, departure1, arrival1, train1ID, seat1, from2, to2, departure2, arrival2, train2ID, seat2, price, km string) Adapter.Ticket {
	SQLAdapter := Adapter.SQLFactory(Settings.DBUSERNAME, Settings.DBPASSWORD, Settings.DBHOST, Settings.DBNAME, Settings.DBPORT)
	result := SQLAdapter.MysqlBuyTicket(firstname, lastname, from1, to1, departure1, arrival1, train1ID, seat1, from2, to2, departure2, arrival2, train2ID, seat2, price, km)
	return result
}
