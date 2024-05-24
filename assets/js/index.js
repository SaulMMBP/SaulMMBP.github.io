let onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let state = document.getElementById("state");
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
        .then((response) => {
            if (response.status == 200) {
                state.innerHTML = '<i class="fa-solid fa-circle-check"></i> Success []~(￣▽￣)~*';
            } else {
                state.innerHTML =
                    '<i class="fa-solid fa-circle-exclamation"></i> An error ocurred! (っ °Д °;)っ';
            }
        })
        .catch((error) => {
            state.innerHTML =
                '<i class="fa-solid fa-circle-exclamation"></i> An error ocurred! (っ °Д °;)っ';
        })
        .then(() => {
            form.reset();
            setTimeout(() => {
                state.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send';
            }, 5000);
        });
};

document.getElementById("form").addEventListener("submit", onSubmit);
