import SectionTitle from "@/components/SectionTitle";

const skills = [
  { title: "Front End", items: ["React", "Angular", "TypeScript", "JavaScript"] },
  { title: "Mobile", items: ["Swift", "SwiftUI", "React Native"] },
  { title: "Back End", items: ["C#", ".NET", "REST APIs", "SQL"] },
  { title: "Learning", items: ["Python", "RAG", "AI Apps"] },
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <SectionTitle number="04" title="Skills & Technologies" />

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
