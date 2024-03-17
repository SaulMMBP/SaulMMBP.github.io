import ProjectsService from "../services/ProjectsService.js";
import Project from "./Project.js";

export default function Development() {
    let projectsHtml = ProjectsService.reduce(
        (a, project) => (a += `<li>${Project(project)}</li>`),
        ""
    );

    return `
    <section class="development">
        <h2>Development</h2>
        <ul class="projects">
            ${projectsHtml}
        </ul>
    </section>
    `;
}
