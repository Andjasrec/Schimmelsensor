# Schimmelbild

Das Schimmelbild ist entworfen worden um gegen den Schimmel ein präventiv option zu haben, mit einem Esp der die Luftfeuchtigkeit misst und die Daten weiterschickt und verarbeitet werden kann man durch einen Verlauf erkennen ob man was tun sollte da sonst die Schimmmelgefahr wächst.

## Sensordaten messen
Zu aller erst müssen wir Daten bekommen dafür brauchen wir ein Lesegerät. In meinem Beispiel habe ich ein ESP 32 genommen da er WiFi fähig ist. Dann müssen wir unser Lesegerät mit einem Luftfeuchtigkeits und Temperatursensor verbinden. Ein Beispielcode finden sie hier https://github.com/Andjasrec/schimmellesegeraet.

Die Daten werden dann über Mqtt an ein Backend geschickt der die Daten weiterverarbeitet

## Backend

Das Backend können sie hier einsehen https://github.com/Andjasrec/Schimmelsensor-backend. Das Backend nimmt die Daten die es von mqtt bekommt an und verarbeitet sie weiter.
Die Daten sind in unserem Fall zwei Werte, 
Lufttemperatur, Luftfeuchtigkeit
diese Daten werden im Code dann an unsere Datenbank geschickt, außerdem verarbeitet das Backend all unsere Daten die wir vom Frontend bekommen und erstellt uns verschiedene REST-Points. 

## Frontend

Das Frontend besteht aus 3 Hauptscreens einmal wo man sich registrieren kann, ein Login Screen und ein Feed Screen. 
Die Daten von der Register Seite werden über das Backend an die Datenbank gesendet und dort wird man dann als User registriert.
Dann kann man sich als User einloggen im Login Screen, die Daten werden über das Backend dann mit der Datenbank verglichen ob es diesen User gibt und ob das Passwort auch übereinstimmt.
Nach dem der Username und das Passwort stimmen wird man auf die Feed Seite weitergeleitet, die Seite zeigt einem eine Tabelle die die letzten 50 Daten aus der Datenbank darstellt.
ausßerdem werden die letzten Temperaturdaten dargestellt.

## Future Work 

Das Frontend muss noch ein Taupegel bekommen, mit ihm kann man dan vergleichen ob es möglich ist das sich schimmel ablegt wenn die Lufttemperatur und feuchtigkt zu niedrig fallen.
Außderdem sollte jeder User seine eigene Seite bekommen
Datenbank aufbau
Für Strom aufwand muss man schauen ob man das System an die Steckdose verbinden will oder ob man ein Kabelloses system verwenden will.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
