import AboutMe from "./components/AboutMe.js";
import Development from "./components/Development.js";
import Contact from "./components/Contact.js";

export default [
    { hash: "", component: AboutMe() },
    { hash: "#/aboutme", component: AboutMe() },
    { hash: "#/development", component: Development() },
    { hash: "#/contact", component: Contact() },
];
