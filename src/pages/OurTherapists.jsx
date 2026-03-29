import { Link } from 'react-router-dom'
import './OurTherapists.css'

export default function OurTherapists() {
  return (
    <div className="therapists-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Therapists</h1>
          <p className="page-hero-sub">the people behind the practice</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="therapists-intro fade-in">
            <p className="intro-lead">
              While our community spaces and events are a great way to learn more about self, theories and psychological tools, sometimes you may need someone to talk to in order to understand or find a way through your difficulties. <br />Read a bit about us to see if we feel like the right support for you.
            </p>
            <div className="divider"></div>
            {/* <p>
              Read a bit about us to see if we feel like the right support for you.
            </p> */}
          </div>
        </div>
      </section>

      {/* Therapist Profiles */}
      <section className="section-alt">
        <div className="container">
          <div className="therapist-grid fade-in">
            {/* Tanishka */}
            <Link to="/tanishka" className="therapist-card">
              <div className="therapist-photo">
                {/* Line-art illustration placeholder */}
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="therapist-illustration">
                  <ellipse cx="100" cy="70" rx="40" ry="45" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M60 130 C60 100, 140 100, 140 130 L140 200 C140 210, 60 210, 60 200 Z" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M75 155 C85 165, 115 165, 125 155" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="88" cy="62" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="112" cy="62" r="3" fill="currentColor" opacity="0.5"/>
                  <path d="M95 75 Q100 82, 105 75" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <span className="photo-label">photo coming soon</span>
              </div>
              <div className="therapist-info">
                <h3>Tanishka</h3>
                <p className="therapist-title">Integrative Psychotherapeutic Counsellor</p>
                <p className="therapist-cta-text">Read more &rarr;</p>
              </div>
            </Link>

            {/* Chelsea */}
            <Link to="/chelsea" className="therapist-card">
              <div className="therapist-photo">
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="therapist-illustration">
                  <ellipse cx="100" cy="70" rx="40" ry="45" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M60 130 C60 100, 140 100, 140 130 L140 200 C140 210, 60 210, 60 200 Z" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M75 155 C85 165, 115 165, 125 155" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="88" cy="62" r="3" fill="currentColor" opacity="0.5"/>
                  <circle cx="112" cy="62" r="3" fill="currentColor" opacity="0.5"/>
                  <path d="M95 75 Q100 82, 105 75" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <span className="photo-label">photo coming soon</span>
              </div>
              <div className="therapist-info">
                <h3>Chelsea</h3>
                <p className="therapist-title">Cognitive Behavioural Psychotherapist</p>
                <p className="therapist-cta-text">Coming soon</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
