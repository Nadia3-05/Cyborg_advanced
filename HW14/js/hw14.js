// Task 1
function* ceateIdGenerator(n = Infinity) {
    for(let i = 1; i < n; i++) {
      yield i
    }   
}   
const idGenerator = ceateIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);//викликаємо потрібну кількість разів


// Task 2
const text = document.querySelector(".text");
const size = parseInt(window.getComputedStyle(text).fontSize);

function* newFontGenerator(seed) {
    let value = seed;
    let counter;
    while (true) {
      if (counter === "UP") {
        value = value + 2;
        counter = yield value;   
      } else  if(counter === "DOWN") {
        value = value - 2;
        counter = yield value;
      } else {
        counter = yield value;
      }
    } 
  };
const fontGenerator = newFontGenerator(14);

document.querySelector("#bntUP").addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("UP").value}px`;    
})

document.querySelector("#bntDOWN").addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("DOWN").value}px`;
})