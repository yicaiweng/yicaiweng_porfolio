import SectionTitle from "@/components/SectionTitle";

const timelineItems = [
  {
    projectId: 1,
    period: "2026",
    title: "iOS Developer",
    subTitle: "Major U.S. Bank (Nov 2025 – Jun 2026)",
    description: [
      "Contributed to the redesign of a large-scale mobile banking application serving millions of customers.",
      "Developed features within the Pay & Transfer module, including payments, transfers, and payee management.",
      "Implemented production-quality UI and business logic using Swift while collaborating with designers and backend teams.",
      "Investigated and resolved feature defects, participated in code reviews, and supported production releases.",
      "Provided weekend on-call production support to diagnose and resolve customer-impacting issues.",
    ],
    tags: ["Swift", "SwiftUI", "MVVM Pattern", "Jenkin", "SauceLab", "Confluence"],
    active: true,
  },
  {
    projectId: 2,
    period: "2024-2025",
    title: "Full Stack Developer",
    subTitle: "Major Healthcare Provider (Apr 2024 – Oct 2025)",
    description: [
      "Developed and maintained enterprise billing applications using Angular, .NET Core, and SQL Server",
      "Migrated a large enterprise application from Angular 11 to Angular 17, upgrading project dependencies, resolving compatibility issues, and modernizing the application for long-term maintainability",
      "Built new features, fixed production issues, and collaborated closely with QA and business stakeholders"
    ],
    tags: ["Angular 11", "Angular 17", "Angular Material", "C#", "SQL", "Azure DevOps"],
    active: false,
  },
  {
    projectId: 3,
    period: "2023-2023",
    title: "Full Stack Developer",
    subTitle: "Major Healthcare Provider (May 2023 – Dec 2023)",
    description: [
      "Enhanced and maintained enterprise billing applications in an Agile environment.",
      "Developed front-end functionality while implementing backend services and SQL queries.",
      "Supported testing, defect resolution, and production deployments."
    ],
    tags: ["Angular 11", "Angular Material", "C#", "SQL", "Azure DevOps"],
    active: false,
  },
   {
    projectId: 4,
    period: "2019-2023",
    title: "Hybrid Mobile Developer",
    subTitle: "Major Electric Utility (Apr 2019 – May 2023)",
    description: [
      "Developed responsive and user friendly mobile features supporting residential, commercial, and municipal customers from scratch.",
      "Implemented outage reporting, service requests, property management, and account management functionality.",
      "Delivered features independently while collaborating within a distributed Agile team"
    ],
    tags: ["Ionic 1", "Ionic 6", "AngularJS", "Angular 14"],
    active: false,
  },
   {
    projectId: 5,
    period: "2018",
    title: "React Developer",
    subTitle: "Major Retail E-Commerce Client (Nov 2018 – Mar 2019)",
    description: [
      "Developed shopping cart, coupon, and online payment user interfaces using React.",
      "Integrated React reusable components with Adobe Experience Manager (AEM).",
    ],
    tags: ["React", "Adobe Experience Manager"],
    active: false,
  },
   {
    projectId: 6,
    period: "2018",
    title: "React Developer",
    subTitle: "Major Federal Client (Jul 2018 – Oct 2018)",
    description: [
      "Developed scheduling, calendar, and event management features for a workforce dashboard.",
      "Customized IBM WebSphere Portal themes and deployed portal applications",
    ],
    tags: ["React", "Redux", "IBM WebSphere Portal"],
    active: false,
  },
    {
    projectId: 7,
    period: "2017 - 2018",
    title: "Hybrid Mobile Developer",
    subTitle: "Major Federal Client (Mar 2017 – Jun 2018)",
    description: [
      "Developed and maintained features for a hybrid mobile application as part of a five-member Agile development team. ",
      "Implemented user interface enhancements and application functionality while collaborating with teammates throughout the development lifecycle. ",
      "Participated in feature development, testing, bug fixing, and code reviews to ensure application quality.",
      "Worked closely with QA and business stakeholders to deliver new functionality and production updates."
    ],
    tags: ["AngularJS", "Ionic 1", "IBM MobileFirst Platform"],
    active: false,
  },
];

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionTitle number="02" title="Assignments" />

      <div className="timeline">
        {timelineItems.map((item) => (
          <article
            className={`timeline-item ${item.active ? "active" : ""}`}
            key={item.projectId}
          >
            <div className="timeline-date">{item.period}</div>
            <div>
              <h3>{item.title}</h3>
              <h6 className="text-secondary">{item.subTitle}</h6>
              {Array.isArray(item.description) ? (
                <ul>
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}

              {item.tags.length > 0 ? (
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
