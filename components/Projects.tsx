import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

const projectItems = [
  {
    title: "MERN stack e-commerce web application",
    description:
      "a simple online shopping application",
    technologies: ["React", "ExpressJS", "MongoDB"],
    screenshot: "https://user-images.githubusercontent.com/13059369/128052798-59041b9e-b0e6-4e73-8040-3237a4d0d0e7.png",
    githubURL: "https://github.com/yicaiweng/shopping_protal"
  },
  {
    title: "AI Developer Assistant",
    description:
      "full-stack internal management application that allow users to manage and view employee information through a web interface.",
    technologies: ["Angular  16", "TypeScript", "RxJS", "ASP.NET Core", "Entity Framework Core", "SQL Server", "RESTful APIs"],
    screenshot: "https://user-images.githubusercontent.com/13059369/236850401-19586449-c893-4134-b15a-163ac8a3177e.png",
    githubURL: "https://github.com/yicaiweng/EmployeeDashbaord"
  },
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-title-row">
        <SectionTitle number="03" title="Featured Projects" />
        <a
          className="text-link"
          href="https://github.com/yicaiweng"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub ↗
        </a>
      </div>

      <div className="projects-grid">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
            technologies={project.technologies}
            githubURL={project.githubURL}
          />
        ))}
      </div>
    </section>
  );
}
