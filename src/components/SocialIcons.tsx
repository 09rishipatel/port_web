import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";

const SocialIcons = () => (
  <div className="icons-section">
    <div className="social-icons" aria-label="Social profiles">
      <span>
        <a href="https://github.com/rishhii-09" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <FaGithub />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/rishi-patel09/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <FaLinkedinIn />
        </a>
      </span>
    </div>
    <a
      className="resume-button"
      href="https://drive.google.com/file/d/15C7B56dJNx34oMPCcwRmZRDZiwb-yB6b/view?usp=drive_link"
      target="_blank"
      rel="noreferrer"
      aria-label="View CV"
    >
      View CV
    </a>
  </div>
);

export default SocialIcons;
