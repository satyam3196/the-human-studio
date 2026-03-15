import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}2.png`} alt="The Human Studio" />
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
              about
            </Link>
          </li>
          <li>
            <Link to="/what-we-offer" className={isActive('/what-we-offer') ? 'active' : ''} onClick={closeMenu}>
              what we offer
            </Link>
          </li>
          <li>
            <Link to="/tanishka" className={isActive('/tanishka') ? 'active' : ''} onClick={closeMenu}>
              tanishka
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
