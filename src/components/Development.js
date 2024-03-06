import ProjectsService from "../services/ProjectsService.js";

export default function Development() {
    let projectsHtml = ProjectsService.reduce((a, project) => {
        a += `
        <li>
            <a href="${project.url}">
                <h3>${project.name}</h3>
            </a>
            <p class="description">${project.description}</p>
            <div class="techs">
                ${project.technologies.reduce(
                    (b, tech) => (b += tech + " "),
                    ""
                )}
            </div>
        </li>
        `;
        return a;
    }, "");

    return `
    <section class="development">
        <h2>Development</h2>
        <ul>
            ${projectsHtml}
        </ul>
    </section>
    `;
}
