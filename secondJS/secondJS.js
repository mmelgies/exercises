let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2001, 0, 14);

/*if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

function check(x){
 
  if (x < 18) text = "Too young to buy alcohol"
  else text = "it's alright, you can buy an alcohol"
  return text
}*/


//document.getElementById("demo").innerHTML = check(20)//Boolean(10 > 9);

//document.getElementById("test").innerHTML = 2 > 10;

function checkAge() {
  let alcoholable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    alcoholable = "Input is not a number";
  } else {
    alcoholable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = alcoholable + " to vote";
}
