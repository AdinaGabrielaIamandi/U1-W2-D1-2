/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 10; // Questa è una variabile che contiene un valore numerico intero
let n2 = 1.25; // Questa è una variabile che contiene un valore numerico decimale
let n3 = "Gabriela"; // questa è una variabile che contiene un valore stringa (cioè del testo)
let n4 = "3"; // Questa è una variabile che contiene un valore stringa (in questo caso il numero '3' viene interpretato come testo)
let n5 = true; // Questa è una variabile che contiene un valore booleano (vero - true)
let n6 = false; // Questa è una stringa che contiene un valore booleano (falso - false)
let n7 = null; // Questo è un codice che viene inserito quando il valore della variabile è vuoto
let n8 = undefined; // Questo è un codice che viene inserito quando il valore della variabile non è ancora stato assegnato

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Adina";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

//Oppure

let risultato = number1 + number2;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Iamandi";
console.log(name);
const nomeMio = "Adina";
console.log(nomeMio); //--> In questo caso nel terminale si visualizzerà il valore della const name2 (cioè "Adina")
/* nomeMio = "Francesca";
console.log(nomeMio); //--> Adesso invece nel terminale si visualizzerà un errore nella riassegnazione di un nuovo valore alla const name2

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero = 4;
console.log(numero - x);

// Oppure

let risultato2 = numero - x;
console.log(risultato2);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon";
let name2 = "Jhon";
console.log(name1 === name2);

console.log(name1.toLowerCase() === name2.toLowerCase());