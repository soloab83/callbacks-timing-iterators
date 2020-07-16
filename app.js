function greeting(name, callback) {
    let sentence = 'Hello, my name is ' + name + ' ';

    let otherSentence = callback();

    return sentence + otherSentence;
}

function anotherGreeting() {
    let sentence = 'I forgot my last name';

    return sentence;
}

let myName = 'Solomon';
console.log(greeting(myName, anotherGreeting));


function printArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }

    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];

        console.log(number);
    }    
}

const numbersArray = [1,2,3,4,5,9,8,7,6];
    
printArray(numbersArray, printArrayAgain)


function calculator (num1, num2, callbackOne, callbackTwo) {
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);

    return result;
}

function addNumbers(num1, num2) {
    let result = num1 + num2;


}

function subtractNumbers(num1, num2) {
    let result = num1 - num2;


}

console.log(calculator(5,77, addNumbers. subtractNumbers))


// SuperHero Function

function spiderMan (power1, power2,) {
    let powers = power1() + ' and ' + power2();

    return powers;
}

function spiderWeb() {
    let power = 'I have spider web';

    return power;
}

function spiderStrength() {
    let strength = 'I have super strength';

    return strength;
}

console.log(spiderMan(spiderWeb, spiderStrength));




function blastOff() {
    let num = 0;

    for (let i = 10; i >= num; i--) {
        console.log(i);
    }
}

setTimeout(blastOff, 5000);

function printName() {
    let num = 0;

    for (let i = 10; i >= num; i--) {
        console.log(i);
    } 

    console.log('SOLOMON!!!');
}

setTimeout(printName, 5000);