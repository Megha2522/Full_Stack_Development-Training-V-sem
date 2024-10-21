function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = [
                { name: "Alice", score: 50 },
                { name: "Bob", score: 65 },
                { name: "Charlie", score: 80 },
                { name: "David", score: 45 },
                { name: "Rahul", score: 50 }
            ];
            resolve(students);
        }, 4000);
    });
}

// fetchdata()
//     .then((students) => console.log(students.map(x => x.score).reduce((x, y) => x + y, 0)))
//     .catch((error) => {
//         console.log(error);
//     });

// OR 

fetchdata()
    .then((data) => {
        let sum = 0;
        data.forEach(element => {
            sum += element.score;
        });
        console.log(sum);
    })
    .catch((error) => {
        console.log(error);
    });