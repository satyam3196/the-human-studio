import { Link } from 'react-router-dom'
import './Chelsea.css'

export default function Chelsea() {
  return (
    <div className="chelsea-page">
      <section className="page-hero">
        <div className="container">
          <h1>Chelsea</h1>
          <p className="page-hero-sub">Cognitive Behavioural Psychotherapist</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chelsea-coming-soon fade-in">
            <div className="coming-soon-icon">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 4"/>
                <path d="M40 70 Q60 90, 80 70" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="48" cy="52" r="3" fill="currentColor" opacity="0.4"/>
                <circle cx="72" cy="52" r="3" fill="currentColor" opacity="0.4"/>
              </svg>
            </div>
            <h2>Coming Soon</h2>
            <div className="divider"></div>
            <p>
              Chelsea's profile is on its way. Check back soon to learn more about her approach, background, and how she can support you.
            </p>
            <Link to="/our-therapists" className="btn">&larr; Back to Our Therapists</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
