" use strict ";

var display = document.getElementById("display");

function oneToOne(){
    console.log("Hello");
    var numberString = "oneToTen<br>*** Output***<br>";
    for (var i = 1; i <= 10; i++) {
        if (i != 10) {
            numberString += i + "<br>";
        } else {
            numberString += i;
        }
    }
    display.innerHTML = numberString;
}

function oddNumber(){
    var numberString = "oddNumbers()<br>*** Output ***<br>";
    for (var i = 1; i <= 19; i +=2){
        if (i != 19) {
            numberString += i + "<br>";
        }else {
            numberString += i;
        }
    }
    display.innerHTML = numberString;
}


function squares(){
    var numberString = "squares()<br>*** Output ***<br>";
    for (var i = 1; i <= 10; i ++){
        if(i != 10){
            numberString += Math.pow(i, 2) + "<br>";
        }else {
            numberString += Math.pow(i, 2);
        }
    }
    display.innerHTML = numberString;
}

function randomFour(){
    var numberString = "random4()<br>*** Output ***<br>";

    for (var i = 0; i < 4; i++) {
        if (i != 3) {
            numberString += Math.floor((Math.random() * 100) + 1) + "<br>";
        } else {
            numberString += Math.floor((Math.random() * 100) + 1);
        }
    }
    display.innerHTML = numberString;
}


function evenTwenties(){
    var numberString = "even(20)<br>*** Output ***<br>";
    var n = 20;
    for (var i = 2; i < n; i +=2){
        if (i != n-2) {
            numberString += i + "<br>";
        }else {
            numberString += i;
        }
    }
    display.innerHTML = numberString;
}


function powerOfTwo(){
    var numberString = "powers(8)<br>*** Output ***<br>";
    var n = 8;
    for (var i = 1; i <= n; i++){
        if (i != n) {
            numberString += Math.pow(2, i) + "<br>";
        }else {
            numberString += Math.pow(2, i);
        }
    }
    display.innerHTML = numberString;
}


function AreWeThereYet(){
    display.innerHTML = "AreWeThereYet";
}


function triangle(){
    var seed = "triangle()<br>*** Output ***";
    var addStr = "";
        for (var i = 1; i < 6; i ++){
            for (var j = 1; j<=i; j++){
                addStr += "*";
            }
            addStr += "<br>"
        }
    display.innerHTML = seed + addStr;
}


function tableSquare(){
    display.innerHTML = "tableSquare";
}


function tableSquareSix(){
    display.innerHTML = "tableSquareSix";
}
