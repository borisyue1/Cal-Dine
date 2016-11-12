var day = new Date().getDay();
var info = {
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
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(3) td:nth-of-type(4)").text();
        return croads;
    },
    croadsWeekend: function(croads, $){
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(5) td:nth-of-type(2)").text();//hours
        croads += "\n" + $(".bodytext:nth-of-type(1) tr:nth-of-type(4) td:nth-of-type(3)").text() + ": ";
        croads += $(".bodytext:nth-of-type(1) tr:nth-of-type(5) td:nth-of-type(3)").text();//hours
        return croads;
    },
    ckWeekday: function(ck, $){
        ck += "\n" + $(".bodytext:nth-of-type(4) tr:nth-of-type(2) td:nth-of-type(2)").text() + ": ";
        ck += $(".bodytext:nth-of-type(4) tr:nth-of-type(3) td:nth-of-type(2)").text() + ": ";//hours
        ck += "\n" + $(".bodytext:nth-of-type(4) tr:nth-of-type(2) td:nth-of-type(4)").text() + ": ";
        ck += $(".bodytext:nth-of-type(4) tr:nth-of-type(3) td:nth-of-type(4)").text() + ": ";//hours
        return ck;
    },
    ckWeekend: function(ck, $){
        ck += "\n" + $(".bodytext:nth-of-type(4) tr:nth-of-type(4) td:nth-of-type(2)").text() + ": ";
        ck += $(".bodytext:nth-of-type(4) tr:nth-of-type(5) td:nth-of-type(2)").text() + ": ";//hours
        ck += "\n" + $(".bodytext:nth-of-type(4) tr:nth-of-type(4) td:nth-of-type(4)").text() + ": ";
        ck += $(".bodytext:nth-of-type(4) tr:nth-of-type(5) td:nth-of-type(4)").text() + ": ";//hours
        return ck;
    },
    gbcWeekday: function(gbc, $){
        gbc += "\n" + "Hours: " + $(".bodytext:nth-of-type(5) tr:nth-of-type(1) td:nth-of-type(3)").text();//hours
        return gbc;
    },
    gbcFriday: function(gbc, $){
        gbc += "\n" + "Hours: " + $(".bodytext:nth-of-type(5) tr:nth-of-type(2) td:nth-of-type(2)").text();//hours
        return gbc;
    },
    qcWeekday: function(qc, $){
        qc += "\n" + "Hours: " + $(".bodytext:nth-of-type(7) tr:nth-of-type(1) td:nth-of-type(3)").text();//hours
        return qc;
    },
    qcFriday: function(qc, $){
        qc += "\n" + "Hours: " + $(".bodytext:nth-of-type(7) tr:nth-of-type(2) td:nth-of-type(2)").text();//hours
        return qc;
    },
    brownWeekday: function(brown, $){
        brown += "\n" + "Hours: " + $(".bodytext:nth-of-type(6) tr:nth-of-type(2) td:nth-of-type(2)").text();//hours
        return brown;
    },
    brownFriday: function(brown, $){
        brown += "\n" + "Hours: " + $(".bodytext:nth-of-type(6) tr:nth-of-type(3) td:nth-of-type(2)").text();
        return brown;
    },
    tcWeekday: function(tc, $){
        tc += "\n" + "Hours: " + $(".bodytext:nth-of-type(8) tr:nth-of-type(1) td:nth-of-type(3)").text();
        return tc;
    }
    
}

module.exports = info;