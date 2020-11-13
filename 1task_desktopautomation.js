var robot = require("robotjs");
var fs = require("fs");

setTimeout(openChrome,2000);

function openChrome(){
    robot.keyTap("command");
    robot.moveMouseSmooth(654,60);
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
    setTimeout(openTabs,7000);
}

function openTabs(){
    var rdata = fs.readFileSync("./chrome.json")
    var tabs = JSON.parse(rdata);

    for(var i=0;i<tabs.length;i++){
        for(var j = 0;j<tabs[i].length;j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            if(j<tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control","up");
            }else if(i<tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control","up");
                // robot.setTimeout(function j(){},2000);
            }
        }
    }
    setTimeout(whatsappmsg,11000);
}
function whatsappmsg(){
    robot.moveMouseSmooth(184,209);
    robot.mouseClick();
    robot.typeString("Gnana Sai");
    robot.keyTap("enter");
    setTimeout(nothing,5000);
}
function nothing(){
    robot.typeString("Hi Good Morning");
    robot.keyTap("enter");
    setTimeout(openvscode,2000);
}
function openvscode(){
    robot.keyTap("command");
    robot.moveMouseSmooth(654,60);
    robot.mouseClick();
    robot.typeString("vs");
    robot.keyTap("enter");
    setTimeout(opengedit,10000);
}
function opengedit(){
    robot.keyTap("command");
    robot.moveMouseSmooth(654,60);
    robot.mouseClick();
    robot.typeString("gedit");
    robot.keyTap("enter");
    setTimeout(lastthing,2000);
}
function lastthing(){
    robot.typeString("Your system is ready to use");
}