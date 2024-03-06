import Router from "./Router.js";

export function App() {
    let { hash } = location;

    Router.forEach((component) => {
        if (hash === component.hash) {
            document.getElementById("root").innerHTML = component.component;
        }
    });
}
