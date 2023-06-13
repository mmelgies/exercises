let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2001, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

function check(x){
 
  if (x < 18) text = "Too young to buy alcohol"
  else text = "it's alright, you can buy an alcohol"
  return text
}


document.getElementById("demo").innerHTML = check(20)//Boolean(10 > 9);