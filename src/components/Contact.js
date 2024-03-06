import Socials from "./Socials.js";

export default function Contact() {
    return `
    <section>
        <h2>Contact</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="${
                process.env.KEY_00
            }">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <textarea name="message" rows="10" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <script src="https://web3forms.com/client/script.js" async defer></script>
        ${Socials()}
    </section>
    `;
}
