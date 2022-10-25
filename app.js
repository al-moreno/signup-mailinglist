// import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')


const app = express();


app.get('/', function(req, res){
    res.send('hello');
})



app.listen(3000, function(){
    console.log("Server listening on port 3000");
})
