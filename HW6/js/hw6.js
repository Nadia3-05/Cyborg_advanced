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
// getAverageMark(students[0]) --> 3.79
console.log(Object.values(students[0].subjects));
    
      

  