const person = {
    name: 'Jack William',
    age: 17, job: 'facebooker', gfName:'Ema Watson',
    address: 'Kochu Khet', phone: '0173234243',
    friends: ['Tom Hanks', 'tom cruis', 'Tom Yarn']
}

console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);
console.log(person.gfName);

// const gfName = person.gfName;
// const phone = person.phone;
const {phone, gfName, address, salary} = person
console.log(gfName,phone,salary,address);
console.log(gfName,phone,salary,address);
console.log(gfName,phone,salary,address);
console.log(gfName,phone,salary,address);

// array 
const friends = ['Sakib Khan', 'Arman Khan', 'Umair Khan', 'Salman Khan']

const [chotoFriend, nextFriend,...restFriends] = friends;

console.log(chotoFriend, nextFriend);
console.log(restFriends);


const complexObject = {
    name: 'abc',
    info:{
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info
console.log(leader);


