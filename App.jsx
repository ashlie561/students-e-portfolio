import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, Menu, X, Download, ExternalLink, GraduationCap, BriefcaseBusiness, Sparkles, Send, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    number: '01',
    type: 'WEB DEVELOPMENT',
    title: 'Student Portal Concept',
    description: 'A student-friendly portal concept for viewing announcements, class information, schedules, and academic updates in one place.',
    tags: ['React', 'UI Design', 'Responsive'],
    color: 'from-violet-500/20 to-blue-500/10',
    icon: 'SP',
    link: '#contact',
  },
  {
    number: '02',
    type: 'DATABASE SYSTEM',
    title: 'Event Management Database',
    description: 'A database project concept for organizing event details, participants, schedules, and event-related records.',
    tags: ['MySQL', 'Database Design', 'CRUD'],
    color: 'from-cyan-500/20 to-emerald-500/10',
    icon: 'DB',
    link: '#contact',
  },
  {
    number: '03',
    type: 'NETWORKING',
    title: 'Small Office Network',
    description: 'A simulated network layout showing end devices, switches, a router, and a server with basic connectivity testing.',
    tags: ['Cisco Packet Tracer', 'Networking'],
    color: 'from-orange-500/20 to-pink-500/10',
    icon: 'NW',
    link: '#contact',
  },
]

const skills = [
  { name: 'HTML & CSS', level: 'Building responsive layouts' },
  { name: 'JavaScript', level: 'Learning interactive features' },
  { name: 'ReactJS', level: 'Components and state' },
  { name: 'Tailwind CSS', level: 'Utility-first styling' },
  { name: 'MySQL', level: 'Tables and queries' },
  { name: 'Networking', level: 'Basic network design' },
]

