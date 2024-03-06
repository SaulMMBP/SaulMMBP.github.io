import SocialsService from "../services/SocialsService.js";

export default function Socials() {
    return `
    <ul>
        ${SocialsService.reduce((a, social) => {
            a +=
                "<a href='" +
                social.url +
                "'><img class='socials' src='" +
                social.icon +
                "' alt='" +
                social.name +
                "'/></a>";
            return a;
        }, "")}
    </ul>
    `;
}
