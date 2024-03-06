import Router from "./Router.js";

export function App() {
    let { hash } = location;
    let key = hash !== "" ? hash.replace("#/", "") : "home";

    if (key in Router && hash === Router[key].hash) {
        document.getElementById("root").innerHTML = Router[key].component;
    }
}
