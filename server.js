const express = require('express');
const path = require('path');
const app = express();
var mysql = require('mysql');

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
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});*/

/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE shows (city VARCHAR(255), date DATETIME)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });*/

app.use(express.static(__dirname + '/dist/angular-on-heroku'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/angular-on-heroku/index.html'));});
app.listen(process.env.PORT || 8080);
