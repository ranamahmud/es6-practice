class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super()
        this.name = name;
    }

    getFullName(){
        return this.name + " " +this.fatherName;
    }
}


const baby = new Child("Arnold");
console.log(baby);

const baby2 = new Child("Tom");
console.log(baby2);

console.log(baby.getFullName());