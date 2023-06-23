//var x = document.getElementById("myBtn");
const x = document.getElementsByClassName("margin-right");

x[0].addEventListener("click",myFunction);

function myFunction(){
    const textClass = document.getElementsByClassName("testClass");
    const messageCorrect = "correct";
    textClass[0].innerHTML = messageCorrect;
    //document.getElementById("green").style.color = "#7CFC00";
    const colorCorrect = "#7CFC00";
    x[0].style.backgroundColor = colorCorrect;
    textClass[0].style.color = "#7CFC00";
    
}

/*function myFunction2(){
    const messageCorrect = "correct";
    const messageIncorect = "incorrect";
    const colorConnec
}*/

/*make a collection of data with correct text and colour and incorrect text and color before function and use it in function
for example
correct {
    text: "correct"
    color: "#7CFC00"
}

add event listener for every multiple choice using for each maybe??


*/


