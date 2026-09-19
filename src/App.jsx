import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, LayoutDashboard, Smartphone, Sparkles } from "lucide-react";

const projects = [
  { title:"Medical Dashboard", description:"Responsive React dashboard with separate doctor and patient areas, routing and a clean medical interface.", tech:["React","React Router","Ant Design"], icon:LayoutDashboard },
  { title:"Admin Dashboard", description:"Admin interface with authentication flow, item management, user management and local data handling.", tech:["React","JavaScript","Ant Design","LocalStorage"], icon:Code2 },
  { title:"SmartDoc", description:"Planned smart legal documentation platform inspired by real-world documentation workflows.", tech:["React","Node.js","MongoDB"], icon:Sparkles }
];

const skills = [
  ["HTML5","Semantic and accessible page structure"],
  ["CSS3","Responsive layouts and modern UI"],
  ["JavaScript","ES6+, logic and browser APIs"],
  ["React","Components, hooks and reusable UI"],
  ["React Router","Single-page navigation"],
  ["Git & GitHub","Version control and workflow"]
];

function App() {
  const [open, setOpen] = useState(false);
  const nav = ["home","about","skills","projects","contact"];

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home">ZJ<span>.</span></a>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
          <div className={open ? "nav-links open" : "nav-links"}>
            {nav.map(item => <a key={item} href={"#" + item} onClick={() => setOpen(false)}>{item}</a>)}
            <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div>
            <p className="eyebrow"><span/> Available for internship opportunities</p>
            <h1>Hi, I'm <span>Zaid Javed.</span><br/>I build for the web.</h1>
            <p className="hero-text">BS Information Technology student and aspiring frontend developer focused on clean, responsive and user-friendly web applications.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View my work <ArrowUpRight/></a>
              <a className="btn secondary" href="mailto:mrzaidlala143@gmail.com">Contact me <Mail/></a>
            </div>
            <div className="socials">
              <a href="https://github.com/zaidjaveddev" target="_blank" rel="noreferrer"><Github/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-glow"/>
            <div className="code-window">
              <div className="window-bar"><i/><i/><i/></div>
              <pre>{`const developer = {
  name: "Zaid Javed",
  role: "Frontend Developer",
  stack: ["HTML","CSS","JavaScript","React"],
  goal: "Build & learn"
};`}</pre>
            </div>
            <div className="floating-card">
              <Smartphone/>
              <div><strong>Responsive UI</strong><small>Desktop · Tablet · Mobile</small></div>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <div className="section-head"><p className="eyebrow">01 / About</p><h2>Turning ideas into <span>web experiences.</span></h2></div>
          <div className="about-grid">
            <p>I'm currently in my 7th semester of BS Information Technology. I'm strengthening JavaScript and React by building practical projects.</p>
            <p>My goal is to grow into a professional web developer and secure a software-house internship where I can learn from an experienced team.</p>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-head"><p className="eyebrow">02 / Skills</p><h2>Tools I use to <span>build.</span></h2></div>
            <div className="skills-grid">
              {skills.map(([name,desc]) => <article className="skill-card" key={name}><h3>{name}</h3><p>{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="section-head"><p className="eyebrow">03 / Projects</p><h2>Things I've <span>built.</span></h2></div>
          <div className="projects-grid">
            {projects.map(({title,description,tech,icon:Icon}) => (
              <article className="project-card" key={title}>
                <div className="project-icon"><Icon/></div>
                <div className="project-body">
                  <h3>{title}</h3><p>{description}</p>
                  <div className="tags">{tech.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <a className="project-link" href="https://github.com/zaidjaveddev" target="_blank" rel="noreferrer"><ArrowUpRight/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact container">
          <div><p className="eyebrow">04 / Contact</p><h2>Let's build something <span>useful.</span></h2><p>Open to internships, learning opportunities, collaborations and beginner-friendly web projects.</p></div>
          <a className="btn primary" href="mailto:mrzaidlala143@gmail.com">Send me an email <Mail/></a>
        </section>
      </main>

      <footer className="footer container">
        <p>© 2026 Zaid Javed. Built with React.</p>
        <a href="https://github.com/zaidjaveddev" target="_blank" rel="noreferrer"><Github/> GitHub</a>
      </footer>
    </div>
  );
}

export default App;