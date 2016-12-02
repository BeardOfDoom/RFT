package Adapter

import (
	"crypto/md5"
	"database/sql"
	"encoding/hex"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"math/rand"
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

/*type TrainInformation struct {
	Station					[]string
	Timetable				[]string
	Train						[]string
	Toilet					bool
	DisabledToilet	bool
	DiaperChange		bool
	AirConditioner	bool
	Wifi						bool
	PowerConnector	bool
	Restaurant			bool
	BikeShed				bool
	Bed							bool
}*/

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
	//Info			TrainInformation
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

func (this SQLConfig) MysqlSearchTimetable(from, to, date, discount string, potjegy, helyi, atszallas, kerekpar bool) SQLData {
	var result SQLData
	var query string
	var d1,d2,d3,d4,d5,d6,d7,d8 string
	//baseQuery := "SELECT * FROM TRAINS INNER JOIN TRAIN_ROUTE_CONNECTION ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID INNER JOIN (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID INNER JOIN (SELECT STATION_INDEX_IN_ROUTE AS 'TMP_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID' FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID WHERE STATIONS.NAME = '"+ from +"') TMP2 ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID WHERE STATIONS.NAME = '"+ to +"' AND TMP2.TMP_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP.ROUTES_ID WHERE DATE(TRAIN_ROUTE_CONNECTION.START) = DATE('"+ date +"') AND TRAIN_ROUTE_CONNECTION.START > NOW();"
	baseQuery := "SELECT * FROM TRAINS INNER JOIN TRAIN_ROUTE_CONNECTION ON TRAINS.ID = TRAIN_ROUTE_CONNECTION.TRAINS_ID INNER JOIN (SELECT ROUTE_STATIONS_CONNECTION.ROUTES_ID , SUM(ROUTE_STATIONS_CONNECTION.EXPLETIVE_TICKET) AS 'TMP3_EXPLETIVE_TICKET' FROM ROUTE_STATIONS_CONNECTION	INNER JOIN (SELECT * FROM ROUTE_STATIONS_CONNECTION INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID INNER JOIN (SELECT STATION_INDEX_IN_ROUTE AS 'TMP2_STATION_INDEX_IN_ROUTE', ROUTES_ID AS 'TMP2_ROUTES_ID' FROM ROUTE_STATIONS_CONNECTION	INNER JOIN STATIONS ON ROUTE_STATIONS_CONNECTION.STATIONS_ID = STATIONS.ID WHERE STATIONS.NAME = '"+from+"') TMP2	ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP2.TMP2_ROUTES_ID WHERE STATIONS.NAME = '"+to+"' AND TMP2.TMP2_STATION_INDEX_IN_ROUTE > ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE) TMP ON ROUTE_STATIONS_CONNECTION.ROUTES_ID = TMP.ROUTES_ID WHERE ROUTE_STATIONS_CONNECTION.STATION_INDEX_IN_ROUTE BETWEEN TMP.STATION_INDEX_IN_ROUTE AND TMP.TMP2_STATION_INDEX_IN_ROUTE GROUP BY ROUTE_STATIONS_CONNECTION.ROUTES_ID) TMP3 ON TRAIN_ROUTE_CONNECTION.ROUTES_ID = TMP3.ROUTES_ID WHERE DATE(TRAIN_ROUTE_CONNECTION.START) = DATE('"+date+"') AND TRAIN_ROUTE_CONNECTION.START > NOW()"
	withoutExtraTicketQuery := " AND TMP3.TMP3_EXPLETIVE_TICKET = 0"

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

	rows, err := db.Query(query)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&d1, &d2, &d3, &d4, &d5, &d6, &d7, &d8)
		if err != nil {
			panic(err)
		}
		departure := d4[11:19]
		arrival := "23:59:59" //TODO vonat sebbessege es az utvonal hosszabol kiszamitani + minden megallonal kis ido varakoza
		changes := "0" //TODO querybol kiszedni majd
		duration := "03:20:10" //TODO duration = arrival - departure
		distance := "300" //TODO querybol kiszedni majd
		price := "3500" // (distance*kmdij + plusprice) * discount/100

		result.From = from
		result.To = to
		result.Date = date
		result.Departure = departure
		result.Arrival = arrival
		result.Changes = changes
		result.Duration = duration
		result.Distance = distance
		result.Price = price

	}
	return result
}
