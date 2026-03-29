import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const sliderRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!hasAnimated.current && sliderRef.current) {
      hasAnimated.current = true
      sliderRef.current.classList.add('animate')
    }
  }, [])

  return (
    <div className="home-page">
      {/* Hero with Logo Animation */}
      <section className="hero">
        <div className="hero-content">
          <div className="slider-container" ref={sliderRef}>
            <img className="image-after" src={`${import.meta.env.BASE_URL}2.png`} alt="The Human Studio" />
            <div className="image-before">
              <img src={`${import.meta.env.BASE_URL}1.png`} alt="The Human Studio Sketch" />
            </div>
          </div>
          <p className="hero-tagline">a space where psychology meets community.</p>
          <div className="hero-cta">
            <Link to="/about" className="btn">Discover More</Link>
            <Link to="/what-we-offer" className="btn btn-filled">What We Offer</Link>
          </div>
        </div>
      </section>

      {/* Line Art Decorative Divider */}
      <div className="line-art-divider">
        <svg viewBox="0 0 800 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q200 0, 400 30 T800 30" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
          {/* Couch sketch */}
          <g transform="translate(340, 8)" opacity="0.4">
            <path d="M0 30 L10 30 L10 10 Q30 0, 50 10 L50 30 L60 30 L60 35 L0 35 Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
            <path d="M5 30 L5 20" stroke="currentColor" strokeWidth="0.8"/>
            <path d="M55 30 L55 20" stroke="currentColor" strokeWidth="0.8"/>
          </g>
        </svg>
      </div>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="home-intro fade-in">
            <p className="intro-lead">
              The Human Studio is a space designed for psychological growth, connection, and shared human experience.
            </p>
            <div className="divider"></div>
            <p>
              We exist to make mental health support more experiential, more communal, and more accessible, particularly for young adults navigating identity, pressure, and transition.
            </p>
            <p>
              We offer workshops and group programmes that bring psychological ideas to life. Our work focuses on helping people understand themselves, build healthier relationships, and navigate life transitions with greater clarity and support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="section-alt">
        <div className="container">
          <div className="home-believe fade-in">
            <h2>What We Believe</h2>
            <div className="divider"></div>
            <p>
              At The Human Studio, we believe mental health support doesn't always have to happen in a traditional therapy room. Many people grow through learning with others, practicing new ways of relating, and experiencing psychological insights in real time.
            </p>
            <p>
              Our sessions combine psychological frameworks with structured activities, relational exercises, and group reflection. This creates a space where people can explore challenges, learn practical tools, and experience change alongside others.
            </p>
            <p>
              We are particularly interested in supporting young adults navigating identity, pressure, relationships, and major life transitions, though our spaces remain open to anyone seeking deeper understanding and connection.
            </p>
            <p className="brand-accent-text">
              Growth often happens when reflection meets relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Values with Line Art Icons */}
      <section className="section">
        <div className="container">
          <div className="section-heading fade-in">
            <h2>Our Values</h2>
            <p>the principles that guide everything we do</p>
          </div>
          <div className="values-grid fade-in">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="30" r="16" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M40 14 L40 8" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M40 46 Q40 56, 32 62" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M40 46 Q40 56, 48 62" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M28 22 Q40 30, 52 22" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
                  <circle cx="35" cy="28" r="1.5" fill="currentColor" opacity="0.4"/>
                  <circle cx="45" cy="28" r="1.5" fill="currentColor" opacity="0.4"/>
                  <path d="M36 34 Q40 38, 44 34" stroke="currentColor" strokeWidth="0.8"/>
                </svg>
              </div>
              <h3>Curiosity</h3>
              <p>We encourage people to explore their thoughts, patterns, and relationships with openness rather than judgement.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="30" r="10" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="52" cy="30" r="10" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M28 40 Q28 58, 28 65" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M52 40 Q52 58, 52 65" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M32 50 Q40 44, 48 50" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                  <path d="M34 56 Q40 52, 46 56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2"/>
                </svg>
              </div>
              <h3>Connection</h3>
              <p>We value creating environments where people feel less alone and can learn through genuine human connection.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 60 Q25 40, 35 45 Q40 30, 48 35 Q52 20, 60 18" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M56 12 L60 18 L54 20" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <circle cx="22" cy="58" r="3" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  <circle cx="36" cy="44" r="2.5" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  <circle cx="49" cy="34" r="2" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  <path d="M15 65 L65 65" stroke="currentColor" strokeWidth="0.6" opacity="0.2"/>
                </svg>
              </div>
              <h3>Growth</h3>
              <p>We see personal development as an ongoing process rather than a fixed destination.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 20 C30 20, 20 28, 20 38 C20 52, 40 64, 40 64 C40 64, 60 52, 60 38 C60 28, 50 20, 40 20Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M40 28 C36 28, 30 32, 30 37 C30 44, 40 52, 40 52" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
                  <path d="M32 42 Q40 48, 48 42" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
                </svg>
              </div>
              <h3>Compassion</h3>
              <p>Our spaces aim to be warm, real, and compassionate, where people can show up as they are.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 55 L25 20 Q40 14, 55 20 L55 55 Q40 48, 25 55Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M30 26 L50 26" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                  <path d="M30 32 L50 32" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                  <path d="M30 38 L45 38" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                  <path d="M30 44 L48 44" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                  <circle cx="40" cy="62" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
                  <path d="M37 62 L40 65 L44 59" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
                </svg>
              </div>
              <h3>Respect</h3>
              <p>Our spaces are grounded in mutual respect, where differences are welcomed and everyone is treated with dignity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content fade-in">
            <h2>Ready To Explore?</h2>
            <p>Whether you're curious about our workshops, group programmes, or individual therapy, we'd love to welcome you.</p>
            <div className="hero-cta">
              <Link to="/what-we-offer" className="btn btn-filled">Explore Our Offerings</Link>
              <Link to="/our-therapists" className="btn">Meet Our Therapists</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
