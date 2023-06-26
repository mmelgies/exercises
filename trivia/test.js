const correctAnswer = new Map([
    ["text", "correct"],
    ["color", "#7CFC00"]

]);

const inCorrectAnswer = new Map([
    ["text", "incorrect"],
    ["color", "#880808"]
]);

const buttons = document.querySelectorAll(".margin-right");

buttons.forEach(buttons => {
  
   buttons.addEventListener("click",myFunction);
   
})
console.log(buttons);

function myFunction(){

    const textClass = document.getElementsByClassName("testClass");
    const messageCorrect = correctAnswer.get("text");
    textClass[0].innerHTML = messageCorrect;
    const colorCorrect = correctAnswer.get("color");
    buttons[0].style.backgroundColor = colorCorrect;
    textClass[0].style.color = correctAnswer.get("color");//"#7CFC00";
   
    
}

function myFunctionTest(){
   buttons.forEach(buttons =>{
    const textClass = document.getElementsByClassName("testClass");
    //const messageCorrect = "correct";
    const messageCorrect = correctAnswer.get("text");
    textClass[0].innerHTML = messageCorrect;
    //const colorCorrect = "#7CFC00";
    const colorCorrect = correctAnswer.get("color");
    x[0].style.backgroundColor = colorCorrect;
    
    textClass[0].style.color = correctAnswer.get("color");//"#7CFC00";
   })
    
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


