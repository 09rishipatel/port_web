import "./styles/WhatIDo.css";

const skillGroups = [
  {
    name: "Programming Languages",
    number: "01",
    skills: ["Python", "C++", "SQL"],
  },
  {
    name: "AI / ML & GenAI",
    number: "02",
    skills: [
      "LangChain", "LangGraph", "LLMs", "RAG", "Agentic AI", "Generative AI",
      "Prompt Engineering", "NLP", "Scikit-learn", "NumPy", "Pandas", "OpenCV",
    ],
  },
  {
    name: "Backend Development",
    number: "03",
    skills: ["FastAPI", "Django", "REST APIs"],
  },
  {
    name: "Frontend Development",
    number: "04",
    skills: ["React.js", "HTML", "CSS", "TypeScript", "Streamlit"],
  },
  {
    name: "Databases & Vector Search",
    number: "05",
    skills: ["MongoDB", "MySQL", "SQLite", "Qdrant", "Neo4j"],
  },
  {
    name: "Cloud, DevOps & Tools",
    number: "06",
    skills: ["Git", "Docker", "Ollama", "Render", "Vercel", "n8n"],
  },
];

const WhatIDo = () => (
  <section className="skills-section section-container" id="skills">
    <div className="section-heading reveal">
      <p className="section-kicker">02 / TECHNICAL SKILLS</p>
      <h2>Technologies I use to build<br /><span>intelligent applications.</span></h2>
    </div>
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-card reveal" key={group.name}>
          <div className="skill-card-heading">
            <span>{group.number}</span>
            <h3>{group.name}</h3>
          </div>
          <div className="skill-tags">
            {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default WhatIDo;
