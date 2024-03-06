import Socials from "./Socials.js";

export default function AboutMe() {
    return `
    <section>
        <h2>I'm Saul.</h2>
        <p>
            Hi, my name is Saul Malagon Martinez. Born in 1995, Mexico. I love
            science, code, arts and everything that imply create something.
        </p>
        <p>
            I focus in web dev, because... i don't know. I like Java, so it's mainly
            focus on backend development. But i love learn other languages (like
            python), architectures and techniques to code.
        </p>
        <p>And... I'm not good at english, but i try it.</p>
        ${Socials()}
    </section>
    `;
}
