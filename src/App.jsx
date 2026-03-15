import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeOffer from './pages/WhatWeOffer'
import Tanishka from './pages/Tanishka'
import './styles/global.css'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-offer" element={<WhatWeOffer />} />
          <Route path="/tanishka" element={<Tanishka />} />
        </Routes>
      </Layout>
    </Router>
  )
}
