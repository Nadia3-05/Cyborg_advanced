class Student {
  constructor(university, course, fullName, marks, newMarks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.newMarks = newMarks
    this.dismiss = true;
  }

  getInfo() {
    return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
  }
  getMarks()  {
    return this.dismiss ? this.marks : null
  }
    
  setMark () {
    return this.dismiss ? this.newMarks : null
  }
  
  getAverageMark () {
    let sumMarks = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sumMarks += this.marks[i];
    }
    return this.dismiss ? sumMarks / this.marks.length : null
  } 

  dismiss() {
    (!this.dismiss);
  }

  recover() {
    (this.dismiss);
  }
}

const student = new Student(
  "Вища Школа Психотерапії м.Одеса", 1, 
  "Остап " + "<s>Родоманський</s>" + " Бендер", 
  [5, 4, 4, 5, 5]
);

console.log(student.getInfo());
console.log(student.getAverageMark(student.marks));

document.write("<b> #1: </b> " + student.getInfo() + "</p>")
document.write("<b> #2: </b> " + student.getAverageMark() + "</p>")

//Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName, marks, scholarship) {
  super(university, course, fullName, marks);
  this.scholarship = scholarship;

  setInterval(function() { 
    console.log(this.getScholarship())}.bind(this), 30000);
  }
  
  getScholarship() {
    if (this.getAverageMark() >= 4 ) {
      return  `Студент ${this.fullName} отримав ${this.scholarship} грн. стипендії`;
    }
  }
}

const budgetStudent = new BudgetStudent(
  "Вищої Школи Психотерапії м.Одеса", 
  1,
  "Роман Бендер", 
  [4, 4, 5, 4, 5],
  1400
);
document.write("<b> #3: </b> " + budgetStudent.getScholarship() + "</p>")