var express = require("express"),
    bodyParser = require("body-parser"),
    jsdom = require("jsdom"),
    functions = require("./misc/info"),
    indexRoutes = require("./routes/index");
    // menus = require("./misc/menus");

var app = express();
var day = new Date().getDay();
var hoursURL = "http://caldining.berkeley.edu/locations/semester-hours";
var jQueryScript = "https://code.jquery.com/jquery-3.1.1.min.js";
var recognized = ["Foothill", "Cafe 3", "Crossroads", "Clark Kerr", "Golden Bear Cafe", "Qualcomm Cafe", "Brown's Cafe", "Terrace Cafe"];
var possibleTexts = ["foothill", "cafe3", "cafethree", "crossroads", "croads", "xroads", "clarkkerr",
                    "gbc", "goldenbearcafe", "qualcommcafe", "brown'scafe", "brownscafe", "terracecafe"];

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

var result = {
    "Cafe 3": {"Brunch": [], "Dinner": []}, 
    "Clark Kerr Campus": {"Breakfast":[], "Lunch":[],"Brunch": [], "Dinner": []}, 
    "Crossroads": {"Breakfast":[], "Lunch":[], "Brunch": [], "Dinner": []}, 
    "Foothill": {"Breakfast":[], "Lunch":[],"Brunch": [], "Dinner": []}
};


function removeSpaces(menus){
    for(var i = menus.length - 1; i >= 0; i--){
        menus[i] = menus[i].trim();
        if (menus[i] == '' ||  menus[i] == 'N/A'){
            var index = menus.indexOf(menus[i]);
            menus.splice(index, 1);
        }
    }
}


app.post('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    var text = req.body.Body.toLowerCase();
    text = text.replace(/\s+/g, '');
    if(text.includes("info")){
        text = text.slice(0, -4);
        jsdom.env({
            url: hoursURL,
            scripts: [jQueryScript],
            done: function (errors, window) {
                var $ = window.$;
                if(text == "crossroads" || text == "croads" || text == "xroads"){
                    crossroads(twiml, res, $);
                } else if(text == "brown'scafe" || text == "brownscafe"){
                    browns(twiml, res, $);
                } else if(text == "terracecafe"){
                    terrace(twiml, res, $);
                } else if(text == "qualcommcafe"){
                    qualcomm(twiml, res, $);
                } else if(text == "gbc" || text == "goldenbearcafe"){
                    gbc(twiml, res, $);
                } else if(text == "clarkkerr"){
                    ck(twiml, res, $);
                } else if(text == "cafe3" || text == "cafethree"){
                    c3(twiml, res, $);
                } else if(text == "foothill"){
                    foothill(twiml, res, $);
                }
            }
        });
    } else if(!text.includes("info") && possibleTexts.indexOf(text) != -1){
        jsdom.env({
            url: "http://caldining.berkeley.edu/menus/all-locations-d1",
            scripts: [jQueryScript],
            done: function (errors, window) {
                var $ = window.$;
                var menus = $(".meal_items").text();
                menus = menus.split('\n');
                removeSpaces(menus);
                var place = "";
                var time = "";
                for(var i = 0; i < menus.length; i++){
                    var current = menus[i]
                    if(current in result){
                        place = current;
                    } else if(current in result[place]){
                        time = current;
                    } else if(current != "Brunch" && current.includes("Brunch")){
                        place = current.slice(0, -6);
                        time = "Brunch";
                    } else {
                        result[place][time].push(current);
                    }
                }
                var str = ""
                if(text == "crossroads" || text == "croads" || text == "xroads"){
                    str = "Crossroads";
                } else if(text == "cafe3" || text == "cafethree"){
                    str = "Cafe 3";
                } else if(text == "clarkkerr"){
                    str = "Clark Kerr Campus";
                } else if(text == "foothill"){
                    str = "Foothill"
                }
                end(twiml, printMenu(str, result[str]), res);
        
            }
        });
    } else if(text == "helpme"){
        var help = "TEXT OPTIONS: " + '\n' + "text \"<insert_restaurant_name>\" for today's menu" +
                    ',\n' + "text \"<insert_restaurant_name> info\" for hours and location";
        end(twiml, help, res);
    } else {
        var error = "Sorry, I don't recognize that location. Here are the commands I do know(not case-sensitive): "
        recognized.forEach(function(place){
            error = error + "\n" + place;
        });
        error = error + '\n' + "*TEXT \"HELP ME\" FOR HELP";
        end(twiml, error, res);
    }
});

//restaurant responses
function crossroads(twiml, res, $){
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
    end(twiml, croads, res);
}

function terrace(twiml, res, $){
    var tc = "Terrace Cafe(Bechtel Building Rooftop)";
    if(day >= 1 && day <= 5){
        tc = functions.tcWeekday(tc, $);
    } else {
        tc = "Closed on weekends";
    }
    end(twiml, tc, res);
}

function browns(twiml, res, $){
    var browns = "Brown's Cafe(Genetics & Plant Biology Rooftop)"
    if(day >= 1 && day <= 4){
        browns = functions.brownWeekday(browns, $);
    } else if(day == 5){
        browns = functions.brownFriday(browns, $);
    } else {
        browns = "Closed on weekends";
    }
    end(twiml, browns, res);
}

function qualcomm(twiml, res, $){
    var qc = "Qualcomm Cafe(Sutardja Dai Hall)";
    if(day >= 1 && day <= 4){
        qc = functions.qcWeekday(qc, $);
    } else if (day == 5) {
        qc = functions.qcFriday(qc, $);
    } else {
        qc = "Closed on weekends";
    }
    end(twiml, qc, res);
}

function gbc(twiml, res, $){
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

function ck(twiml, res, $){
    var ck = "Clark Kerr(2610 Warring St)";
    if(day >= 1 && day <= 5){
        ck = functions.ckWeekday(ck, $);
    } else {
        ck = functions.ckWeekend(ck, $);
    }
    end(twiml, ck, res);
}

function c3(twiml, res, $){
    var cafe3 = "Cafe 3(2400 Durant Ave)";
    if(day >= 1 && day <= 5){
        cafe3 = functions.cafeThreeWeekday(cafe3, $);
    } else {
        cafe3 = functions.cafeThreeWeekend(cafe3, $);
    }
    end(twiml, cafe3, res);
}

function foothill(twiml, res, $){
    var foothill = "Foothill(2700 Hearst Ave)"
    //adding hours
    if(day >= 1 && day <= 5){
        foothill = functions.foothillWeekday(foothill, $);
    } else {
        foothill = functions.foothillWeekend(foothill, $)
    }
    end(twiml, foothill, res);
}

function printMenu(cafe, menu){
    var str = cafe + ':';
    for(var key in menu){
        if(menu[key].length != 0){
            str = str + '\n' + '\n' + key + '-';
            for(var s = 0; s < menu[key].length; s++){
                str = str + '\n' + menu[key][s];
            }
        }
    }
    return str
}


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