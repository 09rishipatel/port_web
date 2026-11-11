import { MdArrowOutward, MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => (
  <footer className="contact-section section-container" id="contact">
    <div className="contact-panel reveal">
      <div className="contact-intro">
        <p className="section-kicker">06 / CONTACT</p>
        <h2>Have a thoughtful<br /><span>problem to solve?</span></h2>
        <p>I&apos;m interested in AI/ML, Generative AI, and software development opportunities.</p>
        <a className="button button-primary" href="mailto:rishipatel092005@gmail.com">
          Get in touch <MdArrowOutward />
        </a>
      </div>
      <div className="contact-details">
        <a className="contact-detail" href="mailto:rishipatel092005@gmail.com">
          <MdEmail /><span><small>Email</small>rishipatel092005@gmail.com</span><MdArrowOutward className="contact-detail-arrow" />
        </a>
        <a className="contact-detail" href="tel:+918452819829">
          <MdPhone /><span><small>Phone</small>+91 8452819829</span><MdArrowOutward className="contact-detail-arrow" />
        </a>
        <div className="contact-detail">
          <MdLocationOn /><span><small>Location</small>Vidyavihar, Mumbai, India</span>
        </div>
        <a className="contact-detail" href="https://github.com/rishhii-09" target="_blank" rel="noreferrer">
          <span className="contact-initials">GH</span><span><small>GitHub</small>github.com/rishhii-09</span><MdArrowOutward className="contact-detail-arrow" />
        </a>
        <a className="contact-detail" href="https://www.linkedin.com/in/rishi-patel09/" target="_blank" rel="noreferrer">
          <span className="contact-initials">in</span><span><small>LinkedIn</small>linkedin.com/in/rishi-patel09</span><MdArrowOutward className="contact-detail-arrow" />
        </a>
      </div>
    </div>
    <div className="contact-footer">
      <a href="#home" className="footer-mark">RP<span>.</span></a>
      <p>Designed and built by Rishi Patel</p>
      <a href="mailto:rishipatel092005@gmail.com">Say hello <MdArrowOutward /></a>
    </div>
  </footer>
);

export default Contact;
