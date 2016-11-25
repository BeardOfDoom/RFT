package Adapter

import (
  "fmt"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  "crypto/md5"
  "math/rand"
)

type SQLConfig struct {
  username string
  password string
  host string
  port int
  db string
}

func SQLFactory(username, password, host, db string, port int) SQLConfig {
	return SQLConfig{username, password, host, port, db}
}

func (this SQLConfig) MysqlAuthentificate(username, password string) bool {
    var usern, passw, salt string

    inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
    db, err := sql.Open("mysql", inf);
    if err != nil {
      panic(err)
    }
    defer db.Close()

    rows, err := db.Query("SELECT username, password, salt FROM users WHERE username='"+ username +"'")
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

func generateSalt() string {
    const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    b := make([]byte, 10)
    for i := range b {
        b[i] = letterBytes[rand.Intn(len(letterBytes))]
    }
    return string(b)
}

func (this SQLConfig) MysqlRegistrationAuthentificate(username, password, fullname string) bool {
  var usern, salt string

  inf := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s", this.username, this.password, this.host, this.port, this.db)
  db, err := sql.Open("mysql", inf);
  if err != nil {
    panic(err)
  }
  defer db.Close()

  rows, err := db.Query("SELECT username FROM users WHERE username='"+ username +"'")
  if err != nil {
    panic(err)
  }
  defer rows.Close()

  for rows.Next() {
    err := rows.Scan(&usern)
    if err != nil {
      panic(err)
    }
  }
  if(usern != "") {
    return false
  }

  salt = generateSalt()
  data := []byte(salt + password)
  md5Sum := md5.Sum(data)
  s := string(md5Sum[:])
  _, errr := db.Exec("INSERT INTO users (username, password, salt, fullname) VALUES ('"+username+"', '"+
          s +"', '"+ salt +"', '"+ fullname +"')")
  if errr != nil {
    panic(err)
    return false
  }
  return true
}
