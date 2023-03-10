/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */



//CICLO FOR PER ITERARE 100 VOLTE
for (let i = 1; i < 101; i++) {
    //SE SONO MULTIPLI DI 5 o 3 STAMPARE FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    //SE SONO MULTIPLI DI 3 STAMPARE FIZZ
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    //SE SONO MULTIPLI DI 5 STAMPARE BUZZ
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    //ALTRIMENTI STAMPA DIRETTAMENTE IL NUMERO DELL'ITERAZIONE CORRENTE
    else {
        console.log(i)
    }




}