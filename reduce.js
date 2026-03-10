// array.reduce((accumulator, currentValue) => {
    // logic
// }, initialValue);


// const numbers = [10, 20, 30, 40];

// const sum  = numbers.reduce((a , b) => a + b )

// console.log(sum);

// const numbers = [2, 3, 4];

// const multiply = numbers.reduce((a, b) => a * b)

// console.log(multiply);



// Task: Find max number
// const numbers = [5, 12, 8, 20, 3];

// const maxNumber = numbers.reduce((a , b) => a > b ? a : b , 0)

// console.log(maxNumber);


// Task: Count total characters
// const words = ["apple", "banana", "mango"];

// const totalCharacter = words.reduce(( a , b) => {

//     return a + b
// } , '')

// console.log(totalCharacter.length);



// Task: Count occurrences
// const fruits = ["apple","banana","apple","orange","banana","apple"];

// const count = fruits.reduce((accumulator , currentValue) => {

//      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1

//      return accumulator
// } , {})

// // console.log(count);



// const cart = [
//   {name:"shirt", price:500},
//   {name:"pant", price:800},
//   {name:"shoes", price:1200}
// ];


// const totalPrice = cart.reduce((acc , curr) => acc + curr.price , 0)

// console.log(totalPrice);



// const words = ["apple", "banana", "mango", "orange"];

// const totalCharacter = words.reduce((acc , w) => acc + w.length  , 0)

// console.log(totalCharacter);


// const cart = [
//   {name:"shirt", price:500},
//   {name:"pant", price:800},
//   {name:"shoes", price:1200},
//   {name:"cap", price:200}
// ];

// const totalPrice = cart.reduce((acc , cart) => acc + cart.price , 0);

// console.log(totalPrice);


// const numbers = [10, 45, 22, 90, 5, 60];

// const maxNumber = numbers.reduce((acc , num) => Math.max(acc , num) , 0)

// // console.log(maxNumber);

// const bigNum = Math.max(...numbers)

// console.log(bigNum);


const users = [
  {id:1, name:"Taj"},
  {id:2, name:"Rahim"},
  {id:3, name:"Karim"}
];


const obj  = users.reduce((acc , user ) => {


  acc[user.id] = user.name
  
  return  acc

} , {})


console.log(obj);
