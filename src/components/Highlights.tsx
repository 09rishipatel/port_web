import "./styles/Highlights.css";

const certifications = [
  "Infosys Springboard — AI/ML, Python, Java, Software Engineering, Agile Development",
  "Oracle OCI AI Foundations Associate",
  "Cisco Networking Academy — Linux Essentials",
  "IIT Bombay Spoken Tutorial — Java, CSS",
  "Microsoft — AI & ML Concepts, AI in Azure, AI Agent, Power BI",
  "AWS — Cloud Essentials",
];

const Highlights = () => (
  <section className="highlights-section section-container" id="highlights">
    <div className="section-heading reveal">
      <p className="section-kicker">05 / RECOGNITION & LEARNING</p>
      <h2>Milestones and<br /><span>continued learning.</span></h2>
    </div>
    <div className="highlights-grid">
      <article className="highlight-card achievement-card reveal">
        <p className="highlight-label">ACHIEVEMENT <span>2026</span></p>
        <h3>National IDE Bootcamp</h3>
        <p className="highlight-issuer">AICTE · Ministry of Education</p>
        <p>
          Selected for an intensive entrepreneurship incubator to develop a technology product
          and pitch a startup framework to venture capitalists.
        </p>
      </article>
      <article className="highlight-card research-card reveal">
        <p className="highlight-label">RESEARCH PAPER <span>2025</span></p>
        <h3>SpecsCart</h3>
        <p className="research-title">AI Full-stack Ecosystem Structure Integrated with Modern AI Frameworks</p>
        <p>Presented at the National Conference on Data Science &amp; AI (DASDA), SAKEC 2025.</p>
      </article>
    </div>
    <div className="certification-panel reveal">
      <div className="certification-heading">
        <p className="highlight-label">CERTIFICATIONS</p>
        <h3>Learning across<br />the stack.</h3>
      </div>
      <ul className="certification-list">
        {certifications.map((certification) => (
          <li key={certification}><span aria-hidden="true">↗</span>{certification}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Highlights;
