const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
//1
function getPairs(students) {
    const girl = [];
    const boy = [];
    const getPairsTwo = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].substr(-1) === "а") {
            girl.push(students[i]);
        } else if (students[i].substr(-1) !== "а") {
            boy.push(students[i]);}}
    for (let j = 0; j < girl.length; j++) {
        getPairsTwo.push([girl[j], boy[j]]);}
    return getPairsTwo;}
const pairs = getPairs(students);
console.log(pairs);
//2
function getTopic (pairs, themes) {
    for(let i = 0; i < pairs.length; i++){
        getTopicTwo.push([pairs[i], themes[i]].flat());}
    return getTopicTwo;}
const getTopicTwo = [];
const pairsTopic = getTopic (pairs , themes);
console.log(pairsTopic);
//3
function getMarks (students, marks){
    for (let i = 0; i < students.length; i++) {
        getMarksNumber.push([students[i], marks[i]]);}
    return getMarksNumber;}
    const getMarksNumber = [];
    const mark = getMarks (students, marks);
    console.log(mark);
//4
 function getRandomNumber(pairsTopic) {
    const randomNumber = [];
    for (let i = 0; i < pairsTopic.length; i++) {
        let number = Math.floor(Math.random() * (6 - 1) + 1);
        randomNumber.push([pairsTopic[i], number].flat());}
    return randomNumber;}
let random = getRandomNumber(pairsTopic);
console.log(random);