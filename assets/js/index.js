let openNav = () => {
    let overlay = document.getElementById("mobile-menu");
    overlay.classList.remove("hide");
};

let closeNav = () => {
    let overlay = document.getElementById("mobile-menu");
    overlay.classList.add("hide");
};

let redirect = (element) => {
    setTimeout(() => {
        let page = `/pages/${element.href.split("#")[1]}.html`;
        console.log(page);
        window.location.href = page;
    }, 1500);
};

let onSubmit = (event) => {
    event.preventDefault();

    let form = document.getElementById("form");
    let formData = new FormData(form);
    let obj = Object.fromEntries(formData);
    let json = JSON.stringify(obj);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    })
        .then(async (response) => {
            let json = await response.json();
            console.log(json.message);
            // if (response.status == 200) {
            //     result.innerHTML = json.message;
            // } else {
            //     result.innerHTML = json.message;
            // }
        })
        .catch((error) => {
            console.log(error);
            // result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            // setTimeout(() => {
            //     result.style.display = "none";
            // }, 3000);
        });
};
