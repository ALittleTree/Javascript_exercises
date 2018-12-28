"use strict";
function printLabel(labelledObj) {
    return labelledObj.lable;
}
var myObj = { size: 10, lable: "Mark Liu" };
var aa = printLabel(myObj);
function createSquare(config) {
    var newConfig = {};
    if (config.color) {
        newConfig.color = config.color;
    }
    if (config.width) {
        newConfig.width = config.width;
    }
    return newConfig;
}
var bb = createSquare({ color: 'red' });
document.body.innerHTML = bb.color + " " + bb.width;
