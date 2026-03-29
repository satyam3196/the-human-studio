import { Link } from 'react-router-dom'
import './WhatWeOffer.css'

export default function WhatWeOffer() {
  return (
    <div className="offer-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>What We Offer</h1>
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
              {/* Lightbulb sketch */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 10 C28 10, 18 20, 18 32 C18 42, 28 48, 30 56 L50 56 C52 48, 62 42, 62 32 C62 20, 52 10, 40 10Z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M30 56 L30 62 Q40 68, 50 62 L50 56" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M34 66 Q40 70, 46 66" stroke="currentColor" strokeWidth="1"/>
                <path d="M40 32 L40 46" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <path d="M34 38 L46 38" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <path d="M36 10 L34 4" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
                <path d="M44 10 L46 4" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
                <path d="M14 32 L8 32" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
                <path d="M66 32 L72 32" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
              </svg>
            </div>
            <h2>Experiential Workshops</h2>
            <div className="divider"></div>
            <p>
              We run experiential workshops across London designed to help people understand concepts by experiencing them.
            </p>
            <p>Some workshops are:</p>
            <ul className="offer-list">
              <li>Playful and creative</li>
              <li>Psychoeducational and skills based</li>
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
              {/* Circle of people sketch */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="14" r="7" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="18" cy="36" r="7" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="62" cy="36" r="7" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="26" cy="60" r="7" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="54" cy="60" r="7" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M33 18 Q26 24, 22 30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
                <path d="M47 18 Q54 24, 58 30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
                <path d="M18 44 Q20 50, 24 54" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
                <path d="M62 44 Q60 50, 56 54" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
                <path d="M32 62 Q40 66, 48 62" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4"/>
              </svg>
            </div>
            <h2>Group Therapy</h2>
            <div className="divider"></div>
            <p>
              There is something uniquely powerful about healing in a community.
            </p>
            <p>
              Research consistently shows that for many concerns, group therapy can be just as effective, and sometimes even more impactful, than individual therapy. Shared experiences reduce isolation, deepen insight, and allow people to learn not only from a therapist, but from one another.
            </p>
            <p>Our groups are:</p>
            <ul className="offer-list">
              <li>Evidence informed</li>
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
              {/* Person with couch / listening sketch */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="34" cy="20" r="9" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M25 32 Q34 28, 43 32 L43 55 L25 55 Z" stroke="currentColor" strokeWidth="1.2"/>
                {/* Couch */}
                <path d="M10 60 L10 50 Q14 46, 18 50 L18 60" stroke="currentColor" strokeWidth="1"/>
                <path d="M50 60 L50 50 Q54 46, 58 50 L58 60" stroke="currentColor" strokeWidth="1"/>
                <path d="M10 60 L58 60" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M18 55 L50 55 L50 60 L18 60 Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
                {/* Listening waves */}
                <path d="M52 22 Q56 20, 56 24" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <path d="M56 18 Q62 20, 62 28 Q62 32, 56 34" stroke="currentColor" strokeWidth="0.8" opacity="0.3"/>
              </svg>
            </div>
            <h2>Individual Therapy</h2>
            <div className="divider"></div>
            <p>
              For those who prefer or need one to one support, we offer individual therapy tailored to your unique history, needs, and goals.
            </p>
            <p>Our approach is:</p>
            <ul className="offer-list">
              <li>Collaborative</li>
              <li>Compassionate</li>
              <li>Integrative</li>
              <li>Rooted in psychological theory and real world application</li>
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
              {/* Hands together / community sketch */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 50 Q20 35, 32 30 Q38 28, 40 32" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M60 50 Q60 35, 48 30 Q42 28, 40 32" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M40 32 L40 20" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="40" cy="16" r="4" stroke="currentColor" strokeWidth="1"/>
                <path d="M24 52 L56 52" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M28 56 L52 56" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                {/* Sparkles */}
                <path d="M16 22 L18 18 L20 22 L18 26 Z" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                <path d="M60 18 L62 14 L64 18 L62 22 Z" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
                <circle cx="50" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.6" opacity="0.3"/>
              </svg>
            </div>
            <h2>Community Meet & Greets</h2>
            <div className="divider"></div>
            <p>
              Connection is protective and community is powerful.
            </p>
            <p>
              We host welcoming meet ups and events designed to bring people together in a relaxed, informal way. Some of our gatherings are open to everyone, offering a chance to connect, share, and feel part of a supportive space.
            </p>
            <p>
              We also run events specifically tailored to certain groups, creating safer, more intentional spaces where people with shared experiences, identities, or life stages can connect more deeply.
            </p>
            <p>These events:</p>
            <ul className="offer-list">
              <li>Reduce isolation and stigma</li>
              <li>Encourage belonging</li>
              <li>Offer connection without the pressure of "being in therapy"</li>
              <li>Help people build meaningful networks beyond the therapy room</li>
            </ul>
            <p className="brand-accent-text">
              At The Human Studio, community isn't an add on, it's part of the healing.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Health Awareness */}
      <section className="section-alt">
        <div className="container">
          <div className="offer-card fade-in">
            <div className="offer-card-icon">
              {/* Heart with brain / awareness sketch */}
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 24 C36 16, 22 16, 22 28 C22 40, 40 54, 40 54 C40 54, 58 40, 58 28 C58 16, 44 16, 40 24Z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M34 30 Q40 26, 46 30" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <path d="M32 36 Q40 32, 48 36" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                <path d="M34 42 Q40 38, 46 42" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
                {/* Pulse line */}
                <path d="M10 60 L28 60 L32 52 L36 68 L40 56 L44 64 L48 60 L70 60" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
            <h2>Mental Health Awareness Initiatives</h2>
            <div className="divider"></div>
            <p>We actively promote conversations around mental health through:</p>
            <ul className="offer-list">
              <li>Pop up events</li>
              <li>Social media campaigns</li>
              <li>Community based collaborations</li>
              <li>Awareness focused activities</li>
            </ul>
            <p>
              Our goal is to make psychological conversations normal, accessible, and woven into everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge to Our Therapists */}
      <section className="section">
        <div className="container">
          <div className="offer-bridge fade-in">
            <p>
              While our community spaces and events are a great way to learn more about self, theories and psychological tools, sometimes you may need someone to talk to or get 1:1 support to understand or find a way through your difficulties. We also offer 1:1 therapy. Read a bit about us to see if we feel like the right support for you.
            </p>
            <Link to="/our-therapists" className="btn btn-filled">Meet Our Therapists</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
