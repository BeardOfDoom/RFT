package Adapter

import (
	"crypto/md5"
	"database/sql"
	"encoding/hex"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"math/rand"
	"time"
	"strconv"
)

type SQLConfig struct {
	username string
	password string
	host     string
	port     int
	db       string
}

type Authentification struct {
	Valid     bool
	Username  string
	Firstname string
	Lastname  string
}

type TrainServices struct {
	S1_Toilet					bool
	S1_DisabledToilet	bool
	S1_DiaperChange		bool
	S1_AirConditioner	bool
	S1_Wifi						bool
	S1_PowerConnector	bool
	S1_Restaurant			bool
	S1_BikeShed				bool
	S1_Bed						bool
	S2_Toilet					bool
	S2_DisabledToilet	bool
	S2_DiaperChange		bool
	S2_AirConditioner	bool
	S2_Wifi						bool
	S2_PowerConnector	bool
	S2_Restaurant			bool
	S2_BikeShed				bool
	S2_Bed						bool
}

type TrainInformation struct {
	Station					[]string
	Timetable				[]string
	Train						[]string
	Services				[]TrainServices
}

type SQLData struct {
	From      string
	To        string
	Date      string
	Departure string
	Arrival 	string
	Changes		string
	Duration	string
	Distance	string
	Price			string
	Info			TrainInformation
}

type SQLDataSlice []SQLData

type Data struct {
	From		string
	To			string
	Data		SQLDataSlice
}

func SQLFactory(username, password, host, db string, port int) SQLConfig {
	return SQLConfig{username, password, host, port, db}
}

func GetMD5Hash(text string) string {
	hasher := md5.New()
	hasher.Write([]byte(text))
	return hex.EncodeToString(hasher.Sum(nil))
}

func generateSalt() string {
	const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	b := make([]byte, 10)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return string(b)
}

func (this SQLConfig) MysqlAuthentificate(username, password string) Authentification {
	var usern, passw, salt1, salt2, fname, lname string
	var auth Authentification

	inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
	db, err := sql.Open("mysql", inf)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT NICKNAME, PASSWORD, SALT1, SALT2, FIRSTNAME, LASTNAME FROM USERS WHERE NICKNAME='" + username + "'")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&usern, &passw, &salt1, &salt2, &fname, &lname)
		if err != nil {
			panic(err)
		}
	}

	saltedPassword := fmt.Sprintf(salt1 + password + salt2)
	hashedPassword := GetMD5Hash(saltedPassword)
	if hashedPassword == passw {
		auth.Valid = true
		auth.Username = username
		auth.Firstname = fname
		auth.Lastname = lname
	} else {
		auth.Valid = false
		auth.Username = ""
	}

	return auth
}

func (this SQLConfig) MysqlRegistration(firstname, lastname, username, password, email string) int {
	var MySQLResultUser string

	inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
	db, err := sql.Open("mysql", inf)
	if err != nil {
		panic(err)
		return -2
	}
	defer db.Close()

	rows, err := db.Query("SELECT NICKNAME FROM USERS WHERE NICKNAME='" + username + "'")
	if err != nil {
		panic(err)
		return -2
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&MySQLResultUser)
		if err != nil {
			panic(err)
			return -2
		}
	}

	if MySQLResultUser != "" {
		return -1
	}

	salt1 := generateSalt()
	salt2 := generateSalt()
	saltedPassword := fmt.Sprintf(salt1 + password + salt2)
	hashedPassword := GetMD5Hash(saltedPassword)

	_, err = db.Exec("INSERT INTO USERS (FIRSTNAME, LASTNAME, NICKNAME, PASSWORD, SALT1, SALT2, TYPE, EMAIL) VALUES ('" + firstname + "', '" + lastname + "', '" + username + "', '" +
		hashedPassword + "', '" + salt1 + "', '" + salt2 + "', '" + "user" + "', '" + email + "')")

	if err != nil {
		panic(err)
		return -2
	}

	return 0
}

