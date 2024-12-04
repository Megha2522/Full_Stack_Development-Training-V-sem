async function fetchdata() {
    try {
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        data.forEach((element) => {
            let h2 = document.createElement("h2");
            h2.textContent = element.login;
            let a = document.createElement("a");
            a.textContent = element.login;
            a.setAttribute("href", element.html_url);
            let top = document.getElementById("top");
            top.appendChild(h2);
            top.appendChild(a);
        });

    } catch (error) {
        console.log(error);
    }
}
