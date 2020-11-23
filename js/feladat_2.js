'use strict';
/*
---------------------------------------------------------------------------------------------------
2. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként kap egy tetszőleges típusú elemeket tartalmazó tömböt,
és egy tetszőleges primitív értéket!
A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza:

exists: Értéke true/false attól függően, hogy a második paraméterként megadott érték megtalálható e a tömbben
index:  Értéke egy szám, ha második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe,
        hanem akkor -1 legyen az értéke
allElementIsANumber: Értéke true/false attól függően, hogy a tömb minden eleme number típusú e vagy sem
someElementIsANumber: Értéke true/false attól függően, hogy a tömbben van e number típusú elem vagy sem
---------------------------------------------------------------------------------------------------
*/

const inParam = 'Radeon';
const inArray = [2, true, 'Radeon', 863, 45.842, false, 'Ryzen'];

function createOutputObject(arr, param) {
    const outputObject = new Object;
    outputObject.exists = arr.some(item => item === param);
    outputObject.index = arr.findIndex(item => item === param);
    outputObject.allElementIsANumber = arr.every(item => typeof(item)==='number');
    outputObject.someElementIsANumber = arr.some(item => typeof(item)==='number');
    return outputObject;
}

function createOutputDOM(obj) {
    let outputDOM = '';
    for (const prop in obj) {
        outputDOM += prop+': '+obj[prop]+"<br>";
    }
    return outputDOM;
}


function createDOM(arr, param) {
    document.querySelector('.result-1').innerHTML = createOutputDOM(createOutputObject(arr, param));
    console.log(createOutputObject(arr, param));
}

document.querySelector('.button').addEventListener('click', () => createDOM(inArray, inParam));

console.log();