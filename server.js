//initialize dependencies
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
let connectionString = 'mongodb+srv://mongo_user:Mygind4077@cluster0-usxmc.mongodb.net/star-wars-quotes?retryWrites=true&w=majority';

//initialize ExpressJS app
const app = express();

//connect to mongo db
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {

        console.log('Connected to Mongo DB')

        //make sure to setup body-parser before routes!
        app.use(bodyParser.urlencoded({extended : true}));
        
        const db = client.db('star-wars-quotes');
        
        app.get('/', function(req, res) {
            console.log(__dirname);
            res.sendFile(__dirname + '/views/index.html');
            //__dirname is current directory your in.
        })
        
        app.post('/quotes', (req, res) => {
            console.log(req.body.name);
            console.log(req.body.quote);
        })

        app.listen(80, () => { console.log('listening on 80') })
    })
    .catch(error => console.log(error))
 