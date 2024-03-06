export default function Contact() {
    return `
    <section>
        <h2>Contact</h2>
        <form>
            <input id="name" type="text" placeholder="Name" />
            <input id="email" type="email" placeholder="Email" />
            <textarea id="message" rows="10" placeholder="Message"></textarea>
        </form>
    </section>
    `;
}
