// class Student {
//     constructor(sId, sName) {
//         this.id = 1;
//         this.name = "mahi";
//     }
// }


class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "kolimunnesa school"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "mahiya");
const student3 = new Student(29, "Bappi")
console.log(student1);
console.log(student2);
console.log(student1.name, student2.name);

console.log(student3);