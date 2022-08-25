console.log('HW#1 - Variables');


//призначення значень змінним//
const priceApple = 15.678 ; 
const priceFish = 123.965 ;
const priceMilk = 90.2345;
    console.log('Price apple: '+priceApple +'$');
    console.log('Price fish: '+priceFish +'$ ');
    console.log('Price milk: '+priceMilk +'$');

//Максимальне значення//
const max = Math.max( priceApple,  priceFish,   priceMilk);
    console.log('Max number: '+max +'$');

//Мінімальне значення//
const min = Math.min( priceApple,  priceFish,  priceMilk);
    console.log('Min number: '+min+ '$ ');

//Сума всіх значень//
const sum = ( priceApple + priceFish + priceMilk);
    console.log('Sum: '+sum+'$ ');

//Сума завкруглень//
const sumOfFloorPrices = Math.floor(priceApple) + Math.floor(priceFish) + Math.floor(priceMilk);
    console.log('Sum of floor prices: '+sumOfFloorPrices +'$ ');

//Сума завкруглень товарів до сотень//
const sumRoundedTo100 = Math.round(sumOfFloorPrices / 100) * 100
    console.log('Price 1 product rounded to 100 : ' +sumRoundedTo100 +'$ ')

//перевірка на парність//
if(sumOfFloorPrices % 2 ==0){
    console.log('Even number:' +' true')
} else{
    console.log('Even number:' +' false')
}
//решта з 500грн//
remainder = 500 - sum;
    console.log('Remainder ' +remainder +' $')

//середнє арифм цін//
const Arithmetic = sum / 3;
    console.log('Arithmetic mean: ' +Arithmetic)

//знижка//
const sale = Math.floor(Math.random() * 10);
    console.log('Random sale - ' +sale +'%')


//Сума із знижкою//
const TOTAL = sum - (sum / 100 )* sale;
    console.log('Total: ' +TOTAL +'$')

//прибуток//
const profit = (sum / 2) - (sum / 100 )* sale;
console.log('Profit: ' +profit +'$')

const html = `
<p> Price apple: = ${priceApple}$</p>
<p> Price fish: = ${priceFish}$</p>
<p> Price milk: = ${priceMilk}$</p>
<p> Max mean = ${max}$</p>
<p> Min mean = ${min}$</p>
<p> Sum of prices = ${sum}$</p>
<p> Sum of floor prices = ${sumOfFloorPrices}$</p>
<p> Sum rounded to 100 = ${sumRoundedTo100}$</p>
<p> Even number: ${sumOfFloorPrices % 2 == 0}</p>
<p> Remainder = ${remainder}$</p>
<p> Arithmetic mean = ${Arithmetic}$</p>
<p> Random sale = ${sale} %</p>
<p> Total = ${TOTAL}$</p>
<p> Profit = ${profit}$</p>`;

    
document.getElementById("hw1").innerHTML = html;

