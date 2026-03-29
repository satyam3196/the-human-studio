import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}2.png`} alt="The Human Studio" className="footer-logo" />
            <p className="footer-tagline">a space where psychology meets community.</p>
          </div>

          <div className="footer-links">
            <h4>explore</h4>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/what-we-offer">what we offer</Link>
            <Link to="/our-therapists">our therapists</Link>
          </div>

          <div className="footer-contact">
            <h4>connect</h4>
            <p>London, United Kingdom</p>
            <a href="mailto:hello@thehumanstudio.co.uk">hello@thehumanstudio.co.uk</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Human Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
