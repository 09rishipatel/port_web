import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    number: "01",
    title: "Adaptive RAG AI Assistant",
    repositoryUrl: "https://github.com/rishhii-09/Adaptive-Rag-Agentic-AI--Chatbot",
    summary: "An end-to-end RAG document question-answering system that routes questions to indexed documents, a general LLM, or web search. It combines hybrid retrieval, query rewriting, relevance grading, and GraphRAG for entity-based multi-hop reasoning.",
    features: [
      "Three-way query routing for indexed documents, general LLM queries, and Tavily web search.",
      "Hybrid search, query rewriting, and relevance grading.",
      "Neo4j GraphRAG for entity relationships and multi-hop reasoning.",
      "Built with FastAPI, Streamlit, Qdrant, and MongoDB.",
    ],
    stack: ["Python", "LangChain", "LangGraph", "FastAPI", "Qdrant", "MongoDB", "Streamlit", "Neo4j", "Groq"],
  },
  {
    number: "02",
    title: "NexusAI",
    repositoryUrl: "https://github.com/rishhii-09/Nexuss",
    subtitle: "Intelligent LLM Gateway & Observability Platform",
    summary: "An OpenAI-compatible LLM gateway that unifies access to multiple model providers, adds configurable routing and resilience, and provides usage and cost observability.",
    features: [
      "Integrated OpenAI, Anthropic, Gemini, and Groq through LiteLLM with unified APIs, model routing, tool calling, vision, and streaming.",
      "Retries, model fallbacks, API-key management, per-key rate limiting, and monthly USD budget enforcement.",
      "Usage and cost analytics with Prometheus metrics.",
      "Structured JSON logging, secret redaction, and request ID correlation.",
    ],
    stack: ["Python", "FastAPI", "LiteLLM", "SQLAlchemy", "SQLite", "PostgreSQL", "Prometheus"],
  },
  {
    number: "03",
    title: "Agentic Travel Orchestrator",
    repositoryUrl: "https://github.com/rishhii-09/Agentic-Travel-Orchestrator",
    summary: "A constraint-aware travel planner that creates multi-day itineraries using live travel data and reliable budget validation.",
    features: [
      "Built with LangGraph to generate multi-day itineraries using real-time place, weather, transportation, and cost information.",
      "Implemented deterministic Python budget validation and INR-first cost calculation, separating financial and business logic from LLM reasoning for reliable totals and constraint checking.",
      "Optimized agent execution with cached LangGraph instances, bounded tool and replanning cycles, lightweight API caching, timeouts, and fallback handling to reduce redundant requests and improve reliability.",
    ],
    stack: ["Python", "LangGraph", "LangChain", "FastAPI", "Groq", "React", "Node.js", "MongoDB", "Tavily", "Google Places", "OpenWeatherMap"],
  },
  {
    number: "04",
    title: "Bharat Biz Agent",
    repositoryUrl: "https://github.com/rishhii-09/Bharat-Biz-Agent",
    subtitle: "AI Telegram Bot",
    summary: "An AI invoice assistant for Indian MSMEs that accepts Hindi and English commands in Telegram, generates PDF invoices, and keeps invoice history.",
    features: [
      "Hindi and English natural-language command processing through NLP intent detection.",
      "Automatic PDF invoice generation through Telegram.",
      "Persistent SQLite invoice history and Docker-based deployment.",
    ],
    stack: ["Python", "FastAPI", "Telegram Bot API", "NLP", "SQLite", "ReportLab", "Docker"],
  },
];

const Work = () => (
  <section className="work-section section-container" id="work">
    <div className="section-heading reveal">
      <p className="section-kicker">04 / SELECTED WORK</p>
      <h2>Ideas, built into<br /><span>working systems.</span></h2>
    </div>
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card reveal" key={project.number}>
          <div className="project-content">
            <div className="project-title-row">
              <div>
                <p className="project-number-label">PROJECT {project.number}</p>
                <h3>{project.title}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
              </div>
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-features">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <div className="project-stack" aria-label="Technology stack">
              {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
            <div className="project-links">
              <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
                GitHub <MdArrowOutward aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Work;
