"use strict";

class CryptoCurrency {
  constructor(){

    this.url = `https://api.cryptonator.com/api/ticker`;

    this.select = document.querySelector('.entryField');

    this.select2 = document.querySelector('.outputField');

    this.input = document.querySelector("#cryptoInput");

    this.for = document.querySelector('#conversion-form');
  }

  

}

let myCryptoCurrency = new CryptoCurrency(); //new keyword will convert our class to object

/* let url = `https://api.cryptonator.com/api/ticker/`;




//Step 1: Define all items that we will use inside the html

let select = document.querySelector('.entryField'); //For first currency selection
 
let select2 = document.querySelector('.outputField'); //For second currency selection

let input = document.querySelector('#cryptoInput');

let output = document.querySelector('#cryptoOutput');

let form = document.querySelector('#conversion-form');



    
  form.addEventListener("submit", e =>{
      e.preventDefault();

      fetch(`${url}/${select.value}-${select2.value}`)
        .then(data => data.json())

        .then(
            response =>
            (output.value = (response.ticker.price * input.value))
        );
  }); */