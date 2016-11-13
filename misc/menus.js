// var jsdom = require("jsdom");
// var result = {
//     "Cafe 3": {"Brunch": [], "Dinner": []}, 
//     "Clark Kerr Campus": {"Breakfast":[], "Lunch":[],"Brunch": [], "Dinner": []}, 
//     "Crossroads": {"Breakfast":[], "Lunch":[], "Brunch": [], "Dinner": []}, 
//     "Foothill": {"Breakfast":[], "Lunch":[],"Brunch": [], "Dinner": []}
// };
// var jQueryScript = "https://code.jquery.com/jquery-3.1.1.min.js";

// jsdom.env({
//     url: "http://caldining.berkeley.edu/menus/all-locations-d1",
//     scripts: [jQueryScript],
//     done: function (errors, window) {
//         var $ = window.$;
//         var menus = $(".meal_items").text();
//         menus = menus.split('\n');
//         removeSpaces(menus);
//         var place = "";
//         var time = "";
//         for(var i = 0; i < menus.length; i++){
//             var current = menus[i]
//             if(current in result){
//                 place = current;
//             } else if(current in result[place]){
//                 time = current;
//             } else if(current != "Brunch" && current.includes("Brunch")){
//                 place = current.slice(0, -6);
//                 time = "Brunch";
//             } else {
//                 result[place][time].push(current);
//             }
//         }        // console.log(result)
//         // module.exports = result;

//     }
// });
    
// function removeSpaces(menus){
//     for(var i = menus.length - 1; i >= 0; i--){
//         menus[i] = menus[i].trim();
//         if (menus[i] == '' ||  menus[i] == 'N/A'){
//             var index = menus.indexOf(menus[i]);
//             menus.splice(index, 1);
//         }
//     }
// }




