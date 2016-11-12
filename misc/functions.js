var day = new Date().getDay();
var functions = {
    foothillWeekday: function(foothill, $){
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(2)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(2)").text();//hours
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(3)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(3)").text();//hours
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(2) td:nth-of-type(4)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(3) td:nth-of-type(4)").text();//hours
        if(day < 4){
            foothill += "\n" + "Late night: 9pm - 1am";
        } else {
            foothill += "\n" + "Late night: no late night service";
        }
        return foothill;
    },
    foothillWeekend: function(foothill, $){
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(5) td:nth-of-type(2)").text();//hours
        foothill += "\n" + $(".bodytext:nth-of-type(2) tr:nth-of-type(4) td:nth-of-type(3)").text() + ": ";
        foothill += $(".bodytext:nth-of-type(2) tr:nth-of-type(5) td:nth-of-type(3)").text();//hours
        if(day > 5){
            foothill += "\n" + "Late night: no late night service";
        }
        else {
            foothill += "\n" + "Late night: 10pm - 2am";
        }
        return foothill;
    },
    cafeThreeWeekday: function(cafe3, $){
        cafe3 += "\n" + $(".bodytext:nth-of-type(3) tr:nth-of-type(2) td:nth-of-type(2)").text() + ": ";
        cafe3 += $(".bodytext:nth-of-type(3) tr:nth-of-type(3) td:nth-of-type(2)").text();//hours
        cafe3 += "\n" + $(".bodytext:nth-of-type(3) tr:nth-of-type(2) td:nth-of-type(3)").text() + ": ";
        cafe3 += $(".bodytext:nth-of-type(3) tr:nth-of-type(3) td:nth-of-type(3)").text();//hours
        return cafe3;
    },
    cafeThreeWeekend: function(cafe3, $){
        cafe3 += "\n" + $(".bodytext:nth-of-type(3) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        cafe3 += $(".bodytext:nth-of-type(3) tr:nth-of-type(5) td:nth-of-type(2)").text();
        cafe3 += "\n" + $(".bodytext:nth-of-type(3) tr:nth-of-type(4) td:nth-of-type(3)").text() + ": ";
        cafe3 += $(".bodytext:nth-of-type(3) tr:nth-of-type(5) td:nth-of-type(3)").text();
        return cafe3;
    },
    croadsWeekday: function(croads, $){
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(2) td:nth-of-type(2)").text() + ": ";
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(3) td:nth-of-type(2)").text();//hours
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(2) td:nth-of-type(3)").text() + ": ";
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(3) td:nth-of-type(3) p:nth-of-type(1)").text();//hours
        croads += "\n" + "(2pm - 5pm continuous service - grill, pizza, soup, salad, deli)"; //hours
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(2) td:nth-of-type(4)").text() + ": ";
        //hours
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(3) td:nth-of-type(4)").text();
        return croads;
    },
    croadsWeekend: function(croads, $){
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(5) td:nth-of-type(2)").text();//hours
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(4) td:nth-of-type(3)").text() + ": ";
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(5) td:nth-of-type(3)").text();//hours
    }
}

module.exports = functions;