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
      let result = number;
      for (let i = 1; i < degree; i++){
          result *= number;
      }
      return result;
  }
console.log(calcDegree(2, 5));

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
function calcRepeatLetter(initStr) {
  const strItems = initStr.split('');
  const result = {};
  strItems.forEach( item => {
    const normalItem = item.toLowerCase();
    if(normalItem in result) {
      result[normalItem] = result[normalItem] + 1;
    } else {
      result[normalItem] = 1;
    }
  });
  return Object.keys(result).map(k => {
    return `letter: ${k}: ${result[k]};`
  }).join(' ')}
console.log(calcRepeatLetter('Абракадабраа'))

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
let str = 'blablablalblablalb';
str = str.replace(/[a]/gi, '');
  
console.log(str)


  const text = document.getElementById("HW3");
  text.innerHTML = 
      `<p>Function1 - <span>${maxDigit(1655890)}</span></p>
      <p>Function2 - <span>${calcDegree(2, 5)}</span></p>
      <p>Function3 - <span>${capitalize("HELLO WoRld")}</span></p>
      <p>Function4 - <span>${calcPay(1000)}</span></p>
      <p>Function5 - <span>${getRandomNumber (1, 10)}</span></p>
      <p>Function6 - <span>${calcRepeatLetter('Абракадабраа')}</span></p>
      <p>Function9-10 - <span>${generatePassword(6)}</span></p>
      <p>Function11 - <span>${str}</span></p>`;
      

