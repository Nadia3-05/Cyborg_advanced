let minNumber ;
let minRound;

do {
    minNumber = Math.floor(prompt("Введіть мінімальне число (N)"));
    if (!Number.isFinite(minNumber)) {
        alert("ВВЕДІТЬ ЧИСЛО!!!");
    }
} while (!Number.isFinite(minNumber));
minRound = Math.round(minNumber);
console.log({minRound});

do {
    maxNumber = Math.floor(prompt("Введіть максимальне число (M)"));
    if (!Number.isFinite(maxNumber)) {
        alert("ВВЕДІТЬ ЧИСЛО!!!");
    }
} while (!Number.isFinite(maxNumber));

maxRound = Math.round(maxNumber);
console.log({maxRound});

let counter = 0;
const evenOdd = confirm("Пропускати парні числа ?");
for (minRound; minRound <= maxRound; minRound++) {
    if (!(minRound % 2) && evenOdd) {
        continue;
    } 
    counter += minRound;
  }
console.log("Sum: " +counter);

const text = document.getElementById("HW2");
text.innerHTML = 
    `<p>Число N - <span>${minRound-maxRound}</span></p>
    <p>Число M - <span>${maxRound}</span></p>
    <p>Булеве значення - <span>${evenOdd}</span></p>
    <p>Відповідь - <span>${counter}</span></p>`;

    