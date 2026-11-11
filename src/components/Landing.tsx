import { MdArrowOutward } from "react-icons/md";
import "./styles/Landing.css";

const Landing = () => (
  <section className="landing-section" id="home" aria-labelledby="hero-title">
    <div className="hero-art" aria-hidden="true">
      <img className="hero-character" src="/images/sameimg.png" alt="" />
    </div>
    <div className="landing-container">
      <div className="landing-copy">
        <p className="eyebrow"><span className="status-dot" /> AI/ML ENGINEER <i /> GENAI <i /> FULL STACK DEVELOPER</p>
        <h1 id="hero-title">Rishi <span>Patel</span></h1>
        <p className="hero-role">AI/ML Engineer <i /> Generative AI Developer <i /> Full Stack Developer</p>
        <p className="hero-summary">
          B.Tech Electronics &amp; Computer Science Engineering student interested in building
          intelligent AI applications with RAG, Agentic AI, LLMOps, and modern backend technologies.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">View Projects <MdArrowOutward /></a>
          <a
            className="button button-muted"
            href="https://drive.google.com/file/d/15C7B56dJNx34oMPCcwRmZRDZiwb-yB6b/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            View CV <MdArrowOutward />
          </a>
          <a className="button button-quiet" href="#contact">Contact Me</a>
        </div>
        <p className="hero-location">Based in Vidyavihar, Mumbai, India</p>
      </div>
    </div>
    <a className="hero-scroll" href="#about"><span /> Scroll to explore</a>
  </section>
);

export default Landing;
