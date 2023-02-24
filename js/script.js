alert("Hello!");

const name = prompt("What is your name?");

const birthYear = prompt("What is your birth year?");

const country = prompt("Where are you from?");

const age = new Date().getFullYear() - birthYear;

alert(`Nice to meet you, ${name}! You are ${age} years old! You are from ${country}!`);