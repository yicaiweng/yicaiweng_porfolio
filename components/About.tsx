import SectionTitle from "@/components/SectionTitle";

const focusAreas = [
  { label: "Focus", value: "Front-End" },
  { label: "Focus", value: "Mobile" },
  { label: "Experience", value: "Full-Stack" },
  { label: "Growing Into", value: "AI" },
];

export default function About() {
  return (
    <section className="section container" id="about">
      <SectionTitle number="01" title="About Me" />

      <div className="about-grid">
        <div className="body-copy">
          <p>
            I&apos;m a software developer with a strong background in front-end and
            mobile application development. I enjoy turning complex requirements
            into clear, reliable experiences that feel intuitive to use.
          </p>
          <p>
            My experience spans web, mobile, and full-stack solutions across the banking, healthcare, energy, retail, and public sectors.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((item) => (
            <div className="focus-card" key={`${item.label}-${item.value}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
