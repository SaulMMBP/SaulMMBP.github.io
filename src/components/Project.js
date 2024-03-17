export default function Project(project) {
    return `
    <div class="project">
        <h3><a href="${project.url}">${project.name}</a></h3>
        <p class="description">${project.description}</p>
        <div class="techs">
            ${project.technologies.reduce((b, tech) => (b += tech + " "), "")}
        </div>
    </di>
    `;
}
