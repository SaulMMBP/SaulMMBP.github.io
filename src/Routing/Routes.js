import AboutMe from "../components/AboutMe.js";
import Development from "../components/Development.js";
import Contact from "../components/Contact.js";

export default {
    home: { path: "/", component: AboutMe() },
    aboutme: { path: "/aboutme", component: AboutMe() },
    development: { path: "/development", component: Development() },
    contact: { path: "/contact", component: Contact() },
};
