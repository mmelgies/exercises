let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2001, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}

document.getElementById("demo").innerHTML = text;