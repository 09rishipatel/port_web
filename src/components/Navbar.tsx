import "./styles/Navbar.css";

const Navbar = () => (
  <header className="header">
    <a className="navbar-title" href="#home" aria-label="Rishi Patel, home">
      RP<span>.</span>
    </a>
    <nav aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#work">Projects</a></li>
        <li><a href="#highlights">Highlights</a></li>
      </ul>
    </nav>
    <a className="navbar-connect" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
  </header>
);

export default Navbar;
