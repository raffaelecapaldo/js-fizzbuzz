/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

const boxContainer = document.getElementById("box-container");


//CICLO FOR PER ITERARE 100 VOLTE
for (let i = 1; i < 101; i++) {

    const fizzHtml = `<div class="box"><span>Fizz</span></div>`;
    const buzzHtml = `<div class="box"><span>Buzz</span></div>`;
    const fizzBuzzHtml = `<div class="box"><span>FizzBuzz</span></div>`;
    const numberHtml = `<div class="box"><span>${i}</span></div>`;
    //SE SONO MULTIPLI DI 5 o 3 STAMPARE FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
        boxContainer.innerHTML += fizzBuzzHtml
    }
    //SE SONO MULTIPLI DI 3 STAMPARE FIZZ
    else if (i % 3 == 0) {
        console.log("Fizz")
       boxContainer.innerHTML += fizzHtml;

    }
    //SE SONO MULTIPLI DI 5 STAMPARE BUZZ
    else if (i % 5 == 0) {
        console.log("Buzz")
        boxContainer.innerHTML += buzzHtml

    }
    //ALTRIMENTI STAMPA DIRETTAMENTE IL NUMERO DELL'ITERAZIONE CORRENTE
    else {
        boxContainer.innerHTML += numberHtml
        console.log(i)
    }




}