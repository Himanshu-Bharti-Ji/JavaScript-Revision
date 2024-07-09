// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);    // false

// console.log(id);    // Symbol(123)
// console.log(anotherId);    // Symbol(123)


// const bigNumber = 123456789012345678901234567890123456789012345678901234
// console.log(bigNumber)      // 1.2345678901234568e+53

// const bigNumber2 = 123456789012345678901234567890123456789012345678901234n
// console.log(bigNumber2)     // 123456789012345678901234567890123456789012345678901234n


// Reference (Non primitive)

// Array, Objects, Functions

// Array

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(numbers);    // [1, 2, 3, 4, 5, 6]

// console.log(numbers[0]);    // 1
// console.log(numbers[1]);    // 2
// console.log(numbers[2]);    // 3
// console.log(numbers[3]);    // 4
// console.log(numbers[4]);    // 5
// console.log(numbers[5]);    // 6
// console.log(numbers.length);    // 6
// console.log(numbers[6]);    // undefined


// Objects

// const user = {
//     name: 'himanshu',
//     age: 23,
//     email: 'himanshu@gmail.com',
//     address: {
//         city: 'Delhi',
//     }
// }
// console.log(user);    // {name: 'himanshu', age: 23, email: 'himanshu@gmail.com', address: {…}}
// console.log(user.name);    // himanshu
// console.log(user.age);    // 23
// console.log(user.email);    // himanshu@gmail.com
// console.log(user.address);    // {city: 'Delhi'}
// console.log(user.address.city);    // Delhi



// Functions

const add = function (a, b) {
    return a + b;
}
console.log(add(1, 2));    // 3


