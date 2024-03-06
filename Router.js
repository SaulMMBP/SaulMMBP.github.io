import AboutMe from "./components/AboutMe.js";
import Development from "./components/Development.js";
import Contact from "./components/Contact.js";

export default {
    home: { hash: "", component: AboutMe() },
    aboutme: { hash: "#/aboutme", component: AboutMe() },
    development: { hash: "#/development", component: Development() },
    contact: { hash: "#/contact", component: Contact() },
};
