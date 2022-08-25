let minNumber ;
let minRound;
do {
    minNumber = prompt ( "Введіть мінімальне число (N)");
} while (!minNumber);
// console.log({minNumber})
minRound = Math.round(minNumber);
console.log({minRound})

let maxNumber;
let maxRound;
do {
    maxNumber = prompt ( "Введіть максимальне число (M)");

} while (!maxNumber);
// console.log({maxNumber})
maxRound = Math.round(maxNumber);
console.log({maxRound})

const counter = 0;
const evenOdd = confirm("Пропускати парні числа ?");
for (minRound; minRound <= maxRound; minRound++) {
    let remainder = minRound % 2;
    if (remainder === 1 && evenOdd === true) {
        counter += minRound;
        console.log(minRound);
    } else if (evenOdd === false) {
        counter += minRound;
        console.log(minRound);
    }}
console.log("Sum: " +counter);

const text = document.getElementById("HW2");
text.innerHTML = 
    `<p>Число N - <span>${minRound-maxRound}</span></p>
    <p>Число M - <span>${maxRound}</span></p>
    <p>Булеве значення - <span>${evenOdd}</span></p>
    <p>Відповідь - <span>${counter}</span></p>`;