function SectionHeading({ eyebrow, title, description }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [showAllSkills, setShowAllSkills] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const submitForm = (event) => {
    event.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const navItems = [
    ['Home', '#home'], ['About', '#about'], ['Projects', '#projects'], ['Resume', '#resume'], ['Contact', '#contact'],
  ]

  return (
    <div className="app-shell">
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">A</span><span>MY<span className="brand-muted">PORTFOLIO</span></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot"/> STUDENT • ASPIRING WEB DEVELOPER</div>
            <h1>Hi, I'm <span className="gradient-text">Your Name.</span><br/>I build things for<br className="desktop-break"/> the <span className="serif-word">digital world.</span></h1>
            <p className="hero-description">I'm an IT student exploring web development, databases, and networking. I enjoy turning ideas into clean, useful, and user-friendly digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="#contact"><Mail size={17}/> Contact me</a>
            </div>
            <div className="hero-socials">
              <span>CONNECT WITH ME</span>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
              <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={17}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow"/>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="profile-card">
              <div className="profile-top"><span className="profile-label">PORTFOLIO / 2026</span><span className="profile-star"><Sparkles size={16}/></span></div>
              <div className="avatar-placeholder"><span>YN</span><div className="avatar-spark">✳</div></div>
              <p className="profile-name">Your Name</p>
              <p className="profile-role">Information Technology Student</p>
              <div className="profile-divider"/>
              <div className="profile-stats"><div><strong>03+</strong><span>PROJECTS</span></div><div><strong>06</strong><span>CORE SKILLS</span></div><div><strong>∞</strong><span>IDEAS</span></div></div>
              <div className="floating-chip chip-code"><Code2 size={16}/> ReactJS</div>
              <div className="floating-chip chip-design"><Sparkles size={15}/> Creative thinker</div>
            </div>
            <div className="visual-caption"><span className="caption-line"/> LEARNING. BUILDING. IMPROVING.</div>
          </div>
          <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section id="about" className="about-section section-wrap section-pad">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious by nature.<br/><span className="muted-title">Driven to create.</span></>} description="I'm building my foundation in technology one project at a time."/>
          <div className="about-grid">
            <div className="about-story">
              <p className="large-copy">I believe good technology should be <span className="highlight">useful, accessible, and easy to understand.</span></p>
              <p>As an Information Technology student, I'm learning how websites, databases, and computer networks work together. I like exploring new tools, solving problems, and improving my skills through hands-on activities.</p>
              <p>This portfolio is a collection of my learning journey, projects, and goals as I continue to grow in the tech field.</p>
              <a className="text-link" href="#contact">Let's connect <ArrowUpRight size={16}/></a>
            </div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-icon"><GraduationCap size={21}/></span><div><span className="fact-label">EDUCATION</span><h3>Information Technology</h3><p>Your School Name · Current Student</p></div></div>
              <div className="fact-card"><span className="fact-icon"><Code2 size={21}/></span><div><span className="fact-label">WHAT I'M LEARNING</span><h3>Web & App Development</h3><p>ReactJS, styling, databases, and more</p></div></div>
              <div className="fact-card"><span className="fact-icon"><Sparkles size={21}/></span><div><span className="fact-label">OUTSIDE THE CODE</span><h3>Curiosity & Creativity</h3><p>Exploring ideas and learning new skills</p></div></div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section section-wrap section-pad">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Skills I'm <span className="gradient-text">developing.</span></>} description="A growing set of tools and concepts I use in school and personal projects."/>
          <div className="skills-grid">
            {(showAllSkills ? skills : skills.slice(0, 4)).map((skill, i) => <div className="skill-card" key={skill.name}><div className="skill-number">0{i + 1}</div><div className="skill-info"><h3>{skill.name}</h3><p>{skill.level}</p></div><ArrowUpRight size={17} className="skill-arrow"/></div>)}
          </div>
          <button className="text-link skill-toggle" onClick={() => setShowAllSkills(!showAllSkills)}>{showAllSkills ? 'Show less' : 'View all skills'} <ArrowDown size={15} className={showAllSkills ? 'rotate-arrow' : ''}/></button>
        </section>

        <section id="projects" className="projects-section section-wrap section-pad">
          <div className="projects-heading"><SectionHeading eyebrow="SELECTED WORK" title={<>Things I've <span className="gradient-text">worked on.</span></>} description="A few school and practice projects that represent what I'm learning."/><a className="text-link desktop-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a></div>
          <div className="project-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className={`project-art bg-gradient-to-br ${project.color}`}><div className="project-art-grid"/><span className="project-monogram">{project.icon}</span><span className="project-number">{project.number}</span><span className="project-art-tag">{project.type}</span></div>
              <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><a href={project.link} aria-label={`Ask about ${project.title}`}><ArrowUpRight size={19}/></a></div><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </article>)}
          </div>
          <p className="project-note"><Sparkles size={15}/> These are editable sample entries. Replace them with your actual projects, screenshots, and links.</p>
        </section>

        <section id="resume" className="resume-section section-wrap section-pad">
          <SectionHeading eyebrow="MY JOURNEY SO FAR" title={<>Education & <span className="gradient-text">experience.</span></>} description="A simple overview of my academic background and current learning journey."/>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-date">CURRENT</div><div className="timeline-body"><span className="timeline-icon"><GraduationCap size={19}/></span><div><h3>Information Technology Student</h3><p className="timeline-place">Your School Name</p><p>Studying the fundamentals of programming, web development, database management, and computer networking.</p></div></div></div>
            <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-date">ONGOING</div><div className="timeline-body"><span className="timeline-icon"><BriefcaseBusiness size={19}/></span><div><h3>Academic & Personal Projects</h3><p className="timeline-place">Coursework and hands-on practice</p><p>Applying classroom lessons by designing interfaces, building small applications, and creating database and networking exercises.</p></div></div></div>
          </div>
          <div className="resume-download"><div><span className="fact-label">WANT TO KNOW MORE?</span><h3>Let's make something meaningful.</h3><p>Add your real CV file or link here when you're ready.</p></div><a className="button button-ghost" href="#contact"><Mail size={16}/> Request my CV</a></div>
        </section>

        <section id="contact" className="contact-section section-wrap section-pad">
          <div className="contact-panel"><div className="contact-copy"><p className="eyebrow">GET IN TOUCH</p><h2>Have an idea?<br/><span className="gradient-text">Let's talk.</span></h2><p>I'm open to learning opportunities, collaboration, and conversations about technology. Send a message using the form.</p><a className="contact-email" href="mailto:your.email@example.com"><Mail size={17}/> your.email@example.com <ArrowUpRight size={15}/></a><div className="contact-decoration">LET'S BUILD<br/>SOMETHING<br/><span>GOOD.</span></div></div>
            <form className="contact-form" onSubmit={submitForm}>
              {sent && <div className="success-message"><CheckCircle2 size={17}/> Demo submitted! Connect a form service to receive messages.</div>}
              <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Enter your name"/></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com"/></label>
              <label>Your message<textarea required rows="4" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell me a little about it..."/></label>
              <button className="button button-primary send-button" type="submit">Send message <Send size={16}/></button>
              <p className="form-note">This demo validates the form locally. It does not send email yet.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">A</span><span>MY<span className="brand-muted">PORTFOLIO</span></span></a><p>Designed & built with ReactJS and Tailwind CSS.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© 2026 Your Name</span></footer>
    </div>
  )
}