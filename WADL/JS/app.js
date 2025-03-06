// //npm install prompt-sync
// const prompt = require('prompt-sync')();

// console.log("jay shree ram");

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// const a = 10;
// // a=20; // TypeError: Assignment to constant variable.

// let b = 20;
// b = 100;

// console.log(b);

// // pop boxes in js

// console.log("hello world");
// let c = prompt("Are you sure? (yes/no): ");
// console.log(c === 'yes');


const name = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

if(!name.value){
    console.log('Name is required');
}

if(!email.value){
    console.log('Email is required');
}

submit.addEventListener('click',function(){
    console.log(name.value);
    console.log(email.value);
})



