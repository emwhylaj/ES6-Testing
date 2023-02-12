//template strings

// const firstName = 'Muyiwa';
// const lastName = 'Olalekan';

// function getFullName(firstName, lastName){
//     return `${firstName} ${lastName}`;
// }

// const mGreetings = `Hello ${getFullName(firstName, lastName)}`;

//console.log(mGreetings);

//arrow functions

//const greetings = (name, age) =>{
//     return `Welcome ${name} ${age}`;
// }

//console.log(greetings('Muyiwa', 35));

//Rest and Spread Operator

// //const mSum = (num1, num2) => console.log(num1 + num2);

// const mSum = (num1, num2, ... args) => {
//     console.log(num1);
//     console.log(num2);
//     console.log(args);
//     let sum = num1 + num2;
//     for(i = 0;i < args.length; i++){
//         sum += args[i];
//     }

//     console.log(sum)
// }

// mSum(1,2,3,4,5,6,7);

//Spread Operator

// let mObj1 = {
//     name: 'Muyiwa'
// }

// let mObj2 = {
//     age: 35
// }

// let mObj3 = {...mObj1, ...mObj2}

//console.log(mObj3);

//Destructuring

const name = "James Olawale Olalekan";

const nameArr = name.split(' ');
console.log(nameArr);

// let name1 = nameArr[0];
// let name2 = nameArr[1];
let [name1, name2] = nameArr;

console.log(name1);
console.log(name2);


const person ={
    firstName : 'Muyiwa',
    middleName : 'Olawale',
    lastName : 'Olalekan',
    age : 35
}

let {firstName, lastName} = person;

console.log(firstName);
console.log(lastName);