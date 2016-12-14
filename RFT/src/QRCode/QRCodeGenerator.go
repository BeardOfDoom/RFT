package QRCode

import (
	"bytes"
	"github.com/boombuler/barcode"
	"github.com/boombuler/barcode/qr"
	"image/png"
	"net/url"
)

func GenerateQR(id, pass string) []byte {

	data:= "/TicketInformation?jegyAzonosito=" + id + "&amp;jelszo=" + pass

	s, _ := url.QueryUnescape(data)
	code, _ := qr.Encode(s, qr.L, qr.Auto)
	intsize := 350
	code, _ = barcode.Scale(code, intsize, intsize)


	buffer := new(bytes.Buffer)
	if err := png.Encode(buffer, code); err != nil {

	}
	return buffer.Bytes()

	//w.Header().Set("Content-Type", "image/png")
	//w.Header().Set("Content-Length", strconv.Itoa(len(buffer.Bytes())))

	//if _, err := w.Write(buffer.Bytes()); err != nil {
		//http.Error(w, "", http.StatusInternalServerError)
		//return
	//}
}
