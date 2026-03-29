import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>about us</h1>
          <p className="page-hero-sub">understanding who we are and why we do this work</p>
        </div>
      </section>

      {/* Why We Created */}
      <section className="section">
        <div className="container">
          <div className="about-block fade-in">
            <h2>why we created the human studio</h2>
            <div className="divider"></div>
            <p>
              The Human Studio was created in response to something we kept noticing.
            </p>
            <p>
              Many people, particularly young adults, are trying hard to understand themselves. They read about psychology, listen to mental health podcasts, and follow therapists online. There is more psychological awareness than ever before.
            </p>
            <p>
              And yet, many still feel stuck, isolated, or overwhelmed.
            </p>
            <p>
              We live in a time where we are constantly connected to others through social media, but genuine spaces for reflection and meaningful conversation are becoming harder to find. People are often left trying to make sense of their experiences on their own.
            </p>
            <p>
              Individual therapy can be incredibly valuable, but it is also expensive and not always accessible. At the same time, many community spaces lack the psychological depth needed to truly explore what people may be going through.
            </p>
            <p className="about-highlight">
              We began to notice a gap between clinical therapy and everyday life.
            </p>
            <p>
              The Human Studio was created to sit in that space.
            </p>
            <p>
              Through workshops and group programmes, we create structured spaces where people can explore psychological ideas together. These experiences help people understand what they may be feeling, recognise patterns in their lives, and often realise that others are navigating similar struggles.
            </p>
            <p>
              At its heart, The Human Studio is about bringing psychological thinking into shared human experience, creating spaces where people can learn about themselves not only through reflection, but also through connection with others.
            </p>
          </div>
        </div>
      </section>

      {/* A Different Approach */}
      <section className="section-alt">
        <div className="container">
          <div className="about-block fade-in">
            <h2>a different approach to mental health</h2>
            <div className="divider"></div>
            <p>
              At The Human Studio, group work is not an addition to therapy, it is central to how we think about psychological growth.
            </p>
            <p>
              Many of our struggles emerge in relationship with others, and often they can also be understood and transformed in relationship with others. Groups create a powerful environment where people can hear different perspectives, recognise shared experiences, and experiment with new ways of relating in a supportive setting.
            </p>
            <p>
              They also make psychological support more financially accessible, allowing more people to engage with structured, clinically informed work without the cost of long-term individual therapy.
            </p>
            <p>
              Our approach blends psychological depth with real-world accessibility. We draw on ideas from approaches such as attachment theory, cognitive behavioural therapy, relational psychology, and experiential learning. Rather than teaching these ideas only through conversation, we bring them to life through structured experiences.
            </p>
            <p>
              This means our spaces often include workshops, interactive psychological models, relational exercises, guided reflections, and open conversations about mental health.
            </p>
            <p className="about-highlight">
              Because understanding something intellectually is only the beginning. Real change often happens when insight is experienced, practised, and shared with others.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <div className="section-heading fade-in">
            <h2>our values</h2>
          </div>
          <div className="values-full-grid fade-in">
            <div className="value-full-card">
              <h3>curiosity</h3>
              <p>We believe growth begins with curiosity. We encourage people to explore their thoughts, patterns, and relationships with openness rather than judgement.</p>
            </div>
            <div className="value-full-card">
              <h3>respect</h3>
              <p>Every person carries a unique story shaped by culture, experiences, and identity. Our spaces are grounded in mutual respect, where differences are welcomed and everyone is treated with dignity.</p>
            </div>
            <div className="value-full-card">
              <h3>connection</h3>
              <p>Many of our struggles and our healing happen in relationship with others. We value creating environments where people feel less alone and can learn through genuine human connection.</p>
            </div>
            <div className="value-full-card">
              <h3>growth</h3>
              <p>We see personal development as an ongoing process rather than a fixed destination. Our work supports people in reflecting, experimenting with change, and developing new ways of understanding themselves and their lives.</p>
            </div>
            <div className="value-full-card">
              <h3>humanity</h3>
              <p>Above all, we believe in meeting people as human beings, not as problems to be solved. Our spaces aim to be warm, real, and compassionate, where people can show up as they are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-alt">
        <div className="container">
          <div className="about-block fade-in">
            <h2>our story</h2>
            <div className="divider"></div>
            <p>
              The Human Studio was founded by two therapists who also belong to the generation we hope to support.
            </p>
            <p>
              Like many people in their late teens, twenties and thirties, we have experienced the complexity of navigating identity, expectations, and life transitions while trying to build meaningful and fulfilling lives. Having grown up across cultures and with the experience of being immigrants in the UK, we also understand how questions of belonging, difference, and cultural expectations can quietly shape how people see themselves and relate to others.
            </p>
            <p>
              Early adulthood can be an exciting but challenging period. Between the ages of 18 and 35, many people are navigating friendships, dating, careers, independence, family expectations, and major life decisions. It can also be a time where people feel uncertain, misunderstood, or alone in their experiences.
            </p>
            <p>
              At the same time, we noticed that many people are curious about psychology and personal growth, but often lack spaces where they can explore these ideas in a structured and supportive way with others. The Human Studio was created to offer a place where people can explore psychological ideas not only through conversation, but through shared experiences, reflection, and connection with others.
            </p>
            <p>
              Our intention is to create an environment grounded in curiosity, openness, and mutual respect, where people from different cultures, identities, and life experiences can feel welcomed and understood, and where people are not reduced to problems or symptoms but seen as whole and evolving human beings.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section">
        <div className="container">
          <div className="about-block fade-in">
            <h2>our vision</h2>
            <div className="divider"></div>
            <p>
              Our vision is to create more than a therapy service. We hope to build spaces where psychological understanding becomes part of everyday life, not something people only access during moments of crisis.
            </p>
            <p>
              Through workshops, group programmes, community conversations, and collaborations, we aim to make psychological insight more accessible, practical, and shared.
            </p>
            <p>
              Our spaces are for people who may be navigating life transitions, questioning old patterns, wanting to build healthier relationships, or simply feeling curious about themselves and how they relate to the world around them. Many people are not in crisis, but they are searching for clarity, growth, and direction, and we believe mental health support should exist for them too.
            </p>
            <p>
              Ultimately, The Human Studio exists to help people feel more connected, to themselves, to others, and to the lives they want to build.
            </p>
            <p className="about-highlight">
              A space for reflection, growth, and becoming.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content fade-in">
            <h2>come explore with us</h2>
            <div className="hero-cta">
              <Link to="/what-we-offer" className="btn btn-filled">what we offer</Link>
              <Link to="/our-therapists" className="btn">Meet Our Therapists</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
