const Ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const Latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const Litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//1
function getMyTaxes(salary) {
    return salary * this.tax;
  }
console.log (getMyTaxes.call(Ukraine, 1500));

//2
 function getMiddleTaxes(country) {
    return this.tax * this.middleSalary;  
 }
console.log (getMiddleTaxes.call(Ukraine));

//3
function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log (getTotalTaxes.call(Ukraine));

//4
function getMySalary(country) {
    const min = 1500;
    const max = 2000;
    const salary = Math.floor(Math.random() * (max - min) + min);
    
    const allProfit = {
    Salary: salary, 
    Taxes: this.tax,
    profit: salary - this.tax 
    }
    console.log(allProfit);
 }
setInterval(() => getMySalary.call(Ukraine), 10000);

const text = document.getElementById("HW7");
  text.innerHTML = 
    `<p>Function1 - Salary: ${getMyTaxes.call(Ukraine, 1500)}</p>
    <p>Function2 - Middle Taxes: ${getMiddleTaxes.call(Ukraine)}</p>
    <p>Function3 - Total Taxes: ${getTotalTaxes.call(Ukraine)}</p>`;


