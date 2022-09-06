//1
function getRandomArray(lenght, min, max) {
    return new Array(lenght)
      .fill(0)
      .map((x) => Math.floor(Math.random() * (max - min + 1) + min));
  }
  const random = getRandomArray(7, 1, 20);
console.log(random);
//2 
function getModes(array) {
    let first = [];
    let maxFirs = 0; 
    let modes = [];
    for (var i in array) {
      first[array[i]] = (first[array[i]] || 0) + 1;
      if (first[array[i]] > maxFirs) { 
        maxFirs = first[array[i]];}}
    for (var k in first) {
      if (first[k] == maxFirs) {
        modes.push(k);}}
    return modes;}
    const result2 = getModes(random)
  console.log(result2);
//3
const sum = random.reduce((partialSum, a) => partialSum + a, 0);
const lenght = random.length;
const result3  = sum/lenght;
console.log(result3.toFixed(1));
//4
function median(values) {
values.sort( function(a,b) {return a - b;} );
const half = Math.floor(values.length/2);
  if(values.length % 2)
    return values[half];
  else
    return (values[half-1] + values[half]) / 2.0;}
    const result4 = median(random)
console.log(result4);
//5
function filterEvenNumbers(...numbers) {
    return numbers.filter((x) => x % 2 != 0);
  }
  const result5 = filterEvenNumbers(1, 2, 3, 4, 5 )
  console.log(result5);
//6
   function countPositiveNumbers(...numbers) {
    return numbers.filter((x) => x > 0);}
    const result6 = countPositiveNumbers(-1, 2, -3, 4, 5, 7, 9, -2);
  console.log(result6.length)
//7
function getDividedByFive(number7){
  return number7.filter((x) => x % 5 === 0)}
  const result7 = getDividedByFive(random)
  console.log(result7);
//8
function replaceBadWords(str){
  const bedWorld = /fuck|shit/gi;
    const newstr = str.replace(bedWorld, '****');
    return newstr;}
console.log(replaceBadWords("Are you fucking kidding fuck shit?"));

//9
function dividedByThree (word) {
  const wordAll = word.toLowerCase().replaceAll(" ", "");
  const newWordThree = wordAll.match(/.{1,3}/gi);
  return newWordThree;
  }
  console.log(dividedByThree ('commanders'));

const k = document.getElementById("HW5");
  k.innerHTML = 
    `<p>Function1 - Random Numbers: ${random}</p>
    <p>Function2 - Mode Number: ${result2}</p>
    <p>Function3 - Average Number: ${result3.toFixed(1)}</p>
    <p>Function4 - Median Number: ${result4}</p>
    <p>Function5 - Not Even Numbers: ${result5}</p>
    <p>Function6 - Positive Numbers:: ${result6.length}</p>
    <p>Function7 - Numbers Divisible: ${result7}</p>
    <p>Function8 - Replace Bad Words: ${replaceBadWords("Are you fucking kidding fuck shit?")}</p>
    <p>Function9 - Numbers Divide: ${dividedByThree ('commanders')}</p>`;
     