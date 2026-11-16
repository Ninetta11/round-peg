import { useState } from 'react'
import './App.css'

function Mark({ light = false, className = '' }) {
  return <span className={`mark ${light ? 'mark-light' : ''} ${className}`} aria-hidden="true"><svg viewBox="0 0 48 48" role="presentation"><path d="M5 5h38v38H5z" /><circle cx="24" cy="24" r="17" /></svg></span>
}

const services = [
  { no: '01', title: 'Websites &\neCommerce', tag: 'DIGITAL PRESENCE', text: 'A sharper first impression, a smoother path to purchase, and a website that feels like it was made for your business.', points: ['Brand-led websites', 'Online stores that make sense', 'Search-ready foundations'], tone: 'sage' },
  { no: '02', title: 'Small business\nautomation', tag: 'LESS BUSYWORK', text: 'Thoughtful systems that take repetitive tasks off your plate, connect the tools you already use, and give your time back.', points: ['Workflow mapping', 'Practical integrations', 'Automations that fit'], tone: 'clay' },
]

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Round Peg Solutions home"><Mark /><span>round peg<br /><b>solutions</b></span></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close −' : 'Menu +'}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
        <a href="#services">What we do</a><a href="#approach">How we work</a><a href="#about">About</a><a className="nav-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
      </nav>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow"><i /> GOOD TECH. NO BIG EGO.</p>
          <h1>Technology<br />that fits<br />your <em>business.</em></h1>
          <p className="hero-intro">Digital tools should fit the way you work. We make websites and systems that help small businesses move forward—with clarity, care, and a little more character.</p>
          <a className="button button-dark" href="#services">See what we do <Arrow /></a>
          <div className="hero-note"><span>INDEPENDENT BY DESIGN</span><span>BUILT AROUND YOUR BUSINESS</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract circle and square illustration">
          <div className="art-grid"></div><div className="art-frame"><div className="art-circle"></div><div className="art-notch"></div></div>
          <div className="art-stamp"><Mark light /><span>ROOM<br />TO FIT</span></div><span className="art-caption">A DIFFERENT SHAPE OF TECH PARTNER</span><span className="art-number">R/P — 01</span>
        </div>
      </section>
      <div className="ticker" aria-label="Round Peg Solutions: websites, eCommerce and small business automation"><div className="ticker-track" aria-hidden="true"><span className="ticker-content">WEBSITES <i>✳</i> ECOMMERCE <i>✳</i> SMALL BUSINESS AUTOMATION <i>✳</i> BUILT TO FIT <i>✳</i></span><span className="ticker-content">WEBSITES <i>✳</i> ECOMMERCE <i>✳</i> SMALL BUSINESS AUTOMATION <i>✳</i> BUILT TO FIT <i>✳</i></span></div></div>
      <section className="services section" id="services">
        <div className="section-heading"><div><p className="eyebrow">01 / WHAT WE DO</p><h2>Good work starts<br />with <em>the right fit.</em></h2></div><p className="section-lede">No off-the-shelf answers. Just useful digital work, shaped around the way your business actually runs.</p></div>
        <div className="service-grid">{services.map((s) => <article className={`service-card ${s.tone}`} key={s.no}><div className="card-top"><span>{s.no} / {s.tag}</span><span className="card-symbol">{s.no === '01' ? '↗' : '⌘'}</span></div><h3>{s.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{s.text}</p><ul>{s.points.map((point) => <li key={point}>{point}</li>)}</ul><a href="#contact" className="text-link">Explore this service <Arrow /></a></article>)}</div>
      </section>
      <section className="manifesto" id="approach"><div className="manifesto-mark"><Mark light /><span>RPS<br />EST. FOR WHAT’S NEXT</span></div><div className="manifesto-content"><p className="eyebrow">02 / HOW WE WORK</p><h2>Small enough<br />to <em>listen.</em><br />Technical enough<br />to <em>make it work.</em></h2><div className="manifesto-bottom"><p>We start with your real-world friction. Then we find the simplest, most considered way to make it better—without the jargon.</p><a href="#contact" className="button button-light">A little about our approach <Arrow /></a></div></div><span className="manifesto-index">( 02 — 04 )</span></section>
      <section className="process section"><p className="eyebrow">03 / THE PROCESS</p><div className="process-head"><h2>Clear steps.<br /><em>No mystery.</em></h2><p>Good outcomes don’t need complicated theatre. Here’s how we get from “there has to be a better way” to a solution you can use.</p></div><div className="steps"><article><span>01</span><h3>Get curious</h3><p>We listen, ask the right questions, and get to the root of what’s not working.</p></article><article><span>02</span><h3>Make a plan</h3><p>A clear scope, practical recommendations, and no surprises hiding in the fine print.</p></article><article><span>03</span><h3>Build & refine</h3><p>Thoughtful work, shared along the way, shaped by your feedback and priorities.</p></article><article><span>04</span><h3>Leave you ready</h3><p>A confident handover, with the knowledge and support to keep things moving.</p></article></div></section>
      <section className="work-section"><div className="work-copy"><p className="eyebrow">04 / SELECTED WORK</p><h2>Real people.<br /><em>Real problems.</em></h2><p>We’re building our portfolio one thoughtful project at a time. Every engagement starts with listening and ends with something useful in the world.</p><a href="#contact" className="text-link">Have a project in mind? <Arrow /></a></div><div className="work-card"><div className="work-art"><div className="work-sun"></div><div className="work-orbit"></div><span>RP—STUDY 01</span></div><div className="work-caption"><div><span className="eyebrow">INDEPENDENT PROJECT</span><h3>Mindtrek Psychology</h3></div><p>A digital home for a psychology practice.<br /><span>Website design & build</span></p></div></div></section>
      <section className="about section" id="about"><div className="about-aside"><Mark /><span>THE THINKING<br />BEHIND THE BUILD</span></div><div className="about-copy"><p className="eyebrow">05 / A NOTE FROM THE FOUNDER</p><h2>Technology should feel like a <em>fit.</em></h2><p>Round Peg Solutions exists for businesses that need thoughtful technical help without the theatre. We bring an engineering mindset, a collaborative approach, and respect for the people who have to live with what we build.</p><p>We’re here to make the complicated feel clearer—and to make technology earn its place in your day.</p><a className="text-link" href="#contact">Start a conversation <Arrow /></a></div></section>
      <section className="contact" id="contact"><div><p className="eyebrow">06 / YOUR MOVE</p><h2>Got a square peg<br />situation?</h2><p>Tell us what’s not fitting. We’ll help you figure out the next step.</p></div><div className="contact-action"><a href="mailto:hello@yourdomain.com" className="button button-light">hello@yourdomain.com <Arrow diagonal /></a><span>REPLACE WITH YOUR CONTACT EMAIL</span></div><Mark light className="contact-watermark" /></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><Mark light /><span>round peg<br /><b>solutions</b></span></a><span>WEB & SYSTEMS THAT FIT REAL LIFE.</span><span>© {new Date().getFullYear()} ROUND PEG SOLUTIONS</span><a href="#top" className="back-top">BACK TO TOP ↑</a></footer>
  </>
}

export default App
