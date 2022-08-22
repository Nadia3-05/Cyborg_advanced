console.log('HW#1 - Variables');


//призначення значень змінним//
let price_apple = '15.678' , 
    price_fish = '123.965' ,
    price_milk = '90.2345' ;
    console.log('Price apple: '+price_apple +'$');
    console.log('Price fish: '+price_fish +'$ ');
    console.log('Price milk: '+price_milk +'$');
//Максимальне значення//
let max = Math.max( price_apple,  price_fish,   price_milk);
console.log('Max mean: '+max +'$');

//Мінімальне значення//
let min = Math.min( price_apple,  price_fish,  price_milk);
console.log('Min mean: '+min+'$ ');

//Сума всіх значень//
let sum = ( +price_apple + +price_fish + +price_milk);
console.log('Sum: '+sum+'$ ');

//Сума завкруглень//
let price1 = Math.floor(price_apple)
console.log('Price of 1 product is ronded floor: ' +price1 +'$' );
let price2 = Math.floor(price_fish)
console.log('Price of 2 product is ronded floor: ' +price2 +'$ ' );
let price3 = Math.floor(price_milk)
console.log('Price of 3 product is ronded floor: ' +price3 +'$ ' );
let sum_all = ( +price1 + +price2 + +price3);
console.log('Sum of floor prices: '+sum_all +'$ ');

//Сума завкруглень товарів до сотень//
price_100_number1 = '0';
let number1 = 15;
if(number1 < 50){
    console.log('Price 1 product rounded to 100 : ' +price_100_number1 +'$ ')
} else{
    console.log('100')
}
price_100_number2 = '100';
let number2 = 123;
if(number2 < 150 ){
    console.log('Price 2 product rounded to 100: ' +price_100_number2 +'$ ')
} else{
    console.log('200')
}
price_100_number3 = '100';
let number3 = 90;
if(number3 < 150 ){
    console.log('Price 3 product rounded to 100: ' +price_100_number3 +'$ ')
} else{
    console.log('200')
}
let sum_price_100 = ( +price_100_number1 + +price_100_number2 + +price_100_number3);
console.log('Sum rounded to 100: '+sum_price_100 +'$ ');

//перевірка на парність//
sum_alll = 'true';
let Numberr = 228;
if(Numberr % 2 ==0){
    console.log(sum_alll +' - even number:' +' true')
} else{
    console.log(sum_alll +' - even number:' +' false')
}

//решта з 500грн//
remainder = 500 - sum;
console.log('Remainder ' +remainder +' $')

//середнє арифм цін//
var arr = [15.68 , 123.97 , 90.23];
var summ = 0;
for (var i = 0; i < arr.length; i++) {
    summ +=arr[i];
}
var result = summ / arr.length;
console.log('Arithmetic mean: ' +result)

//знижка//
let sale = Math.floor(Math.random() * 10);
console.log('Random sale - ' +sale +'%')


//Сума із знижкою//
let sales = (sum / 100 )* sale;
let TOTAL = sum - sales;
console.log('Total: ' +TOTAL.toFixed(2) +'$')

//прибуток//
let profit = (sum / 2) - sales;
console.log('Profit: ' +profit +'$')

let html = `
<p> Price apple: = ${price_apple}$</p>
<p> Price fish: = ${price_fish}$</p>
<p> Price milk: = ${price_milk}$</p>
<p> Max mean = ${max}$</p>
<p> Min mean = ${min}$</p>
<p> Sum of prices = ${sum}$</p>
<p> Sum of floor prices = ${sum_all}$</p>
<p> Sum rounded to 100 = ${sum_price_100}$</p>
<p> Even number: 228 = ${sum_alll}</p>
<p> Remainder = ${remainder}$</p>
<p> Arithmetic mean = ${result}$</p>
<p> Random sale = ${sale} %</p>
<p> Total = ${TOTAL}$</p>
<p> Profit = ${profit}$</p>`;

    
document.getElementById("hw1").innerHTML = html;

