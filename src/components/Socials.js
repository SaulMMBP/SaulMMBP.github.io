import SocialsService from "../services/SocialsService.js";

export default function Socials() {
    return `
    <div class="socials">
        ${SocialsService.reduce((a, social) => {
            a +=
                "<a href='" +
                social.url +
                "'><img src='" +
                social.icon +
                "' alt='" +
                social.name +
                "'/></a>";
            return a;
        }, "")}
    </div>
    `;
}
