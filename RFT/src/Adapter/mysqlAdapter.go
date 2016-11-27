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

func (this SQLConfig) MySqlTest() {

	var id, name string

	inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
	db, err := sql.Open("mysql", inf)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT * FROM test")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		err := rows.Scan(&id, &name)
		if err != nil {
			panic(err)
		}
		fmt.Println(id, " ", name)
	}

}

func (this SQLConfig) MysqlAuthentificate(username, password string) bool {
	var usern, passw, salt string

	inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
	db, err := sql.Open("mysql", inf)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT username, password, salt FROM users WHERE username='" + username + "'")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	/* #TODO
	   tesztelni, mikor jo mikor nem, return false megirni
	*/
	for rows.Next() {
		err := rows.Scan(&usern, &passw, &salt)
		if err != nil {
			panic(err)
		}
	}

	data := []byte(salt + password)
	md5Sum := md5.Sum(data)
	s := string(md5Sum[:])
	if s == passw {
		return true
	} else {
		return false
	}
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
