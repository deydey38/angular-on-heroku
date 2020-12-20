const express = require('express');
const path = require('path');
const app = express();
var mysql = require('mysql');

app.set('view engine', 'ejs')

app.get('/test', (request, response) => {
    con.query("Select * from Shows", function (err, result) {
        if (err) throw err;
        console.log(result);
        response.render('test', {data: result})
      });
})

app.listen(8080)

var con = mysql.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b2887a7b5699c2",
    password: "64faf0bf",
    database: "heroku_d8ec7912c164a62"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("Select * from Shows", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});


/*
app.use(express.static(__dirname + '/dist/angular-on-heroku'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/angular-on-heroku/index.html'));});
app.listen(process.env.PORT || 8080);*/

