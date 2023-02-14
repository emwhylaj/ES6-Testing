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

// const name = "James Olawale Olalekan";

// const nameArr = name.split(' ');
// console.log(nameArr);

// // let name1 = nameArr[0];
// // let name2 = nameArr[1];
// let [name1, name2] = nameArr;

// console.log(name1);
// console.log(name2);


// const person ={
//     firstName : 'Muyiwa',
//     middleName : 'Olawale',
//     lastName : 'Olalekan',
//     age : 35
// }

// let {firstName, lastName} = person;

// console.log(firstName);
// console.log(lastName);

//Array Function : map()

 //const mArr = [1,2,3,4,5];

 const mArr = [{
    name: 'Jake Loius',
    experience : 10,
    type: 'commercial'
 },{
    name: 'John Doe',
    experience : 5,
    type: 'private'
 },
 {
    name: 'Jame Jaden',
    experience : 20,
    type: 'commercial'
 }
]

// let newArr = [];

// const doubleValues = (item) => {
//     return item * 2
// }

// for(let i =0; i < mArr.length; i++){
//     newArr.push(doubleValues(mArr[i]));
// }

let newArr = mArr.map((data, pos) => {

    //console.log(`Item at pos: ${pos} is ${data}`);
    //console.log(data);
    return data * 2;
})

//console.log(newArr);


//Arrow function: reduce()

//  const numArr = [1, 2, 3, 4, 5];

//  const result = numArr.reduce((acc, item) =>{
    //console.log(item);

    //console.log(acc);
//     return acc + item
//  },0)

 //console.log(result)


 //Arrow function: filter()

//  const numArr = [1,2,3,4,5,6,7];

//  const resultArr = numArr.filter(item => {
//     //console.log(item);
//     return item % 2 === 0;
//  })

//  console.log(resultArr)

//Arrow function: find() and findIndex()

// const numArr = [-1, -2, -3, -4, 1, 2, 3, 4]

// // const result = numArr.find(item => {
// //     return item % 2 === 0 && item >= 0;
// // })

// const result = numArr.findIndex(item => {
//     return item % 2 !== 0 && item >= 0;
// })

// console.log('Result =>', result);

//classes in ES6

// function Person(name, birthYear){
//     this.name = name;
//     this.yearOfBirth = birthYear;

//     this.getDetails = function(){
//         return "Name: " + this.name + " and Age: " + (2023 - this.yearOfBirth)
//     }
// }

// class Person{
//     constructor(name, birthYear){
//         this.name = name;
//         this.yearOfBirth = birthYear;
//     }

//     getDetails = () => {
//         return `Name: ${this.name } and Age: ${2023 - this.yearOfBirth}`
//     }
// }

// var muyiwa = new Person('Muyiwa', 1988);

// console.log(muyiwa.getDetails());

//Inheritance in ES6

class Person{
    constructor(name, birthYear){
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return `Name: ${this.name } and Age: ${2023 - this.yearOfBirth}`
    }
}

class Pilot extends Person{
    constructor(name, birthYear, exp, type, license){
        super(name, birthYear);
        this.experience = exp;
        this.type = type;
        this.license = license;
    }

    getData = () =>{
        console.log(`${this.getDetails()} and Experience ${this.experience} and Type: ${this.type}`)
    }
}

const john = new Pilot('Muyiwa Olalekan', 1988, 20, 'Private', 'TC1234');

console.log(john);

john.getData();