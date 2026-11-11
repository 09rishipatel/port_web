import { MdSchool, MdWorkOutline } from "react-icons/md";
import "./styles/Career.css";

const experience = [
  "Built a content opportunity ranking system in Python with Pandas, NumPy, and Scikit-learn on 30,000 anonymized observations.",
  "Developed a rule-based baseline using search volume, CTR, and average position; compared Logistic Regression, Decision Tree, and Random Forest models.",
  "Evaluated models using Precision@50 and client-level holdout validation with zero client overlap.",
  "Achieved 0.58 Precision@50 with Logistic Regression and Decision Tree compared with the 0.46 baseline.",
  "Conducted data leakage and validation audits, then translated model outputs into a human-reviewed content action playbook.",
];

const Career = () => (
  <section className="career-section section-container" id="experience">
    <div className="section-heading reveal">
      <p className="section-kicker">03 / EXPERIENCE & EDUCATION</p>
      <h2>Learning by<br /><span>building and doing.</span></h2>
    </div>
    <div className="career-list">
      <article className="career-card reveal">
        <div className="career-card-icon"><MdWorkOutline /></div>
        <div className="career-card-main">
          <div className="career-card-top">
            <div>
              <p className="career-type">INTERNSHIP · REMOTE</p>
              <h3>AI/ML Intern</h3>
              <p className="career-company">FlyRank</p>
            </div>
            <span className="career-date">July 2026</span>
          </div>
          <ul className="career-points">
            {experience.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </article>
      <article className="career-card education-card reveal" id="education">
        <div className="career-card-icon"><MdSchool /></div>
        <div className="career-card-main">
          <div className="career-card-top">
            <div>
              <p className="career-type">EDUCATION</p>
              <h3>Shah and Anchor Kutchhi Engineering College</h3>
              <p className="career-company">B.Tech in Electronics &amp; Computer Science Engineering</p>
            </div>
            <span className="career-date">2023–2027</span>
          </div>
          <p className="education-score">CGPA <strong>8.34</strong></p>
        </div>
      </article>
    </div>
  </section>
);

export default Career;
