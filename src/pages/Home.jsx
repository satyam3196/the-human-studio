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
            <Link to="/about" className="btn">discover more</Link>
            <Link to="/what-we-offer" className="btn btn-filled">what we offer</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="home-intro fade-in">
            <p className="intro-lead">
              The Human Studio is a space designed for psychological growth, connection, and shared human experience.
            </p>
            <div className="divider"></div>
            <p>
              We exist to make mental health support more experiential, more communal, and more accessible — particularly for young adults navigating identity, pressure, and transition.
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
            <h2>what we believe</h2>
            <div className="divider"></div>
            <p>
              At The Human Studio, we believe mental health support doesn't always have to happen in a traditional therapy room. Many people grow through learning with others, practicing new ways of relating, and experiencing psychological insights in real time.
            </p>
            <p>
              Our sessions combine psychological frameworks with structured activities, relational exercises, and group reflection. This creates a space where people can explore challenges, learn practical tools, and experience change alongside others.
            </p>
            <p>
              We are particularly interested in supporting young adults navigating identity, pressure, relationships, and major life transitions — though our spaces remain open to anyone seeking deeper understanding and connection.
            </p>
            <p className="brand-accent-text">
              Growth often happens when reflection meets relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Values Preview */}
      <section className="section">
        <div className="container">
          <div className="section-heading fade-in">
            <h2>our values</h2>
            <p>the principles that guide everything we do</p>
          </div>
          <div className="values-grid fade-in">
            <div className="value-card">
              <h3>curiosity</h3>
              <p>We encourage people to explore their thoughts, patterns, and relationships with openness rather than judgement.</p>
            </div>
            <div className="value-card">
              <h3>connection</h3>
              <p>We value creating environments where people feel less alone and can learn through genuine human connection.</p>
            </div>
            <div className="value-card">
              <h3>growth</h3>
              <p>We see personal development as an ongoing process rather than a fixed destination.</p>
            </div>
            <div className="value-card">
              <h3>humanity</h3>
              <p>Our spaces aim to be warm, real, and compassionate — where people can show up as they are.</p>
            </div>
            <div className="value-card">
              <h3>respect</h3>
              <p>Our spaces are grounded in mutual respect, where differences are welcomed and everyone is treated with dignity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-content fade-in">
            <h2>ready to explore?</h2>
            <p>Whether you're curious about our workshops, group programmes, or individual therapy — we'd love to welcome you.</p>
            <div className="hero-cta">
              <Link to="/what-we-offer" className="btn btn-filled">explore our offerings</Link>
              <Link to="/tanishka" className="btn">meet our therapist</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
