var express = require("express"),
    bodyParser = require("body-parser");
    // twilio = require("twilio");
    
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 


app.post('/', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    if (req.body.Body == 'hello') {
        twiml.message('Hi!');
    } else if(req.body.Body == 'bye') {
        twiml.message('Goodbye');
    } else {
        twiml.message('No Body param match, Twilio sends this in the request to your server.');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});