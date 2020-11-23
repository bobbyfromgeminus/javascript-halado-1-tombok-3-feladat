'use strict';
/*
---------------------------------------------------------------------------------------------------
3. Feladat
Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap  (Input ellenőrzést nem kell végezni.), és visszaad egy html template-et (string)! A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.
Pl.:
ha ez a tömb
    const content = ['első', 'második', 'harmadik'];
    
akkor ez legyen a visszatérési érték:
    <ul>
        <li>első</li>
        <li>második</li>
        <li>harmadik</li>
    </ul>
---------------------------------------------------------------------------------------------------
*/

const content = ['első', 'második', 'harmadik'];

function createOutputObject(arr) {
    let outputDOM = '<ul>';
    arr.forEach(item => outputDOM += '<li>'+item+'</li>');
    outputDOM += '</ul>';
    return outputDOM;
}

function createDOM(arr) {
    document.querySelector('.result-1').textContent = createOutputObject(arr);
    document.querySelector('.result-2').innerHTML = createOutputObject(arr);
}

document.querySelector('.button').addEventListener('click', () => createDOM(content));