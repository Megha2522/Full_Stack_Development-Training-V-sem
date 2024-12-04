async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Order for " + name + " Prepared");
        }, time)
    });
}

async function restaurant() {
    console.log("Order Placed");
    let pizza = await orderfood("Pizza", 1000);
    console.log(pizza);
    let burger = await orderfood("Burger", 2000);
    console.log(burger);
    let noodles = await orderfood("Noodles", 3000);
    console.log(noodles);
    console.log("All Orders Completed");
}

restaurant();