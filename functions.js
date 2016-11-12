var day = new Date().getDay();
var functions = {
    foothillWeekday: function(foothill, $){
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(2)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(2)").text();
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(3)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(3)").text();
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(4)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(4)").text();
        if(day < 4){
            foothill += "\n" + "Late night service: 9pm - 1am";
        } else {
            foothill += "\n" + "No late night service";
        }
        return foothill;
    },
    foothillWeekend: function(foothill, $){
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(5) td:nth-of-type(2)").text();
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(4) td:nth-of-type(3)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(5) td:nth-of-type(3)").text();
        if(day > 5){
            foothill += "\n" + "No late night service";
        }
        else {
            foothill += "\n" + "Late night service: 10pm - 2am";
        }
        return foothill;

    }
}

module.exports = functions;