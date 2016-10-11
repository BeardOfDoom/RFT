package Handler

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func WebHandler(w http.ResponseWriter, r *http.Request) {
	fileName := fmt.Sprintf("View/%s", r.URL.Path[1:])
	body, err := ioutil.ReadFile(fileName)
	fmt.Printf("File loaded: %s\n", fileName)
	if err != nil {
		fmt.Println(err)
	}
	if strings.Contains(fileName, "css") {
		w.Header().Add("Content-type", "text/css")
	} else if strings.Contains(fileName, "js") {
		w.Header().Add("Content-type", "application/javascript")
	}
	fmt.Fprintf(w, "%s", body)
}
