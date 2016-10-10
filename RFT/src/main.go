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
	http.ListenAndServe(":8000", nil)
}
