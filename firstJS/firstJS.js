function firstbutton() {
    document.getElementById('data').innerHTML = Date();
  }

function changehtmlcontent() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}

function Turnonthebulb(){
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
}

function Turnoffthebulb() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
}

function adding(a, b){
    //myDiv.innerHtml= add()
   // let text = "HELLO";
    //document.body.innerHTML = 5+6;
    return a + b;
}

//myDiv.innerHtml= add();
//document.body.innerHTML = 5+6;
function MyMessage(n)
{
    //return "co";
    document.getElementById("forMessage").innerHTML = "whaaat";
}


function multiplyFunction(a, b) {
    //return a * b;
    document.getElementById("multiply").innerHTML = a * b;
  }

function toCelsius(f) {
    //return (5/9) * (f-32);
    document.getElementById("tocelsius").innerHTML = (5/9) * (f-32);
}

function toCelsius2(f) {
    return (5/9) * (fahrenheit-32);
}

function toCelciusMix(y) {
    let x = toCelsius2(y);
    document.getElementById("celsius2").innerHTML = x;
    //var text = "The temperature is " + toCelsius2(77) + " Celsius";
    //return text;
}


function pomnoz(a,b){
        return a*b;
    }

function podziel(x){
    return x/2;
}

let car = "FIAT";
const carType = {type:"Fiat", model:"500", color:"white"};

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

