# **RFT Vasút**

A webalkalmazás Beadandó feladat-ként íródott.<br/>
Az alkalmazás egy `kitalált` vasúti társaság (RFTVasút) webes felületét reprezentálja.<br/>

#### **Az alkalmazás fejlesztői**

- Gencsi Mátyás (Frontend, Képek / Logók és nagyon kevés backend)
- Birtalan Róbert-László (Backend)
- Vécsi Ádám (Adatbázis és backend)

#### **Felhasználási jogok**

Az alkalmazásban felhasznált képeknek egy részének a forrása: Google Képek,<br/>
melyeknek felhasználási joga: Újrafelhasználható és módosítható.<br/>
A többi felhasznált kép saját tervezésű és kivitelezésű.

#### **Felhasznált technológiák (és eszközök)**

- **Frontend**

  ✔ HTML5 <br/>
  ✔ CSS3 <br/>
  ✔ JavaScript <br/>
  ✔ jQuery 2.1.4 <br/>
  ✔ jQuery-ui 1.12.1 <br/>
  ✔ Bootstrap v.3.* <br/>
  ✔ jssor-slider 21.1.6 <br/>

- **Képek / Logók**

  ✔ Adobe Photoshop <br/>
  ✔ Photoscape <br/>

- **Backend**

  ✔ Google Go <br/>
  ✔ boombuler barcode <br/>

- **Adatbázis**

  ✔ MySQL <br/>
  ✔ go-sql-driver <br/>

<br/>

### **Az alkalmazásról**

**Főbb funkciók**

- Járatok keresése
- Jegyvásárlás (Bejelentkezést igényel)
- Információk lekérése egy megvásárolt jegyről
- Vonat lekövetése térképen (Bejelentkezést igényel)
- Regisztrálás lehetősége
- Bejelentkezés

**Járatok keresése**

  A keresési információk (minimum: honnan, hova, mikor) megadása után, kilistázza az összes keresési feltételnek eleget tevő járatot.<br/>
  Az eredmények között szerepelhetnek olyan alternatívák is, ahol 1 átszállás szükséges.

**Jegyvásárlás (Bejelentkezést igényel)**

  Lehetőség van a jegyvásárlásra, valamint a helyjegy kiválasztására is (amennyiben szükséges a kiválasztott vonatra).<br/>
  Vásárlás után a felhasználó kap egy vásárlási azonosítót és egy hozzá tartozó jelszót, amely segítségével bármikor megtekintheti megvásárolt jegyéről az információkat.

**Információk lekérése egy megvásárolt jegyről**

  A vásárlási azonosító és a hozzá tartozó jelszó után, kilistázza az adott jegyről az információkat.

**Vonat lekövetése térképen (Bejelentkezést igényel)**

  Tetszőleges vonatot élőben lehet követni a térképen.
