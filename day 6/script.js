// let a = () => {
//     console.log("Arrow Function");
// };
// let b = () => console.log("Arrow function 2");
// let c = (x,y) => {
//     return x+y;
// };
// let res = c('rahul','ravi');
// let res1 = c(3,4);
// b();
// a();
// console.log(res,res1);


function display(){
    // let p1 = document.querySelector("p");
    let p1 = document.querySelectorAll("p");
    p1[0].innerHTML = "I am a paragraph";
    p1[0].style.backgroundColor = "red";
    p1[1].innerHTML = "I am second para";
    p1[1].style.backgroundColor = "yellow";
};

let changeHeader = () => {
    let head1 = document.querySelector("h1");
    head1.textContent = "Change The Title";
    let a1 = document.querySelector("a");
    a1.setAttribute("href","https://aktu.ac.in");
    a1.innerHTML = "AKTU Website";
};

let addcontent = () => {
    let newDiv = document.createElement("div");
    newDiv.textContent = 'This is a new div';
    document.body.appendChild(newDiv);
};