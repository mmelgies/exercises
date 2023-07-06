

const GREEN = "rgb(0,128,0)";
const CORRECT_MSG = "Correct";

const RED = "rgb(255,0,0)";
const INCORRECT_MSG = "Incorrect";

const correctAnswers = ['A1','A3'];



const validateMultipleChoice = () => {
    const isButton = event.target.nodeName === 'BUTTON';
    const answerIsCorrect = correctAnswers.includes(event.target.innerText);
    const questionId = event.currentTarget.id;
    console.log(`questionID = ${questionId}`);
    console.log(event.target);
    console.log(event.currentTarget);
    const result = document.querySelector(`.${questionId}-result`);

    if (!isButton)
    {
        return
    }

    if (answerIsCorrect)
    {
        event.target.style.backgroundColor = GREEN;
        result.innerText = CORRECT_MSG;
    }

    else
    {
        event.target.style.backgroundColor = RED;
        result.innerText = INCORRECT_MSG;
    }

    document.querySelectorAll(`div#${questionId} button`).forEach((button) => button.disabled = true);
    
}



const freeAnswer = document.getElementById("FR-1-answer");


const checkFreeAnswer = () => {
    
    if (freeAnswer.value == "apple")
    {
        document.getElementById("demo").innerHTML= "correct";
    }
    else 
    {
        document.getElementById("demo").innerHTML= "incorrect";
    }
}
console.log(checkFreeAnswer);
const buttonForFreeAnswer = document.getElementById("FR-1-test");
buttonForFreeAnswer.addEventListener('click', checkFreeAnswer);

freeAnswer.addEventListener("change", () => {
    console.log(freeAnswer.value);

})


const multipleChoiceQuestionsWrapper = document.querySelectorAll('.mul-question');
multipleChoiceQuestionsWrapper.forEach((question) => question.addEventListener('click', validateMultipleChoice));


document.getElementById("demotest").addEventListener("click", function(){
    document.getElementById("demoTestButton").innerHTML = "test";
})
