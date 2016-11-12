var express = require("express"),
    bodyParser = require("body-parser"),
    jsdom = require("jsdom"),
    functions = require("./misc/functions"),
    indexRoutes = require("./routes/index");

var app = express();
var day = new Date().getDay();
var recognized = ["Foothill", "Cafe 3", "Crossroads", "Clark Kerr", "Golden Bear Cafe", "Qualcomm Cafe"];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.post('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    var text = req.body.Body.toLowerCase();
    text = text.replace(/\s+/g, '');
    if (text == "foothill") {
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var foothill = "Foothill(2700 Hearst Ave)"
                //adding hours
                if(day >= 1 && day <= 5){
                    foothill = functions.foothillWeekday(foothill, $);
                } else {
                    foothill = functions.foothillWeekend(foothill, $)
                }
                foothill += "\n" + "Menu: " + "http://caldining.berkeley.edu/menus/foothill";
                end(twiml, foothill, res);
            }
        });
    } else if(text == 'cafe3' || text == 'cafethree') {
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var cafe3 = "Cafe 3(2400 Durant Ave)";
                if(day >= 1 && day <= 5){
                    cafe3 = functions.cafeThreeWeekday(cafe3, $);
                } else {
                    cafe3 = functions.cafeThreeWeekend(cafe3, $);
                }
                cafe3 += "\n" + "Menu: " + "http://caldining.berkeley.edu/menus/cafe3";
                end(twiml, cafe3, res);
            }
        });
    } else if(text == 'crossroads' || text == 'croads' || text == 'xroads'){
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var croads = "Crossroads(2415 Bowditch St)";
                if(day >= 1 && day <= 5){
                    croads = functions.croadsWeekday(croads, $);
                } else {
                    croads = functions.croadsWeekend(croads, $);
                }
                if(day >= 0 && day <= 4){
                    croads += "\n" + "Late night: 10pm - 2am";
                } else {
                    croads += "\n" + "Late night: no late night service";
                }
                croads += "\n" + "Menu: " + "http://caldining.berkeley.edu/menus/crossroads";
                end(twiml, croads, res);
            }
        });
    } else if(text == "clarkkerr") {
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var ck = "Crossroads(2610 Warring St)";
                if(day >= 1 && day <= 5){
                    ck = functions.ckWeekday(ck, $);
                } else {
                    ck = functions.ckWeekend(ck, $);
                }
                ck += "\n" + "Menu: " + "http://caldining.berkeley.edu/menus/clark-kerr-campus";
                end(twiml, ck, res);
            }
        });
    } else if(text=="gbc" || text == "goldenbearcafe"){
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var gbc = "Golden Bear Cafe(Upper Sproul Plaza)";
                if(day >= 1 && day <= 4){
                    gbc = functions.gbcWeekday(gbc, $);
                } else if (day == 5) {
                    gbc = functions.gbcFriday(gbc, $);
                } else {
                    gbc = "Closed on weekends";
                }
                end(twiml, gbc, res);
            }
        });
    } else if(text=="qualcommcafe"){
        jsdom.env({
            url: "http://caldining.berkeley.edu/locations/semester-hours",
            scripts: ["https://code.jquery.com/jquery-3.1.1.min.js"],
            done: function (errors, window) {
                var $ = window.$;
                var qc = "Qualcomm Cafe(Sutardja Dai Hall)";
                if(day >= 1 && day <= 4){
                    qc = functions.gbcWeekday(qc, $);
                } else if (day == 5) {
                    qc = functions.gbcFriday(qc, $);
                } else {
                    qc = "Closed on weekends";
                }
                end(twiml, qc, res);
            }
        });
    } else {
        var error = "Sorry, I don't recognize that location. Here are the ones I do know: "
        recognized.forEach(function(place){
            error = error + "\n" + place;
        });
        end(twiml, error, res);
    }
});


//end request
function end(twiml, message, res){
    twiml.message(message);
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
}

app.use(indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});