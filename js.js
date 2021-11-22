"use strict";


console.log(4/0);
console.log('str'/3);

let smth
console.log(smth);

let person = {
    name: "Арсений",
    age: "25",
    isMar: false
};
console.log(person.name);

console.log(person["isMar"]);


let arr = ['plum.png', 'orang.jpg', "apple.bmp"];
console.log(arr[2]);


/* alert('Hello world') */

/* let answer = confirm('Are you here');
console.log(answer); */

let answer = +prompt('Есть ли Вам 18?', "Да");
console.log(typeof(answer));

/* 
console.log("arr" + "-object");

console.log("4" + "-object");
console.log("4 + +""-object"); */

let incr = 10,
    decr = 10;

/* incr++;
   decr--; */
console.log(incr++);
console.log(decr--);

console.log(4+5);
console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);








