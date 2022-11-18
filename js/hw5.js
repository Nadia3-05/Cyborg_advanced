//1
function getRandomArray(lenght, min, max) {
  return new Array(lenght)
    .fill(0)
    .map((x) => Math.floor(Math.random() * (max - min + 1) + min));
}
const randomArray = getRandomArray(7, 1, 6);
console.log(randomArray);

//2 
function getModa(numbers) {
  let min = 0, mode = [], count = [];
  let arrayNumbers = numbers.filter((el) => Number.isInteger(el));

  for (let number of arrayNumbers) { count[number] = (count[number] || 0) + 1;
      if (count[number] > min) { min = count[number];
          mode = [number];
          continue; } 
      if (count[number] === min) { mode.push(number);}
  }
  return mode;
}
const moda = getModa(randomArray);
console.log(moda);

//3
const sum = randomArray.reduce((partialSum, a) => partialSum + a, 0);
const averageNumber  = sum/randomArray.length;
console.log(averageNumber.toFixed(1));

//4
function median(values) {
  values.sort( function(a,b) {return a - b;} );
  const half = Math.floor(values.length/2);
    if(values.length % 2)
      return values[half];
    else
      return (values[half-1] + values[half]) / 2.0;
}
const mediana = median(randomArray)
console.log(mediana);

//5
function filterEvenNumbers(...numbers) {
  let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
  const filter = numbersArray.filter((n) => n % 2 !== 0)
  return filter
}
const oddNumbers = filterEvenNumbers(1, 2, 3, 4, 5)
console.log(oddNumbers);

//6
function countPositiveNumbers(...numbers) {
  let numbersArray = [...numbers].filter((el) => Number.isInteger(el));
  let positiveNumbers = numbersArray.filter((number) => {
     if (number > 0) { 
      return number; 
     }
    })
  return positiveNumbers.length;
  
}
const positiveNumbers = countPositiveNumbers(-1, 2, -3, 4, 5, 7, 9, -2);
console.log(positiveNumbers)

//7
function getDividedByFive(number7){
  return number7.filter((x) => x % 5 === 0)
}
const dividedByFive = getDividedByFive(randomArray)
console.log(dividedByFive);

//8
function replaceBadWords (str) { 
  const badWord = prompt("Enter a bad word")
  let badWords = new RegExp ('Shit|Fuck|Dumb|' + badWord, 'gi')
  let newstr = str.replace(badWords, '****')
  return newstr 
}
const badWordsReplaced = replaceBadWords('Holy Shit!, Fuck off!, Fuck you!, Dumb fuck!' + 'Fuck!');
console.log(badWordsReplaced);

//9
function dividedByThree (word) {
  const wordAll = word.toLowerCase().replaceAll(" ", "");
  const newWordThree = wordAll.match(/.{1,3}/gi);
    return newWordThree;
}
console.log(dividedByThree ('commanders'));


const text = document.getElementById("HW5");
  text.innerHTML = 
    `<p>Function1 - Random Numbers: ${randomArray}</p>
    <p>Function2 - Mode Number: ${moda}</p>
    <p>Function3 - Average Number: ${averageNumber.toFixed(1)}</p>
    <p>Function4 - Median Number: ${mediana}</p>
    <p>Function5 - Not Even Numbers: ${oddNumbers}</p>
    <p>Function6 - Positive Numbers: ${positiveNumbers}</p>
    <p>Function7 - Numbers Divisible: ${dividedByFive}</p>
    <p>Function8 - Replace Bad Words: ${badWordsReplaced}</p>
    <p>Function9 - Numbers Divide: ${dividedByThree ('commanders')}</p>`;
     