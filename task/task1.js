<<<<<<< HEAD
// Array iteration using forEach
let array = [1, 2, 3, 4, 5];
array.forEach((element, index) => {
    console.log(`Element is ${element} and its index is ${index}`);
});

// Object iteration using for...in and proper key-value access
let objtype = {
    "fname": "vaisali",
    "lname": "Arjunan",
    "age": 19
};

/* Commented out incorrect examples
console.log(objtype.age);
objtype.forEach((key, value) => { // forEach doesn't work on objects
    console.log(value, key);
});
for (const {key, value} of objtype) { // Incorrect syntax for objects
    console.log(key, value);
}
*/

// Corrected object iteration using for...in
for (let key in objtype) {
    let value = objtype[key]; // Proper way to access object values
    console.log(`${key} : ${value}`);
}
=======
let num1 = 8; 
let num2 = 10; 

console.log(`Numbers: num1 = ${num1}, num2 = ${num2}`);

// 1. Bitwise (&)

console.log(num1 & num2 );

// 2. Bitwise (|)
console.log(num1 | num2);

// 3. Bitwise (^)
console.log(num1 ^ num2);

// 4. Bitwise (~) on num1

console.log(num1);

// 5. Bitwise (~) on num2

console.log(num2);

// 6. Left Shift (<<) on num1

console.log(num1<< 1);

// 7. Right Shift (>>) on num1

console.log(num1 >> 1);

// 8. Left Shift (<<) on num2

console.log(num2<< 1);

// 9. Right Shift (>>) on num2

console.log(num2 >> 1);
>>>>>>> 657e65ae6a1e532ef1f30d491ee0208f47de407f
