function* newFontGenerator() {
    for(let i = fontGenerator2.next().value; i < 72; i++) {
      yield i++
    }   
}  
// const fontGenerator = newFontGenerator();

// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);
// console.log(fontGenerator.next().value);




function* newFontGenerator2() {
    for(let i =fontGenerator.next().value ; i < 72; i--) {
      yield i--
    }   
}  
// const fontGenerator2 = newFontGenerator2();
// console.log(fontGenerator2.next().value);
// console.log(fontGenerator2.next().value);
// console.log(fontGenerator2.next().value);
// console.log(fontGenerator2.next().value);
// console.log(fontGenerator2.next().value);
