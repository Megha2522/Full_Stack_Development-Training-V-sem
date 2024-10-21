// let num = [1, 2, 3, 4, 45, 5, 45];

// let newnum = num.map(x => x*2);
// console.log(newnum);

// let evennum = num.filter(x=>x%2==0);
// console.log(evennum);

// let sum = num.reduce((x, y) => x + y, 0);  // x-> accumulator, y-> current value, 0-> initial value
// console.log(sum);

// let product = num.reduce((x, y) => x * y, 1);
// console.log(product);

// const students = [
//     { name: "Alice", score: 50 },
//     { name: "Bob", score: 65 },
//     { name: "Charlie", score: 80 },
//     { name: "David", score: 45 },
//     { name: "Rahul", score: 50 }
// ];
// let sum = students.filter(x => x.score > 60).map(x => x.score).reduce((x, y) => x + y, 0);
// console.log(sum);

// num.forEach((x) => console.log(x * 3));

// SYNCHRONOUS AND ASYNCHRONOUS--------------------------------------------------------------------------------------------------

// sayhello = () => {
//     console.log("I am in Hello Function");
// };
// console.log("Start");
// setTimeout(sayhello, 3000);
// console.log("End");
// setTimeout(sayhello, 6000);

console.log("start");
setTimeout(() => {
    console.log("First task is completed");
    setTimeout(() => {
        console.log("Second task is completed");
        setTimeout(() => {
            console.log("Third task is completed");
        }, 3000);
    }, 2000);
}, 1000);
console.log("End");