/*const add = (x) => (y) => x + y;
const add5 = add(5);
const add10 = add(10);
//add5(1)
document.getElementById("added").innerHTML = add5(1);*/

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}



const btn = document.querySelector('button[value="ChangeBackground"]');//("button");//('button[value="ChangeBackground"]');
btn.addEventListener("click", () => {//("mouseover", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  
}
);
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

function hidenText()
{
  const secondPara = document.createElement("p");
  const textchild = document.createTextNode("test text")
  secondPara.appendChild(textchild);
  const bigElement = document.getElementById("div1");
  const child = document.getElementById("p1");
  //element.insertBefore(para,child);
  //child.appendChild(secondPara);
  bigElement.insertBefore(secondPara,child);
  //child.insertBefore(secondPara)
  
}
document.getElementById("hidenText").addEventListener("click", hidenText)

function forRemove() {
  document.getElementById("p1").remove();
}




function displayDate() {
  
  document.getElementById("date").innerHTML = Date();
  
  ShowAndHide()
}

function ShowAndHide() {
  var x = document.getElementById("date");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

document.getElementById("alert").addEventListener("click", function() {alert("Hello World!");});
/*function changeBackground() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}*/

//btn.addEventListener("dblclick", changeBackground);


function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < 2; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  
  

  function setBackground() {
    // now, get all the p elements in the document
    const paragraphs = document.getElementById("ForChangeColour");
  
    paragraphs.style.background = "red";
    // get the second paragraph from the list
    //const secondParagraph = paragraphs[1];
  
    // set the inline style
    //secondParagraph.style.background = "red";
  }
  



function pomnoz(a,b){
    return a*b;
}

function podziel(x){
return x/2;
}

//document.getElementById("podzielpomnoz").innerHTML = podziel(pomnoz(3,4))

function test(a,b) {
    return a + b;
}

const fruits = ["Banana","Orange", "Apple", "Mango"];

function createList(fruits) {
    const fruitsListHtml = fruits.forEach((fruit) => {
        return `<li>${fruit}</li>`;
    });
    return `<ul>${fruitsListHtml}</ul>`;
}

const add = (x) => (y) => x + y
const add5 = add(5)
const add10 = add(10)






const sgl = 'test';
document.getElementById("string").innerHTML = sgl;



function fruitPrint(fruits) {
    let text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";

   

    function myFunction(value) {
    text += "<li>" + value + "</li>";
    } 
    //document.getElementById("forEach").innerHTML = text;
    return text
}

//document.getElementById("testForEach").innerHTML = fruitPrint(fruits);


function create_list_from_array(fruits){
    //const fruits = ["Banana","Orange", "Apple", "Mango"];
    let flen = fruits.length;
    let ul = "<ul>";
    for (let i = 0; i < flen; i ++){
        ul += "<li>" + fruits[i] + "</li>";
    }
    ul += "</ul>";
    return ul;
}
const cars = ["Saab", "Volvo", "BMW"];
cars.push("Audi");

function arrayCars(cars){
  const BrandOfCars = document.createElement("p");
  BrandOfCars.setAttribute("id", "NameCars")
  document.getElementById("NameCars").innerHTML = cars;
}
document.getElementById("cars").innerHTML = cars;

//arrayCars(cars);


document.getElementById("CheckDate").addEventListener("click", displayDate);



document.getElementById("array.loop").innerHTML = create_list_from_array(fruits);
//document.getElementById("demo").innerHTML = text;

document.getElementById("forEach").innerHTML = fruitPrint(fruits);
//document.getElementById("testForEach").innerHTML = ar1(array1);


document.getElementById("FirstTimeWithFunctionalProgramming").innerHTML = add5(4);

//document.getElementById("forEach").innerHTML = createList(fruits);

document.getElementById("demo").innerHTML = test(5,6);
document.getElementById("podzielpomnoz").innerHTML = podziel(pomnoz(3,4));



