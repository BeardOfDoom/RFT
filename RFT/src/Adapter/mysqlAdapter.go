package Adapter

import (
  "fmt"
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
  "crypto/md5"
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
