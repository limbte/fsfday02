// load express and load path
var path = require("path");
var express = require("express");

// create instance of express app
var app = express();

// define routes
app.use(express.static(__dirname + "/public"));
// app.use("/images", express.static(__dirname + "/public")); match the dir "/images", path can be virtual.
//console.info(">> dirname " + __dirname);

// process.argv
// print out the elements of argv
// for (var i=0; i< process.argv.length; i++)
    // console.log("argv[%d] = %s (type= %s)", i, process.argv[i], typeof process.argv[i] );

// configure port
// app.set("port",3000);

console.log(">> port: %d", process.env.APP_PORT);
// use cml value if not use APP_PORT value if not then 3000
app.set("port", parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000);

// var strPort = process.argv[2];
// if(strPort)
    // port = parseInt(strPort);
// else
    // port =3000    

// var port = parseInt(process.argv[2]) || 3000;

app.listen(app.get("port"), function(){
    console.info("Application is listening on port" + app.get("port"));
    })


