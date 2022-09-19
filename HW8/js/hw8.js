class Student {
    constructor(university, course, fullName, marks) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = marks;
   
    }
    getInfo() {
      return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }
    get Marks() {
        return this.marks;
    } 
    set mark(value){
  }}
  const student = new Student("Вищої Школи Психотерапії м.Одеса", 1, "Остап <s>Родоманський</s> Бендер", [5, 4, 4, 5] );
  Student.mark = 5;
  console.log(student.getInfo());
 






//   set mark(value){
//     if (value > 6) {
//         alert(" Введіть оцінку від 1 до 5 ");
//         return;
//       }
//       this._mark = value; 
// }