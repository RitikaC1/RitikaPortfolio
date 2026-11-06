import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown, Code2, GraduationCap, Sparkles, Menu, X } from 'lucide-react';
import './style.css';

// CUSTOMIZE: Update this object with your real details.
const profile = {
  name: 'Ritika Rohitkumar Chaube',
  shortName: 'Ritika Chaube',
  headline: 'Computer Science • Curious Mind • Creative Builder',
  intro: 'I am Ritika, a Computer Science enthusiast who enjoys learning, solving problems, and turning ideas into meaningful digital experiences.',
  about: 'I am passionate about exploring computer science and growing through hands-on projects. This space is where I share what I am learning, building, and working toward.',
  github: 'https://github.com/RitikaC1',
  linkedin: '', // Add your LinkedIn profile URL
  email: '', // Add your professional email
  resume: '', // Place resume.pdf in public/ and set this to '/resume.pdf'
  education: 'Computer Science',
  institution: 'Add your university or college',
  graduation: 'Add your graduation year',
};
// CUSTOMIZE: Replace these examples with technologies you actually use.
const skills = ['Programming Fundamentals', 'Problem Solving', 'Web Development', 'Data Structures', 'Git & GitHub', 'Computer Science'];
// CUSTOMIZE: Replace these starter cards with your real projects and their links.
const projects = [
  { number: '01', title: 'My First Project', type: 'FEATURED PROJECT', description: 'Add a short description of a project you built, the problem it solves, and what you learned.', tags: ['Add tech stack'], link: '' },
  { number: '02', title: 'Something I Built', type: 'PERSONAL PROJECT', description: 'Showcase another project here. Explain your contribution and link to its GitHub repository.', tags: ['Add tech stack'], link: '' },
  { number: '03', title: 'What I Am Exploring', type: 'WORK IN PROGRESS', description: 'Share an idea, experiment, or ongoing project you are excited to work on.', tags: ['In progress'], link: '' },
];
const nav = ['About', 'Skills', 'Projects', 'Education', 'Contact'];
function App() {
  const [open, setOpen] = React.useState(false);
  return <>
    <header className="header"><div className="container navwrap"><a className="logo" href="#home">RC<span>.</span></a><nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{nav.map(item => <a key={item} href={'#' + item.toLowerCase()} onClick={() => setOpen(false)}>{item}</a>)}</nav><a className="navcta" href="#contact">Let's connect <ArrowUpRight size={16}/></a><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button></div></header>
    <main>
      <section className="hero container" id="home"><div className="heroGlow"/><div className="heroContent"><div className="eyebrow"><span className="statusDot"/> WELCOME TO MY DIGITAL SPACE</div><p className="heroHello">Hello, I'm</p><h1>Ritika <span>Chaube.</span></h1><p className="heroRole">{profile.headline}</p><p className="heroIntro">{profile.intro}</p><div className="actions"><a className="primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="secondary" href="#contact">Get in touch <ArrowUpRight size={18}/></a></div><div className="socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={21}/></a>{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={21}/></a>}{profile.email && <a href={'mailto:' + profile.email} aria-label="Email"><Mail size={21}/></a>}<span className="socialLine"/><span>LET'S BUILD SOMETHING GREAT</span></div></div><div className="heroArt" aria-hidden="true"><div className="orbit orbit1"/><div className="orbit orbit2"/><div className="artCore"><span>&lt;/&gt;</span></div><span className="floatTag tag1">const curiosity = true;</span><span className="floatTag tag2">{`{ create: "impact" }`}</span><span className="star star1">✦</span><span className="star star2">✧</span></div><a href="#about" className="scrollHint">SCROLL TO EXPLORE <ArrowDown size={15}/></a></section>
      <section className="section alt" id="about"><div className="container"><div className="sectionLabel">01 / GET TO KNOW ME</div><div className="aboutGrid"><div><h2>More than just <span>code.</span></h2><div className="accentLine"/></div><div><p className="largeText">{profile.about}</p><p className="muted">I believe the best way to learn is by staying curious, experimenting often, and sharing the journey. I'm always looking for opportunities to collaborate, improve, and create.</p><a className="textLink" href={profile.github} target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={17}/></a></div></div></div></section>
      <section className="section" id="skills"><div className="container"><div className="sectionLabel">02 / MY TOOLKIT</div><h2>Skills & <span>interests.</span></h2><p className="sectionIntro">Areas I'm exploring and building knowledge in. I'll keep updating this as I grow.</p><div className="skillsGrid">{skills.map((skill,i)=><div className="skill" key={skill}><span className="skillNum">0{i+1}</span><Code2 size={22}/><span>{skill}</span><ArrowUpRight size={17} className="skillArrow"/></div>)}</div></div></section>
      <section className="section alt" id="projects"><div className="container"><div className="sectionLabel">03 / SELECTED WORK</div><div className="sectionHeading"><div><h2>Things I've <span>built.</span></h2><p className="sectionIntro">A home for projects, experiments, and ideas. Project details are placeholders until I add my work.</p></div><a className="textLink" href={profile.github} target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={17}/></a></div><div className="projectGrid">{projects.map(p=><article className="project" key={p.number}><div className="projectTop"><span>{p.number} / {p.type}</span><Sparkles size={20}/></div><div className="projectVisual"><Code2 size={46}/></div><h3>{p.title}</h3><p>{p.description}</p><div className="projectBottom"><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.link && <a href={p.link} target="_blank" rel="noreferrer" aria-label={'View ' + p.title}><ArrowUpRight/></a>}</div></article>)}</div></div></section>
      <section className="section" id="education"><div className="container"><div className="sectionLabel">04 / MY JOURNEY</div><h2>Education & <span>growth.</span></h2><div className="educationCard"><div className="eduIcon"><GraduationCap size={30}/></div><div><div className="smallCaps">ACADEMIC BACKGROUND</div><h3>{profile.education}</h3><p>{profile.institution}</p><p className="muted">{profile.graduation}</p></div><span className="eduStar">✳</span></div></div></section>
      <section className="section contactSection" id="contact"><div className="container contactInner"><div className="sectionLabel">05 / SAY HELLO</div><h2>Let's make something <span>amazing.</span></h2><p>Have a project idea, a question, or just want to connect? I'd love to hear from you.</p><div className="actions centered">{profile.email ? <a className="primary" href={'mailto:' + profile.email}>Send me an email <Mail size={18}/></a> : <a className="primary" href={profile.github} target="_blank" rel="noreferrer">Connect on GitHub <Github size={18}/></a>}<a className="secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={18}/></a>{profile.resume && <a className="secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={18}/></a>}</div></div></section>
    </main><footer><div className="container footerInner"><a className="logo" href="#home">RC<span>.</span></a><p>© {new Date().getFullYear()} {profile.shortName}. Crafted with curiosity.</p><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
