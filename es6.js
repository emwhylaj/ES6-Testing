//template strings

const firstName = 'Muyiwa';
const lastName = 'Olalekan';

function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

const mGreetings = `Hello ${getFullName(firstName, lastName)}`;

console.log(mGreetings);