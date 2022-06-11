'use strict';
(function (){

const elUSD = document.querySelector('[data-value="USD"]');
const elEUR = document.querySelector('[data-value="EUR"]');

const rates = {};
const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

async function getCurrencies() {
    const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    const data = await response.json();
    const result = await data;


    rates.USD = result[0].buy;
    rates.EUR = result[1].buy;

    elUSD.textContent = rates.USD ;
    elEUR.textContent = rates.EUR;

  }

input.oninput = convertValue;
select.oninput = convertValue;
result.oninput = convertValue2;

function convertValue () {
    result.value = (parseFloat(input.value) / rates[select.value]).toFixed(2);
}

function convertValue2 () {
    input.value = (parseFloat(result.value) * rates[select.value]).toFixed(2);
}

getCurrencies();


})();
