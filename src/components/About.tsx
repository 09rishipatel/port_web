import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import "./styles/About.css";

const About = () => (
  <section className="about-section section-container" id="about">
    <div className="section-heading reveal">
      <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
      <h2>Curious by nature.<br /><span>Engineer by practice.</span></h2>
    </div>
    <div className="about-content reveal">
      <p className="about-copy">
        I am a B.Tech student specializing in AI/ML, Generative AI, Agentic AI, full-stack AI
        applications, and backend development. I build intelligent applications using LLMOps,
        RAG pipelines, agentic architectures, and modern AI frameworks. My projects focus on
        practical AI solutions, scalable backend systems, multi-agent orchestration, and reliable
        application development.
      </p>
      <div className="about-facts">
        <div className="about-fact">
          <span className="fact-icon"><MdLocationOn /></span>
          <div><span className="fact-label">Location</span><strong>Vidyavihar, Mumbai, India</strong></div>
        </div>
        <a className="about-fact education-fact" href="#education">
          <span className="fact-icon">01</span>
          <div>
            <span className="fact-label">Currently studying</span>
            <strong>Electronics &amp; Computer Science Engineering</strong>
          </div>
          <MdArrowOutward className="fact-arrow" />
        </a>
      </div>
    </div>
  </section>
);

export default About;
