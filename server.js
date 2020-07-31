//initialize dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//make sure to setup body-parser before routes!
app.use(bodyParser.urlencoded({extended : true}));


app.listen(80, function() {
    console.log('listening on 80');
})

app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
    //__dirname is current directory your in.
})

app.post('/quotes', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.quote);
})
