function delay() {
    return new Promise((res) => setTimeout(res, 50));
}

async function getRandomChinese(length) {
    let result = "";
    let i=0;
    while(i< length){
        i++;
        const sign = +Date.now() % 100000;
        result += String.fromCharCode(sign);
        await delay();
    }
    console.log(result);
    return result;
}
getRandomChinese(4)