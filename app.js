var express = require("express"),
    bodyParser = require("body-parser"),
    jsdom = require("jsdom"),
    functions = require("./functions");

var app = express();
var day = new Date().getDay();
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    var text = req.body.Body.toLowerCase();
    if (text == "foothill") {
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                // var foothill =  $(".title1 + table + hr + .title2").text();
                var foothill = "Foothill(2700 Hearst Ave)"
                //adding hours
                if(day >= 1 && day <= 5){
                    end(twiml, functions.foothillWeekday(foothill, $), res);
                } else {
                    end(twiml, functions.foothillWeekend(foothill, $), res);
                }
                // end(twiml, foothill, res);
            }
        });
    } else if(req.body.Body == 'bye') {
        twiml.message('Goodbye');
    } else {
        twiml.message('No Body param match, Twilio sends this in the request to your server.');
    }
    // res.writeHead(200, {'Content-Type': 'text/xml'});
    // res.end(twiml.toString());
});


//end request
function end(twiml, message, res){
    twiml.message(message);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});