//use eventlistener to detect specific changes and arrow function to tell it what to execute when detected
window.addEventListener("load", () =>{

const username = sessionStorage.getItem('USERNAME');

document.getElementById("username-header").innerHTML = username;

var transaction = sessionStorage.getItem('TRANSACTION');

document.getElementById("transaction-1").innerHTML = transaction;
})