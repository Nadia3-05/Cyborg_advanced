console.log('HW#1 - Variables');


//призначення значень змінним//
let priceItem1 = '15.678' , 
    priceItem2 = '123.965' ,
    priceItem3 = '90.2345' ;

//Максимальне значення//
let max = Math.max( priceItem1,  priceItem2,  priceItem3);
console.log('Максимальне значення: '+max +'грн ');

//Мінімальне значення//
let min = Math.min( priceItem1,  priceItem2,  priceItem3);
console.log('Мінімальне значення: '+min+'грн ');

//Сума всіх значень//
let sum = ( +priceItem1 + +priceItem2 + +priceItem3);
console.log('Сума: '+sum+'грн ');

//Сума завкруглень//
let price1 = Math.floor(priceItem1)
console.log('Ціна завкруглення 1 товару: ' +price1 +'грн ' );
let price2 = Math.floor(priceItem2)
console.log('Ціна завкруглення 2 товару: ' +price2 +'грн ' );
let price3 = Math.floor(priceItem3)
console.log('Ціна завкруглення 3 товару: ' +price3 +'грн ' );
let sum_all = ( +price1 + +price2 + +price3);
console.log('Сума завкруглень: '+sum_all +'грн ');

//Сума завкруглень товарів до сотень//
price_100_number1 = '0';
let number1 = 15;
if(number1 < 50){
    console.log('Ціна завкруглення 1 товару до сотень: ' +price_100_number1 +'грн ')
} else{
    console.log('100')
}
price_100_number2 = '100';
let number2 = 123;
if(number2 < 150 ){
    console.log('Ціна завкруглення 2 товару до сотень: ' +price_100_number2 +'грн ')
} else{
    console.log('200')
}
price_100_number3 = '100';
let number3 = 90;
if(number3 < 150 ){
    console.log('Ціна завкруглення 3 товару до сотень: ' +price_100_number3 +'грн ')
} else{
    console.log('200')
}
let sum_price_100 = ( +price_100_number1 + +price_100_number2 + +price_100_number3);
console.log('Сума завкруглень товарів до сотень: '+sum_price_100 +'грн ');

//перевірка на парність//
sum_all = 'парне число';
sum_all = 228;
if(sum_all % 2 ==0){
    console.log(sum_all +' - це парне число')
} else{
    console.log(sum_all +' - це непарне число')
}

//решта з 500грн//
remainder = 500 - sum;
console.log('Решта з 500грн - ' +remainder +' грн')

//середнє арифм цін//
var arr = [15.68 , 123.97 , 90.23];
var summ = 0;
for (var i = 0; i < arr.length; i++) {
    summ +=arr[i];
}
var result = summ / arr.length;
console.log('Середнє арифм цін: ' +result)

//знижка//
let sale = Math.floor(Math.random() * 10);
console.log('Випадкова знижка - ' +sale +'%')

//Сума із знижкою//
sale = (sum / 100 )* sale;
let TOTAL = sum - sale;
console.log('Сума із знижкою: ' +TOTAL.toFixed(2) +'грн')

//прибуток//
let profit = (sum / 2) - sale;
console.log('Прибуток: ' +profit +'грн')
let html = `
<p> max mean = ${max}</p>
<p> min mean = ${min}</p>
<p> sum of prices = ${sum}</p>
<p> sum of floor prices = ${sum_all}</p>
<p> Sum rounded to 100 = ${sum_price_100}</p>
<p> Even/Odd number = ${sum_all}</p>
<p> Remainder = ${remainder}</p>
<p> Arithmetic mean = ${result}</p>
<p> Random sale = ${sale}</p>
<p> Total = ${TOTAL}</p>
<p> Profit = ${profit}</p>`;

    
document.getElementById("info").innerHTML = html;

