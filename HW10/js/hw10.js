function generateBlocks() {
    let main = document.createElement("block");
    document.body.prepend(main);
    main.classList.add("box");
   
    for (let i = 0; i < 25; i++) {
        let div = document.createElement("div");
        main.prepend(div);
        div.classList.add("square");
        div.style.cssText = `background-color: ${getRandomColors()};`;
    }
}
function getRandomColors(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb = "rgb("+r+","+g+","+b+")";
        return rgb;
}

let counter = 0;
function generateBlocksInterval() {
    if (counter === 0) {
        generateBlocks();
        counter += 1;
    } else {
        let div = document.getElementsByTagName("div");
        for (let i = 0; i < 25; i++) {
            div[i].style.backgroundColor = `${getRandomColors()}`;
        }
    }

    setTimeout(generateBlocksInterval, 1000);
}
generateBlocksInterval();