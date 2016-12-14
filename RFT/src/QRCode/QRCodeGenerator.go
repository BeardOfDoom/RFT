package QRCode

import (
	"bytes"
	"github.com/boombuler/barcode"
	"github.com/boombuler/barcode/qr"
	"image/png"
	"net/url"
	"net"
	"os"
)

func getIP() string {
	addrs, err := net.InterfaceAddrs()
	if err != nil {
		os.Stderr.WriteString("Oops: " + err.Error() + "\n")
		os.Exit(1)
	}

	for _, a := range addrs {
		if ipnet, ok := a.(*net.IPNet); ok && !ipnet.IP.IsLoopback() {
			if ipnet.IP.To4() != nil {
				return ipnet.IP.String()
			}
		}
	}

	return ""
}

func GenerateQR(id, pass string) []byte {

	data:= "http://" + getIP() + ":8000/TicketInformation?jegyAzonosito=" + id + "&amp;jelszo=" + pass

	s, _ := url.QueryUnescape(data)
	code, _ := qr.Encode(s, qr.L, qr.Auto)
	intsize := 200
	code, _ = barcode.Scale(code, intsize, intsize)


	buffer := new(bytes.Buffer)
	if err := png.Encode(buffer, code); err != nil {

	}
	return buffer.Bytes()
}
