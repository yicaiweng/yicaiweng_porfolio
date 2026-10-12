

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  screenshot: string;
  githubURL: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  screenshot,
  githubURL,
}: ProjectCardProps) {
  const cardContent = (
    <>
      <div className="project-preview">
        <img width={300} height={260} src={screenshot} alt={`${title} screenshot`} />
      </div>
      <div className="project-content">
        <div className="project-topline">
          <h3>{title}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{description}</p>
        <div className="tag-row">
          {technologies.map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className = `project-card`;

  if (!githubURL) {
    return <article className={className}>{cardContent}</article>;
  }

  return (
    <a
      className={className}
      href={githubURL}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${title} on GitHub`}
    >
      {cardContent}
    </a>
  );
}
