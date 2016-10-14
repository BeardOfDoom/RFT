package main

import (
  "Handler"
  "net/http"
  "fmt"
)

func info() {
  fmt.Println("----------------------------------------------------------------")
  fmt.Println("The Website is running.")
  fmt.Println("Please visit: http://localhost:8000/")
  fmt.Println("----------------------------------------------------------------")
}

func main() {
  info()
  http.HandleFunc("/", Handler.Homepage)
  http.HandleFunc("/TrainsAndTickets", Handler.TrainsAndTickets)
  http.HandleFunc("/Login", Handler.Login)
  http.HandleFunc("/Authentificate", Handler.Authentificate)
  http.HandleFunc("/Register", Handler.Register)
  http.HandleFunc("/Web/", Handler.WebHandler)
	http.ListenAndServe(":8000", nil)
}
