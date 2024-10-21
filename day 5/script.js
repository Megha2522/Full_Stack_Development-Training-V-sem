"use strict";

// let a = 12;
// let b = 22/7;
// let c = "Hello";
// let d = [1,2,3];
// let e = {
//     name: "Megha",
//     id: 12,
// };
// let f = true;

// let x = "12" / "6";
// let bol = true;
// let str = String(bol);
// console.log(str.charAt(1));

// let str = "true"
// let num = Boolean(str)
// console.log(num)

// let num = Boolean(-12)
// console.log(num)

// function display(){
//     let x = confirm("Are you sure");
//     alert("User click " + x);
// }

// function display(){
//     let x = prompt("Enter your name","Aviral");
//     alert(x);
// }

// let a = "12"
// let b = 12.0
// console.log(a===b)



function validate() {
    let username = document.getElementById("login").value;
    let pss = document.getElementById("pass").value;
    let p1 = document.getElementById("result");
    if (username == "admin" && pss == "admin") {
        p1.innerText = "Login Success";
    }
    else p1.innerText = "Login Failed";
    return false;
}