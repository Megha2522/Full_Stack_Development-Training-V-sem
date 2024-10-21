const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Data Send Successfully");
        }
        else {
            reject("Data Not Send");
        }
    }, 5000);
});

myPromise
    .then((message) => {
        console.log("Data: " + message)
    })
    .catch((error) => {
        console.log(error);
    });