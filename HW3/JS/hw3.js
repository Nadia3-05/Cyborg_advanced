//Function 1
function maxDigit(number){
    number = 0 | number ;
    let max=-1, remainder=-1;
    do {
      remainder = number % 10;
      max = (max > remainder ) ? max : remainder ;
      number=(number-remainder)*1e-1;
    } while (number!=0);
    return max;
  }
  
console.log(maxDigit(1655890));

//Function2
function calcDegree(number, degree) {
  let result  = 1;
  if (degree < 0) {
    for (let i = degree; i < 0; i++) {
      result /= number;
    }
  } else {
    for (let i = 1; i <= degree; i++) {
      result *= number;
    }
  }
  return result;
}
console.log(calcDegree(2, -4));

//Function3
  const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();
console.log(capitalize("HELLO WoRld"));

//Function4
  function calcPay(sum){
      return sum = sum - 1000*(18 + 1.5)/100
  }
   console.log(calcPay(1000));

//Function5
function getRandomNumber(N, M) {
    return Math.round(Math.random() * (M - N)) + N;
}
console.log(getRandomNumber (1, 10));

//Function6
function calcRepeatLetter(letter, word) {
  return (word.toLowerCase().split(letter.toLowerCase())).length - 1;
}
console.log(calcRepeatLetter('а','Асталавіста'))

//Function9-10
const generatePassword = (
    length = 8,
    wishlist = '0123456789'
  ) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((x) => wishlist[x % wishlist.length])
      .join('')
  
  console.log(generatePassword(6))

//Function11
function deleteLetters(letter, str) {
  return str.split(letter).join("");
}
console.log(deleteLetters('a','ablallbablabla'))


  const text = document.getElementById("HW3");
  text.innerHTML = 
      `<p>Function1 - <span>${maxDigit(1655890)}</span></p>
      <p>Function2 - <span>${calcDegree(2, -4)}</span></p>
      <p>Function3 - <span>${capitalize("HELLO WoRld")}</span></p>
      <p>Function4 - <span>${calcPay(1000)}</span></p>
      <p>Function5 - <span>${getRandomNumber (1, 10)}</span></p>
      <p>Function6 - <span>${calcRepeatLetter("а", "Асталавіста")}</span></p>
      <p>Function9-10 - <span>${generatePassword(6)}</span></p>
      <p>Function11 - <span>${deleteLetters('a','ablallbablabla')}</span></p>`;
      

