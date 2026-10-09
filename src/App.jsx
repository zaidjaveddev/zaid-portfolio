import { useState } from "react";

const projects = [
  {
    title: "Medical Dashboard",
    category: "Healthcare Web App",
    description:
      "A responsive medical dashboard with separate Doctor and Patient areas, authentication flow and role-based navigation.",
    tech: ["React", "React Router", "Ant Design"],
    symbol: "MD",
    status: "Completed",
  },
  {
    title: "Admin Dashboard",
    category: "Admin Management System",
    description:
      "A modern admin dashboard with login, signup, item management, user management and local data handling.",
    tech: ["React", "JavaScript", "Ant Design", "LocalStorage"],
    symbol: "AD",
    status: "Completed",
  },
  {
    title: "SmartDoc",
    category: "FYP Concept",
    description:
      "A planned smart legal documentation platform designed to simplify document-related workflows and management.",
    tech: ["React", "Node.js", "MongoDB"],
    symbol: "SD",
    status: "Planning",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      ["HTML5", "Semantic and accessible page structure"],
      ["CSS3", "Responsive layouts and modern UI"],
      ["JavaScript", "ES6+ logic and browser APIs"],
      ["React", "Components, hooks and reusable UI"],
      ["React Router", "Single-page navigation"],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Git & GitHub", "Version control and project workflow"],
      ["VS Code", "Development and code editing"],
      ["npm", "Package management and development tools"],
    ],
  },
  {
    title: "Currently Learning",
    items: [
      ["Advanced JavaScript", "Improving logic and modern JS concepts"],
      ["Node.js", "Learning backend fundamentals"],
      ["MongoDB", "Learning database fundamentals"],
    ],
  },
];

function App() {
  const [open, setOpen] = useState(false);

  const nav = ["home", "about", "skills", "projects", "contact"];

  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">
            ZJ<span>.</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          <div className={open ? "nav-links open" : "nav-links"}>
            {nav.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                {item}
              </a>
            ))}

            <a
              className="nav-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let's talk ↗
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero container">
          <div className="hero-content">
            <p className="eyebrow">
              <span></span>
              Available for internship opportunities
            </p>

            <h1>
              Hi, I'm <span>Zaid Javed.</span>
              <br />I build for the web.
            </h1>

            <p className="hero-text">
              BS Information Technology student and aspiring frontend developer
              focused on clean, responsive and user-friendly web applications.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View my work ↗
              </a>

              <a
                className="btn secondary"
                href="mailto:mrzaidlala143@gmail.com"
              >
                Contact me ✉
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/zaidjaveddev"
                target="_blank"
                rel="noreferrer"
              >
                ◈ GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/zaid-javed-50b81b2a0/"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>
            </div>
          </div>

          {/* HERO CODE CARD */}
          <div className="hero-card">
            <div className="card-glow"></div>

            <div className="code-window">
              <div className="window-bar">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <pre>{`const developer = {
  name: "Zaid Javed",
  role: "Frontend Developer",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ],
  goal: "Build & learn"
};`}</pre>
            </div>

            <div className="floating-card">
              <div className="floating-icon">⌘</div>

              <div>
                <strong>Responsive UI</strong>
                <small>Desktop · Tablet · Mobile</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section container">
          <div className="section-head">
            <p className="eyebrow">01 / About</p>

            <h2>
              Turning ideas into <span>web experiences.</span>
            </h2>
          </div>

          <div className="about-grid">
            <p>
              I'm currently in my 7th semester of BS Information Technology. I'm
              strengthening JavaScript and React by building practical projects.
            </p>

            <p>
              My goal is to grow into a professional web developer and secure a
              software-house internship where I can learn from an experienced
              team.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">02 / Skills</p>

              <h2>
                Tools I use to <span>build.</span>
              </h2>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3 className="skill-group-title">{group.title}</h3>

                  <div className="skills-grid">
                    {group.items.map(([name, desc]) => (
                      <article className="skill-card" key={name}>
                        <div className="skill-number">
                          {String(name.length).padStart(2, "0")}
                        </div>

                        <h3>{name}</h3>

                        <p>{desc}</p>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section container">
          <div className="section-head">
            <p className="eyebrow">03 / Projects</p>

            <h2>
              Things I've <span>built.</span>
            </h2>

            <p className="section-description">
              A selection of my practical web development projects and current
              development work.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">
                  <span>{project.symbol}</span>

                  <small>{project.status}</small>
                </div>

                <div className="project-body">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-footer">
                  <span>
                    {project.status === "Completed"
                      ? "Completed project"
                      : "Currently planning"}
                  </span>

                  <span className="project-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact container">
          <div>
            <p className="eyebrow">04 / Contact</p>

            <h2>
              Let's build something <span>useful.</span>
            </h2>

            <p>
              Open to internships, learning opportunities, collaborations and
              beginner-friendly web projects.
            </p>
          </div>

          <a className="btn primary" href="mailto:mrzaidlala143@gmail.com">
            Send me an email ✉
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer container">
        <p>© 2026 Zaid Javed. Built with React.</p>

        <a
          href="https://github.com/zaidjaveddev"
          target="_blank"
          rel="noreferrer"
        >
          ◈ GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
