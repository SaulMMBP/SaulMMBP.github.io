import Routes from "./Routes.js";

export default function Router() {
    let { hash } = location;
    let path = hash !== "" ? hash.replace("#", "") : "/";
    let key = hash !== "" ? hash.replace("#/", "") : "home";
    if (key in Routes && path === Routes[key].path) {
        let html = Routes[key].component;
        document.getElementById("root").innerHTML = html;
    }
}
