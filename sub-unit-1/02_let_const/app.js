"use strict";

var a = 'test1';
var b = 'test2';

console.log(`Function Logged: ${a}`);

function testVar() {
    var a = 30;
    console.log(`Function Logged: ${a}`);
    
    if (true) {
        var a = 50;
        console.log(`Blocked Logged: ${a}`);
    }
    console.log("here:"+a);
}
testVar();

