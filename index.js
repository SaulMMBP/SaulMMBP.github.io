let openNav = () => {
    let logo = document.getElementById("logo");
    let isClosed = logo.classList.contains("close");

    if (isClosed) {
        logo.classList.remove("close");
    } else {
        logo.classList.add("close");
    }

    let nav = document.getElementById("nav");
    let isHidden = nav.classList.contains("hidden");

    if (isHidden) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden");
    }

    let navLinks = document.getElementsByClassName("nav-link");
    Array.prototype.forEach.call(navLinks, (navLink) => {
        let isHidden = navLink.classList.contains("hidden");
        if (isHidden) {
            navLink.classList.remove("hidden", "animate");
        } else {
            navLink.classList.add("hidden", "animate");
        }
    });
};

let onSubmit = (event) => {
    event.preventDefault();

    let form = document.getElementById("contact-form");
};
