import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  X
} from "lucide-react";
import {
  profile,
  education,
  projects,
  skillGroups,
  coursework,
  certifications,
  activities,
  exploring
} from "./data";
import "./styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [project, setProject] = useState(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 70) el.classList.add("show");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  const sendMessage = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(form.get("subject") || "Portfolio enquiry");
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">A</span>
            <span>Abarna Rajan</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "projects", "skills", "journey", "contact"].map((item) => (
              <a href={`#${item}`} key={item} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="icon-btn"
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-btn" aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="paper-scribble scribble-one">hello!</div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span></span> B.Tech IT · Chennai</p>
              <h1>
                   Hi, I’m <em>Abarna.</em>
</h1>
              <p className="hero-text">{profile.tagline}</p>

              <div className="hero-buttons">
                <a className="button primary" href="#projects">
                  See my work <ArrowDown size={17} />
                </a>
                <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">
                  <Download size={17} /> Resume
                </a>
              </div>

              <div className="mini-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="tape tape-left"></div>
              <div className="profile-card">
                <div className="profile-photo">
  <img
    src="/assets/profile.png"
    alt="Abarna Rajan"
  />
</div>
                <div className="profile-card-bottom">
                  <div>
                    <strong>Information Technology</strong>
                    <span>Student · Developer · Learner</span>
                  </div>
                
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading reveal">
            <p className="section-number">01</p>
            <div>
              <p className="eyebrow">A little about me</p>
              <h2>Not just code.<br /><em>Curiosity too.</em></h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I’m an Information Technology student at Madras Institute of Technology,
                Anna University. I enjoy learning by building projects rather than only
                reading about technology.
              </p>
              <p>
                My interests move between web development, mobile apps, computer networks
                and emerging technologies. I’m still learning, experimenting and figuring
                out what I want to build next — which is the part I enjoy most.
              </p>
              <div className="facts">
                <div><b>8.34</b><span>CGPA</span></div>
                <div><b>5+</b><span>Projects</span></div>
                <div><b>9+</b><span>Core subjects</span></div>
              </div>
            </div>

            <div className="exploring-card reveal">
              <div className="card-top"><Sparkles size={18} /><span>currently exploring</span></div>
              <div className="explore-list">
                {exploring.map((item, i) => (
                  <div key={item}><span>0{i + 1}</span>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading reveal">
            <p className="section-number">02</p>
            <div>
              <p className="eyebrow">Things I’ve built</p>
              <h2>Projects that made<br /><em>me learn.</em></h2>
            </div>
          </div>

          <div className="projects-list">
            {projects.map((item, index) => (
              <article className="project-row reveal" key={item.title} onClick={() => setProject(item)}>
                <div className="project-no">{item.number}</div>
                <div className="project-main">
                  <p className="project-type">{item.tools.slice(0, 3).join(" · ")}</p>
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                  <div className="tag-list">
                    {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                </div>
                <button className="round-arrow" aria-label={`View ${item.title}`}>
                  <ArrowUpRight size={21} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading reveal">
            <p className="section-number">03</p>
            <div>
              <p className="eyebrow">What I work with</p>
              <h2>Tools in my<br /><em>toolbox.</em></h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <div className="skill-box reveal" key={group.title}>
                <span className="skill-icon">
                  {i === 0 ? <Code2 size={19} /> : i === 1 ? <ExternalLink size={19} /> : i === 2 ? <BriefcaseBusiness size={19} /> : i === 3 ? <BookOpen size={19} /> : i === 4 ? <GraduationCap size={19} /> : <Sparkles size={19} />}
                </span>
                <h3>{group.title}</h3>
                <div className="skill-items">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="section journey-section">
          <div className="section-heading reveal">
            <p className="section-number">04</p>
            <div>
              <p className="eyebrow">My journey so far</p>
              <h2>Learning one<br /><em>step at a time.</em></h2>
            </div>
          </div>

          <div className="journey-grid">
            <div className="education">
              <h3 className="subhead">Education</h3>
              <div className="timeline">
                {education.map((item) => (
                  <div className="timeline-item reveal" key={item.title}>
                    <span className="dot"></span>
                    <p className="period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.place}</p>
                    {item.result && <strong>{item.result}</strong>}
                  </div>
                ))}
              </div>
            </div>

            <div className="coursework">
              <h3 className="subhead">Coursework</h3>
              <div className="course-list">
                {coursework.map((item) => (
                  <div key={item}><Check size={16} /> {item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section extras-section">
          <div className="extras-grid">
            <div className="extra-block reveal">
              <p className="eyebrow">Workshops & certifications</p>
              <h2>Things I’ve <em>picked up.</em></h2>
              <div className="cert-list">
                {certifications.map((item) => (
                  <div className="cert-item" key={item.title}>
                    <span className="cert-check">✓</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.org}{item.note ? ` · ${item.note}` : ""}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="extra-block activities reveal">
              <p className="eyebrow">Beyond academics</p>
              <h2>People, clubs & <em>community.</em></h2>
              {activities.map((item) => (
                <div className="activity" key={item.title}>
                  <Heart size={17} />
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.org}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <div className="contact-copy reveal">
              <p className="eyebrow">05 · Say hello</p>
              <h2>Have an idea?<br /><em>Let’s talk.</em></h2>
              <p>
                Whether it’s a project, internship opportunity, collaboration,
                or just a conversation about tech — my inbox is open.
              </p>
              <div className="contact-details">
                <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
                <a href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
                <span><span className="location-dot"></span> {profile.location}</span>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={sendMessage}>
              <label>
                Name
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                Subject
                <input name="subject" placeholder="What would you like to talk about?" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Write a message..." required></textarea>
              </label>
              <button className="button primary submit" type="submit">
                <Send size={17} /> Open email
              </button>
              {sent && <p className="form-note">Your email app should open with the message ready to send.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <a className="brand" href="#home"><span className="brand-mark">A</span><span>Abarna</span></a>
          <p>Built with curiosity, coffee & a lot of debugging.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
        </div>
        <span className="copyright">© 2026 Abarna Rajan</span>
      </footer>

      {project && (
        <div className="modal-backdrop" onClick={() => setProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setProject(null)}><X /></button>
            <p className="project-type">PROJECT {project.number}</p>
            <h2>{project.title}</h2>
            <h3>{project.subtitle}</h3>
            <p className="modal-description">{project.description}</p>
            <div className="tag-list large">
              {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <a className="button primary" href={project.github} target="_blank" rel="noreferrer">
              <Github size={17} /> View GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);