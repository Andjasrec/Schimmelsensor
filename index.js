var mqtt = require('mqtt')
var mqttclient  = mqtt.connect('mqtt://mqtt.hfg.design')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Andja:Janklause1@andjascluster.z6wgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var db;
var data;

mqttclient.on('connect', function () {
    mqttclient.subscribe('/sweavs/jan/Messungen', function (err) {
    if (!err) {
        console.log("Verbunden mit Mqtt");
    }
  })
})

const dbclient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

dbclient.connect(err => {
    //console.log(err)
    console.log("Verbunden mit der Schimmelbank");
    db = dbclient.db("Schimmelsensor");
    data = db.collection("Eingangsdaten");
    mqttclient.on('message', function (topic, message) {
        // message is Buffer
        //console.log(message.toString());
        saveData(message);
    })
})

function saveData(message) {
    let doc = JSON.parse(message);
    doc.createdat = new Date();
    if (data) {
      data.insertOne(doc,  (err, res) => {
        //console.log(err)
        const insertedCount = res.insertedCount;
        console.log("inserted " + insertedCount + " document(s) in database.");
      })
    }
  }

var express = require('express')
const app = express()
const port = 3000

app.listen(port, ()=> {
  console.log("Verbunden mit http://localhost:3000/api/latest")
})

app.get('/api/latest', (req, res)=>{
  data.find({}).sort({'createdat': -1}).limit(1).next()
  .then(async(latest)=>{
    res.send(latest)
  })
})
