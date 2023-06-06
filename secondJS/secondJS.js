/*const add = (x) => (y) => x + y;
const add5 = add(5);
const add10 = add(10);
//add5(1)
document.getElementById("added").innerHTML = add5(1);*/

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

document.getElementById("array.loop").innerHTML = create_list_from_array(fruits);
//document.getElementById("demo").innerHTML = text;

document.getElementById("forEach").innerHTML = fruitPrint(fruits);
//document.getElementById("testForEach").innerHTML = ar1(array1);


document.getElementById("FirstTimeWithFunctionalProgramming").innerHTML = add5(4);

//document.getElementById("forEach").innerHTML = createList(fruits);

document.getElementById("demo").innerHTML = test(5,6);
document.getElementById("podzielpomnoz").innerHTML = podziel(pomnoz(3,4));
