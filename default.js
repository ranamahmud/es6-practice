function add(num1, num2) {
    return num1 + num2;
}



const total = add(15, 17);
console.log(total);

function add(num1, num2) {
    if(num2 == undefined){
        num2 = 0;
    }
    return num1 + num2;
}
const total2 = add(15);
console.log(total2);

function add(num1, num2) {
    num2 = num2 || 0
    return num1 + num2;
}
const total3 = add(15);
console.log(total3);

function add(num1, num2) {
    num2 = num2 || 20
    return num1 + num2;
}
const total4 = add(15);
console.log(total4);


function add(num1, num2=20) {
    return num1 + num2;
}
const total5 = add(15);
console.log(total5);

const total6 = add(15, 1);
console.log(total6);