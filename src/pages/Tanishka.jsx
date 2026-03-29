import { Link } from 'react-router-dom'
import './Tanishka.css'

export default function Tanishka() {
  return (
    <div className="tanishka-page">
      {/* Hero — clean, no name on top */}
      <section className="page-hero">
        <div className="container">
          <h1>Meet Your Therapist</h1>
          <p className="page-hero-sub">therapy, online and in person</p>
        </div>
      </section>

      {/* Photo & Name Side by Side */}
      <section className="section">
        <div className="container">
          <div className="tanishka-hero-grid fade-in">
            <div className="tanishka-photo-column">
              <div className="tanishka-main-photo">
                <img
                  src="./tanishka.jpg"
                  alt="Tanishka"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                />
              </div>
            </div>
            <div className="tanishka-name-column">
              <h2 className="tanishka-name">Tanishka</h2>
              <p className="tanishka-role">Integrative Psychotherapeutic Counsellor</p>
              <div className="divider" style={{ margin: '20px 0 24px' }}></div>
              <p>
                I am an integrative psychotherapeutic counsellor offering therapy to adults who would like space to reflect, understand themselves more fully, and make changes that feel sustainable.
              </p>
              <p>
                People come to therapy for many different reasons. Some are experiencing anxiety or low mood. Others feel stuck in patterns they can see but struggle to shift. Some simply recognise that they have spent a long time focusing on others and would like time to focus on themselves.
              </p>
              <p>
                Whatever brings you, I aim to offer a thoughtful, steady and collaborative space. We work at a pace that feels manageable, allowing time to explore both current difficulties and the patterns that may sit beneath them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Can Help With */}
      <section className="section-alt">
        <div className="container">
          <div className="tanishka-block fade-in">
            <h2>What I Can Help With</h2>
            <div className="divider"></div>
            <p>I work with adults who may be experiencing:</p>
            <ul className="tanishka-list">
              <li>Anxiety, persistent worry or overthinking</li>
              <li>Low mood or emotional exhaustion</li>
              <li>Feeling stuck, overwhelmed, or disconnected from themselves</li>
              <li>Self criticism and perfectionism</li>
              <li>Guilt around rest, boundaries, or prioritising their own needs</li>
              <li>Life transitions, change, or ongoing stress</li>
              <li>Difficulties managing or understanding emotions</li>
              <li>Relational difficulties</li>
              <li>Navigating cultural transitions, migration, or bicultural complexity</li>
            </ul>

            <p style={{ marginTop: '30px' }}>I also have particular experience supporting:</p>
            <ul className="tanishka-list">
              <li>Neurodivergent adults, including those exploring identity and self understanding</li>
              <li>Parents and carers of young people with mental health needs or neurodivergence</li>
            </ul>
            {/* <p>
              I also work with individuals navigating cultural transitions, migration, or the complexities of living between cultures.
            </p> */}
          </div>
        </div>
      </section>

      {/* When I May Not Be the Right Fit */}
      <section className="section">
        <div className="container">
          <div className="tanishka-block fade-in">
            <h2>When I May Not Be The Right Fit</h2>
            <div className="divider"></div>
            <p>
              As a private practitioner, I am not able to offer crisis support or work with significant current risk. If you are experiencing active suicidal thoughts, require urgent support, or are struggling with severe substance dependence, more specialist or intensive services may be more appropriate. I am happy to discuss this with you and help you consider the right next steps.
            </p>
          </div>
        </div>
      </section>

      {/* My Background & Qualifications */}
      <section className="section-alt">
        <div className="container">
          <div className="tanishka-block fade-in">
            <h2>My Background</h2>
            <div className="divider"></div>
            <p>
              I am an integrative psychotherapeutic counsellor with over five years of mental health experience, with 2 years of experience working in CAMHS (NHS). Alongside private practice, I am currently training as a Cognitive Behavioural Psychotherapist within CAMHS.
            </p>
            <p>I am a registered member of the British Association for Counselling and Psychotherapy (BACP).</p>

            <div className="qualifications-grid">
              <div className="qual-card">
                <div className="qual-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h4>BSc Neuroscience and Psychology</h4>
                <p>University of Manchester</p>
              </div>
              <div className="qual-card">
                <div className="qual-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h4>MSc Applied Clinical Psychology</h4>
                <p>University of Bath</p>
              </div>
              <div className="qual-card">
                <div className="qual-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                  </svg>
                </div>
                <h4>Diploma in Psychotherapeutic Counselling</h4>
                <p>Northern Guild</p>
              </div>
              <div className="qual-card">
                <div className="qual-icon">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4 L28 16 H40 L30 24 L34 36 L24 28 L14 36 L18 24 L8 16 H20 Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="24" cy="40" r="4" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
                  </svg>
                </div>
                <h4>PGDip CBT for Children and Young People</h4>
                <p>King's College London <span className="ongoing-badge">ongoing</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="section">
        <div className="container">
          <div className="tanishka-block fade-in">
            <h2>About Me</h2>
            <div className="divider"></div>
            <p>
              I am a cis woman and use she/her pronouns. I value collaboration, psychological safety and developing a strong therapeutic relationship in my work. I see therapy as a space built together, one where trust, respect and openness are central.
            </p>
            <p>
              As a first generation immigrant of Indian origin, I am aware of how culture, migration and family expectations can shape identity, responsibility and emotional expression. Having lived and worked across both British and Indian cultural contexts, I hold an understanding of some of the tensions that can arise between different value systems, including those often described as "East and West." I aim to approach these experiences with sensitivity and curiosity rather than assumption.
            </p>
            <p>
              What drew me to this profession was a genuine interest in people's inner worlds and a wish to support others through difficult periods of change. My own experience of accessing mental health support during life transitions has also deepened my appreciation for how meaningful a thoughtful and containing therapeutic space can be.
            </p>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="section-alt">
        <div className="container">
          <div className="tanishka-block fade-in">
            <h2>How I Work</h2>
            <div className="divider"></div>
            <p>
              My approach is integrative and relational, meaning the therapeutic relationship is central.
            </p>
            <p>I draw from:</p>
            <ul className="tanishka-list">
              <li><strong>Transactional Analysis</strong> exploring relational patterns and internal roles</li>
              <li><strong>CBT</strong> working with anxiety, self criticism and unhelpful cycles</li>
              <li><strong>Attachment informed approaches</strong> understanding how early experiences shape how we relate now</li>
            </ul>
            <p>
              Rather than following a rigid structure, I adapt therapy to you. We work collaboratively, with curiosity and compassion guiding the process.
            </p>
            <p>
              You remain the expert in your own life. My role is to help you notice patterns, build self understanding, and make changes that feel sustainable and not forced.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section">
        <div className="container">
          <div className="tanishka-block tanishka-cta fade-in">
            <h2>Getting Started</h2>
            <div className="divider"></div>
            <p>
              Beginning therapy can feel like a big step. It's completely okay to feel unsure. I offer a free 20 minute online consultation so we can briefly talk through what you're looking for and whether working together feels right.
            </p>
            <p>
              Sessions are available online and in person.
            </p>
            <div className="session-info">
              <div className="info-item">
                <span className="info-label">Fee</span>
                <span className="info-value">&pound;70 per 50 minute session</span>
              </div>
              <div className="info-item">
                <span className="info-label">Concessions</span>
                <span className="info-value">Available</span>
              </div>
              <div className="info-item">
                <span className="info-label">Format</span>
                <span className="info-value">Online & In Person</span>
              </div>
            </div>
            <p className="cta-text">
              Please leave your interest below and I will get in touch.
            </p>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">A little about what you're looking for</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-filled">Get In Touch</button>
            </form>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="section-alt" style={{ padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/our-therapists" className="btn">&larr; Back to Our Therapists</Link>
        </div>
      </section>
    </div>
  )
}