func (this SQLConfig) MysqlSearchTimetable(from, to, date, discount string, potjegy, helyi, atszallas, kerekpar bool) Data {
	var finalResult Data
	var result SQLDataSlice
	var data SQLData
	var query string
	var d1,d2,d3,d4,d5,d6,d7,d8 string //adatbazis adatok
	pricePerKM := 18

	//baseQuery := "SELECT * FROM TRAINS INNER JOIN TRAIN_ROUTE_CONNECTION ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID INNER JOIN (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID INNER JOIN (SELECT STATION_INDEX_IN_ROUTE AS 'TMP_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID' FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID WHERE STATIONS.NAME = '"+ from +"') TMP2 ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID WHERE STATIONS.NAME = '"+ to +"' AND TMP2.TMP_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP.ROUTES_ID WHERE DATE(TRAIN_ROUTE_CONNECTION.START) = DATE('"+ date +"') AND TRAIN_ROUTE_CONNECTION.START > NOW();"
	baseQuery := "SELECT * FROM TRAINS INNER JOIN TRAIN_ROUTE_CONNECTION ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID INNER JOIN (SELECT ROUTE_STATIONS_CONNECTION.ROUTES_ID , SUM(ROUTE_STATIONS_CONNECTION.EXPLETIVE_TICKET) AS 'TMP3_EXPLETIVE_TICKET' FROM ROUTE_STATIONS_CONNECTION	INNER JOIN (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID INNER JOIN (SELECT STATION_INDEX_IN_ROUTE AS 'TMP2_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID' FROM ROUTE_STATIONS_CONNECTION	INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID WHERE STATIONS.NAME = '"+to+"') TMP2	ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID WHERE STATIONS.NAME = '"+from+"' AND TMP2.TMP2_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP.ROUTES_ID WHERE ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE BETWEEN TMP.STATION_INDEX_IN_ROUTE AND TMP.TMP2_STATION_INDEX_IN_ROUTE GROUP BY ROUTE_STATIONS_CONNECTION.ROUTES_ID) TMP3 ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP3.ROUTES_ID WHERE DATE(TRAIN_ROUTE_CONNECTION.START) = DATE('"+date+"') AND TRAIN_ROUTE_CONNECTION.START > NOW()"
	withoutExtraTicketQuery := " AND TMP3.TMP3_EXPLETIVE_TICKET = 0"

	distanceAndTimeQuery := "SELECT WAGONS.TRAINS_ID, SPEED, DISTANCE_BETWEEN_START_AND_STOP, CLASS1_SERVICES, CLASS2_SERVICES, EXTRA_PRICE, START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE AS 'START_TIME', START + INTERVAL (DISTANCE_BEFORE_START+DISTANCE_BETWEEN_START_AND_STOP)/SPEED*60.0 MINUTE AS 'ARRIVE_TIME' FROM WAGONS INNER JOIN (SELECT *, SUM(CASE WHEN STATION_INDEX_IN_ROUTE < START_INDEX_IN_ROUTE THEN DISTANCE ELSE 0 END) AS 'DISTANCE_BEFORE_START', SUM(CASE WHEN (STATION_INDEX_IN_ROUTE >= START_INDEX_IN_ROUTE AND STATION_INDEX_IN_ROUTE < STOP_INDEX_IN_ROUTE) THEN DISTANCE ELSE 0 END) AS 'DISTANCE_BETWEEN_START_AND_STOP' FROM (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN (SELECT TRAINS.ID, TRAINS.SPEED, TRAIN_ROUTE_CONNECTION.ROUTES_ID AS 'TMP4_ROUTES_ID', TRAIN_ROUTE_CONNECTION.START, TMP3.STATION_INDEX_IN_ROUTE AS 'START_INDEX_IN_ROUTE', TMP3.TMP2_STATION_INDEX_IN_ROUTE AS 'STOP_INDEX_IN_ROUTE', TMP3.STATIONS_ID AS 'START_STATIONS_ID', TMP3.TMP2_STATIONS_ID AS 'STOP_STATIONS_ID' FROM TRAINS INNER JOIN TRAIN_ROUTE_CONNECTION ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID INNER JOIN (SELECT ROUTE_STATIONS_CONNECTION.ROUTES_ID , SUM(ROUTE_STATIONS_CONNECTION.EXPLETIVE_TICKET) AS 'TMP3_EXPLETIVE_TICKET', ROUTE_STATIONS_CONNECTION.TYPE_OF_TRAINS_STOPS AS 'FROM_TYPE_OF_TRAINS_STOPS', TMP.TO_TYPE_OF_TRAINS_STOPS, TMP.STATIONS_ID, TMP.TMP2_STATIONS_ID, TMP.STATION_INDEX_IN_ROUTE, TMP.TMP2_STATION_INDEX_IN_ROUTE FROM ROUTE_STATIONS_CONNECTION INNER JOIN (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS  ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID INNER JOIN (SELECT STATIONS_ID AS 'TMP2_STATIONS_ID', STATION_INDEX_IN_ROUTE AS 'TMP2_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID', TYPE_OF_TRAINS_STOPS AS 'TO_TYPE_OF_TRAINS_STOPS' FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS  ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID WHERE STATIONS.NAME = '"+to+"') TMP2 ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID WHERE STATIONS.NAME = '"+from+"' AND TMP2.TMP2_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP.ROUTES_ID WHERE ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE BETWEEN TMP.STATION_INDEX_IN_ROUTE AND TMP.TMP2_STATION_INDEX_IN_ROUTE GROUP BY ROUTE_STATIONS_CONNECTION.ROUTES_ID) TMP3 ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP3.ROUTES_ID WHERE TMP3.TMP3_EXPLETIVE_TICKET = 0 AND TMP3.FROM_TYPE_OF_TRAINS_STOPS LIKE CONCAT('%',TRAINS.TYPE,'%') AND TMP3.TO_TYPE_OF_TRAINS_STOPS LIKE CONCAT('%',TRAINS.TYPE,'%')) TMP4 ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP4.TMP4_ROUTES_ID) TMP8 INNER JOIN (SELECT ROUTES_ID AS 'TMP9_ROUTES_ID', STATION_INDEX_IN_ROUTE AS 'TMP9_STATION_INDEX_IN_ROUTE', STATIONS_ID AS 'TMP9_STATIONS_ID' FROM ROUTE_STATIONS_CONNECTION) TMP9 ON TMP8.ROUTES_ID = TMP9.TMP9_ROUTES_ID AND TMP8.STATION_INDEX_IN_ROUTE+1 = TMP9.TMP9_STATION_INDEX_IN_ROUTE INNER JOIN (SELECT NEIGHBOUR_ID, DISTANCE, STATIONS_ID AS 'TMP10_STATIONS_ID' FROM NEIGHBOURS) TMP10 ON TMP10.NEIGHBOUR_ID = TMP9.TMP9_STATIONS_ID AND TMP10.TMP10_STATIONS_ID = TMP8.STATIONS_ID GROUP BY ROUTES_ID) TMP7 ON TMP7.ID = WAGONS.TRAINS_ID INNER JOIN (SELECT TRAINS_ID, CASE WHEN ISNULL(GROUP_CONCAT(CASE WHEN CLASS = 1 THEN SERVICES END separator ';')) THEN 0 ELSE GROUP_CONCAT(CASE WHEN CLASS = 1 THEN SERVICES END separator ';') END AS 'CLASS1_SERVICES' FROM WAGONS GROUP BY WAGONS.TRAINS_ID) TMP5 ON WAGONS.TRAINS_ID = TMP5.TRAINS_ID INNER JOIN (SELECT TRAINS_ID, CASE WHEN ISNULL(GROUP_CONCAT(CASE WHEN CLASS = 2 THEN SERVICES END separator ';')) THEN 0 ELSE GROUP_CONCAT(CASE WHEN CLASS = 2 THEN SERVICES END separator ';') END AS 'CLASS2_SERVICES' FROM WAGONS GROUP BY WAGONS.TRAINS_ID) TMP6 ON WAGONS.TRAINS_ID = TMP6.TRAINS_ID WHERE DATE(START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE) = DATE('"+date+"') AND START + INTERVAL DISTANCE_BEFORE_START/SPEED*60.0 MINUTE > NOW() GROUP BY WAGONS.TRAINS_ID;"
	//plusServicesQuery := "-- EXAMPLE WHERE (CLASS1_SERVICES LIKE '%1%' OR CLASS2_SERVICES LIKE '%1%') AND (CLASS1_SERVICES LIKE '%4%' OR CLASS2_SERVICES LIKE '%4%')"
	result = make(SQLDataSlice, 0)

	query = baseQuery
	if potjegy {
		query = query + withoutExtraTicketQuery
	}

	inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
	db, err := sql.Open("mysql", inf)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	rows, err := db.Query(distanceAndTimeQuery)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&d1, &d2, &d3, &d4, &d5, &d6, &d7, &d8)
		if err != nil {
			panic(err)
		}

		var trainInfo TrainInformation
		departure := d7[11:19]
		arrival := d8[11:19]
		changes := "0" //TODO querybol kiszedni majd

		d, err := time.Parse("2006-01-02 15:04:00", d7)
		if err != nil {
				panic(err)
		}

		a, err := time.Parse("2006-01-02 15:04:00", d8)
		if err != nil {
				panic(err)
		}

		delta := a.Sub(d)
		h := int(delta.Seconds()/3600)
		min := (int(delta.Seconds())%3600)/60
		sec := (int(delta.Seconds())%3600)%60
		var duration string
		if h<10 {
			h := "0"+strconv.Itoa(h)
			duration = h + ":"
		} else {
			duration = fmt.Sprintf("%d:",h)
		}
		if min<10 {
			min := "0"+strconv.Itoa(min)
			duration = duration + min + ":"
		} else {
			duration = duration + fmt.Sprintf("%d:",min)
		}
		if sec<10 {
			sec := "0"+strconv.Itoa(sec)
			duration = duration + sec
		} else {
			duration = duration + fmt.Sprintf("%d",sec)
		}

		distance := d3
		km, err := strconv.Atoi(distance)
		percent, err := strconv.Atoi(discount)
		extra, err := strconv.Atoi(d6)
		price := strconv.Itoa((km*pricePerKM + extra) * percent/100) // (distance*kmdij + plusprice) * discount/100

		/*belso adatok*/
		trainInfo.Station = append(trainInfo.Station, from)
		trainInfo.Station = append(trainInfo.Station, to)
		trainInfo.Timetable = append(trainInfo.Timetable, departure)
		trainInfo.Timetable = append(trainInfo.Timetable, arrival)
		trainInfo.Train = append(trainInfo.Train, d1)

		var service TrainServices
		str := d4
		for i:=0; i<len(str); i+=2 {
			if str[i] == '1' { service.S1_Toilet = true }
			if str[i] == '2' { service.S1_DisabledToilet = true }
			if str[i] == '3' { service.S1_DiaperChange = true }
			if str[i] == '4' { service.S1_AirConditioner = true }
			if str[i] == '5' { service.S1_Wifi = true }
			if str[i] == '6' { service.S1_PowerConnector = true }
			if str[i] == '7' { service.S1_Restaurant = true }
			if str[i] == '8' { service.S1_BikeShed = true }
			if str[i] == '9' { service.S1_Bed = true }
		}
		str = d5
		for i:=0; i<len(str); i+=2 {
			if str[i] == '1' { service.S2_Toilet = true }
			if str[i] == '2' { service.S2_DisabledToilet = true }
			if str[i] == '3' { service.S2_DiaperChange = true }
			if str[i] == '4' { service.S2_AirConditioner = true }
			if str[i] == '5' { service.S2_Wifi = true }
			if str[i] == '6' { service.S2_PowerConnector = true }
			if str[i] == '7' { service.S2_Restaurant = true }
			if str[i] == '8' { service.S2_BikeShed = true }
			if str[i] == '9' { service.S2_Bed = true }
		}
		trainInfo.Services = append(trainInfo.Services, service)

		data.From = from
		data.To = to
		data.Date = date
		data.Departure = departure
		data.Arrival = arrival
		data.Changes = changes
		data.Duration = duration
		data.Distance = distance
		data.Price = price
		data.Info = trainInfo

		result = append(result, data)
	}
	finalResult.From = from
	finalResult.To = to
	finalResult.Data = result
	return finalResult
}
