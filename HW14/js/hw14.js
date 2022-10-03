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
// let  counter = 14;
// document.getElementById("bntUp").addEventListener('click',changeSizeUp);
// document.getElementById("bntDown").addEventListener('click',changeSizeDown);

// function changeSizeUp () {
//     counter++;
//     document.getElementById("text").innerHTML = counter;    
//     document.getElementById("text").setAttribute('style', `font-size: ${counter}pt`);  
// }
// function changeSizeDown () {
//     counter--;
//     document.getElementById("text").innerHTML = counter;    
//     document.getElementById("text").setAttribute('style', `font-size: ${counter}pt`);   
// }
function* newFontGenerator() {
    yield* showSizeUp
    yield* showSizeDown
}
function* main(){
    const uxIterator = UXDesignFlow();
    uxIterator.next();

    sizeUp.on('click', () =>{
        let i = 14
            while( i < 102)
            i++;
        // for(let i = 14; i < 72; i++) {
        //     yield i++
        // }   
        uxIterator.next();
    });

    sizeDown.on('click', () =>{
        let i = 14
        while( i < 102)
        i--;
        // for(let i = fontGenerator.next().value ; i < 72; i--) {
        //     yield i--
        // }   
        uxIterator.next();
    })

}



const fontGenerator = newFontGenerator(14);
