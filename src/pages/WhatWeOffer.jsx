import { Link } from 'react-router-dom'
import './WhatWeOffer.css'

export default function WhatWeOffer() {
  return (
    <div className="offer-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>what we offer</h1>
          <p className="page-hero-sub">spaces where growth feels accessible, relational, and real</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="offer-intro fade-in">
            <p className="intro-lead">
              At The Human Studio, we create spaces where growth feels accessible, relational, and real. Our work blends psychological depth with lived experience, making mental health support both meaningful and approachable.
            </p>
          </div>
        </div>
      </section>

      {/* Experiential Workshops */}
      <section className="section-alt">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 32c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M26 32c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="32" cy="32" r="2" fill="currentColor"/>
                <path d="M32 34v12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2>experiential workshops</h2>
            <div className="divider"></div>
            <p>
              We run experiential workshops across London designed to help people understand concepts by experiencing them.
            </p>
            <p>Some workshops are:</p>
            <ul className="offer-list">
              <li>Playful and creative</li>
              <li>Psychoeducational and skills-based</li>
              <li>Reflective and emotionally deep</li>
            </ul>
            <p>
              We believe learning is most powerful when it is embodied, not just discussed. Our workshops are immersive, interactive, and thoughtfully facilitated.
            </p>
          </div>
        </div>
      </section>

      {/* Group Therapy */}
      <section className="section">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="24" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="42" cy="24" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 48c0-6.627 4.477-12 10-12s10 5.373 10 12" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M32 48c0-6.627 4.477-12 10-12s10 5.373 10 12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2>group therapy</h2>
            <div className="divider"></div>
            <p>
              There is something uniquely powerful about healing in a community.
            </p>
            <p>
              Research consistently shows that for many concerns, group therapy can be just as effective — and sometimes even more impactful — than individual therapy. Shared experiences reduce isolation, deepen insight, and allow people to learn not only from a therapist, but from one another.
            </p>
            <p>Our groups are:</p>
            <ul className="offer-list">
              <li>Evidence-informed</li>
              <li>Carefully facilitated</li>
              <li>Relational and experiential</li>
              <li>More financially accessible without compromising quality</li>
            </ul>
            <p>
              We create psychologically safe environments where people can explore, reflect, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Therapy */}
      <section className="section-alt">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M18 50c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2>individual therapy</h2>
            <div className="divider"></div>
            <p>
              For those who prefer or need one-to-one support, we offer individual therapy tailored to your unique history, needs, and goals.
            </p>
            <p>Our approach is:</p>
            <ul className="offer-list">
              <li>Collaborative</li>
              <li>Compassionate</li>
              <li>Integrative</li>
              <li>Rooted in psychological theory and real-world application</li>
            </ul>
            <p>
              Individual therapy offers a dedicated space to go deeper into personal patterns, relationships, identity, anxiety, low mood, life transitions, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Community Meet & Greets */}
      <section className="section">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 12L36 24H48L38 32L42 44L32 36L22 44L26 32L16 24H28L32 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2>community meet & greets</h2>
            <div className="divider"></div>
            <p>
              Connection is protective and community is powerful.
            </p>
            <p>
              We host welcoming meet-ups and events designed to bring people together in a relaxed, informal way. Some of our gatherings are open to everyone, offering a chance to connect, share, and feel part of a supportive space.
            </p>
            <p>
              We also run events specifically tailored to certain groups — creating safer, more intentional spaces where people with shared experiences, identities, or life stages can connect more deeply.
            </p>
            <p>These events:</p>
            <ul className="offer-list">
              <li>Reduce isolation and stigma</li>
              <li>Encourage belonging</li>
              <li>Offer connection without the pressure of "being in therapy"</li>
              <li>Help people build meaningful networks beyond the therapy room</li>
            </ul>
            <p className="brand-accent-text">
              At The Human Studio, community isn't an add-on — it's part of the healing.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Awareness */}
      <section className="section-alt">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 16C24 16 20 22 20 28C20 38 32 48 32 48C32 48 44 38 44 28C44 22 40 16 32 16Z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="32" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <h2>mental health awareness initiatives</h2>
            <div className="divider"></div>
            <p>We actively promote conversations around mental health through:</p>
            <ul className="offer-list">
              <li>Pop-up events</li>
              <li>Social media campaigns</li>
              <li>Community-based collaborations</li>
              <li>Awareness-focused activities</li>
            </ul>
            <p>
              Our goal is to make psychological conversations normal, accessible, and woven into everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge to Tanishka */}
      <section className="section">
        <div className="container">
          <div className="offer-bridge fade-in">
            <p>
              While our community spaces and events are a great way to learn more about self, theories and psychological tools, sometimes you may need someone to talk to or get 1:1 support to understand or find a way through your difficulties. We also offer 1:1 therapy. Read a bit about us to see if we feel like the right support for you.
            </p>
            <Link to="/tanishka" className="btn btn-filled">meet tanishka</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
