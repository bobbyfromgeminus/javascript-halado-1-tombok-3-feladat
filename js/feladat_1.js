'use strict';
/*
---------------------------------------------------------------------------------------------------
1. Feladat
Írj egy olyan függvény kifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt!
(Input ellenőrzést nem kell végezni.)
A függvény szorozza meg tömbelemek értékét 1.27-el, majd pedig térjen vissza az elemek összegével!
---------------------------------------------------------------------------------------------------
*/

const inArray = new Int32Array([23423,1216,45745,2342,65456,3423,8,2342,43534]);

const output = inputArray => { return(inputArray.map(item => item * 1.27).reduce((prevItem, curItem) => prevItem + curItem)) };

function createDOM(arr) {
    document.querySelector('.result-1').textContent = output(arr);
    console.log(output(arr));
}

document.querySelector('.button').addEventListener('click', () => createDOM(inArray));