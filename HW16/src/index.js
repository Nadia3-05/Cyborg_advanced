
import './sass/main.scss'
import webpack from './assets/webpack.png'
import {calcDegree} from "./hw/hw3"
import {pairsOfStudents, students04} from "./hw/hw4"
import {dividedByThree} from "./hw/hw5"
import {getSubjects, students} from "./hw/hw6"
import {generateBlocks} from "./hw/hw10"

document.body.onload = addElement;
function addElement() {
    const wrapperDiv = document.createElement("div");
    wrapperDiv.className = "wrapper__box";
    document.getElementsByTagName("body")[0].appendChild(wrapperDiv)
    const textBoxDiv = document.createElement("div");
    textBoxDiv.className = "wrapper__box"
    wrapperDiv.appendChild(textBoxDiv);

    const divHW3 = document.createElement("div");
    divHW3.className = "main__box";
    divHW3.innerHTML = `<b> Homework 3: </b>` + `${hw3}` ;
    textBoxDiv.appendChild(divHW3);

    const divHW4 = document.createElement("div");
    divHW4.className = "main__box";
    divHW4.innerHTML = `<b> Homework 4: </b>` + `${hw4}` ;
    textBoxDiv.appendChild(divHW4);

    const divHW5 = document.createElement("div");
    divHW5.className = "main__box";
    divHW5.innerHTML = `<b> Homework 5: </b>` + `${hw5}` ;
    textBoxDiv.appendChild(divHW5);

    const divHW6 = document.createElement("div");
    divHW6.className = "main__box";
    divHW6.innerHTML = `<b> Homework 6: </b>` + `${hw6}` ;
    textBoxDiv.appendChild(divHW6);

    const divHW10 = document.createElement("div"); 
    divHW10.className = "main__box";  
}
const mainImage = document.getElementById("mainImage")
    mainImage.src = webpack
const hw3 = calcDegree(2, -4);
const hw4 = pairsOfStudents(students04);
const hw5 = dividedByThree("Commendant");
const hw6 = getSubjects(students[0]);


