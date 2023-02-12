//template strings

const firstName = 'Muyiwa';
const lastName = 'Olalekan';

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

const mGreetings = `Hello ${getFullName(firstName, lastName)}`;

//console.log(mGreetings);

//arrow functions

const greetings = (name, age) =>{
    return `Welcome ${name} ${age}`;
}

console.log(greetings('Muyiwa', 35));

