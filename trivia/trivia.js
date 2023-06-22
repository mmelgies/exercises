
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



