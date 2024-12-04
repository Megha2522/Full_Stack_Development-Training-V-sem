async function fetchdata() {
    try {
        let response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
        let data = await response.json();

        let newdata = data.articles;
        newdata.forEach((element) => {
            let h2 = document.createElement("h2");
            h2.textContent = element.title;
            let p = document.createElement("p");
            p.textContent = element.description;
            let a = document.createElement("a");
            a.textContent = element.url;
            a.setAttribute("href", element.url);
            let top = document.getElementById("top");
            top.appendChild(h2);
            top.appendChild(p);
            top.appendChild(a);
        });

    } catch (error) {
        console.log(error);
    }
}
