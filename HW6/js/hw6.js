const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
//1     
function getSubjects(student) {
let arr = [];
    for (subjects in student.subjects) {
      let result = subjects.toUpperCase().charAt(0) + subjects.slice(1);
        arr.push(result.replaceAll('_', '-'));
    }
    return arr;
    }
console.log(getSubjects(students[0]));
//2 
function getAverageMark(students){
  let averageMark = [];
  let averageMarkLenght = 0;
  for (let i in students.subjects) {
      averageMark = Object.values(students.subjects)
          .flat()
          .reduce((a, b) => a + b);
      averageMarkLenght = Object.values(students.subjects)
          .flat().length;
  }
  return (averageMark / averageMarkLenght).toFixed(2);
}
console.log(getAverageMark(students[0]));
//3
function getStudentInfo(students){
  return {
  course : students.course,
  name : students.name,
  average : getAverageMark(students),};
}
console.log(getStudentInfo(students[0]));
//4
function getStudentsNames(student) {
  return students.reduce((prev, item, index) => {
    prev[index] = item.name;
    return prev;
  }, []).sort();
}
console.log(getStudentsNames(students[0]))
//5
function getBestStudent(students) {
  let theBestStudent = students.reduce((a, b) =>
      getAverageMark(a) > getAverageMark(b) ? a : b).name;
  return theBestStudent;
}
console.log(getBestStudent(students));
// let max = Math.max( getAverageMark(students[0]),  getAverageMark(students[1]),   getAverageMark(students[2]));
// console.log(max);
//6
function calcRepeatLetter(initStr) {
  const strItems = initStr.split('');
  const result = {};
  strItems.forEach( item => {
    const normalItem = item.toLowerCase();
    if(normalItem in result) {
      result[normalItem] = result[normalItem] + 1;
    } else {
      result[normalItem] = 1;
    }
  });
  return result}
console.log(calcRepeatLetter('Test'))

const l = document.getElementById("HW6");
  l.innerHTML = 
    `<p>Function1 - Subjects: ${getSubjects(students[0])}</p>
    <p>Function2 - Average Mark: ${getAverageMark(students[0])}</p>
    <p>Function3 - Student Info: ${getStudentInfo(students[0])}</p>
    <p>Function4 - Students Names: ${getStudentsNames(students[0])}</p>
    <p>Function5 - Best Student: ${getBestStudent(students)}</p>
    <p>Function6 - Calculate Repeat Letter: ${calcRepeatLetter('Test')}</p>`;