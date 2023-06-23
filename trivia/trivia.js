
function changeColorRed() {
    document.getElementById("red").innerHTML = "incorrect";
    document.getElementById("buttonRed").style.backgroundColor='#911';
    document.getElementById("red").style.color = "#911";
}

function changeColorGreen() {
    document.getElementById("green").innerHTML = "correct!";
    document.getElementById("green").style.color = "#7CFC00";
    document.getElementById("buttonGreen").style.backgroundColor='#7CFC00';
}

/*function changeColorRed2() {
    document.getElementById("red2").innerHTML = "incorrect";
    document.getElementById("buttonRed2").style.backgroundColor='#911';
    document.getElementById("red2").style.color = "#911";
}*/

const element = document.getElementById("buttonRed2");
document.getElementById("buttonRed2").addEventListener("click", red);




function red() {
    document.getElementById("red2").innerHTML = "incorrect";
    document.getElementById("buttonRed2").style.backgroundColor='#911';
    document.getElementById("red2").style.color = "#911";

    
}

var x = document.getElementsByClassName("mul-question")
const buttons = document.querySelectorAll(".mul-question");

//document.getElementsByClassName("mul-question")
x.addEventListener("click", validateMultipleChoice);

function validateMultipleChoice() {
    //text for the user correct or incorrect and change the colour of the button
    //for each or sth check if user click correct button if yes change the color and show the text by add event listener
    document.getElementsByClassName("MQ-1-result").innerHTML = "correct";
}
