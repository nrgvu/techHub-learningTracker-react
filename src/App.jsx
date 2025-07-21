import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import LearningTracker from './pages/Learning-tracker'
function App() {
  return (
    <>
        <header>
         <img src="/tech-hub-logo.png" alt="Tech Hub Logo" className="tech-hub-logo" />
            <div className="nav-buttons">
                <Link to="/"><button className="header-button">Home</button></Link>
                <Link to="/about"><button className="header-button">About</button></Link>
                <Link to="/services"><button className="header-button">Services</button></Link>
                <Link to="/learning-tracker"><button className="header-button">Learning Tracker</button></Link>
                <Link to="/contact"><button className="header-button">Contact</button></Link>
            </div>
        </header>


      {/* Hero Section */}
      <div className='hero-section'>
        <h1>Welcome to Tech Hub</h1>
        <p>Your Gateway to Technology Learning</p>
        <button className='join-tech-hub'>Join Tech Hub</button>
      </div>

      {/* Main Content */}
      <div className='main-content'>
        <div className='card'>
          <h2>Courses</h2>
          <p>Learn programming and tech skills</p>
        </div>
        <div className='card'>
          <h2>Projects</h2>
          <p>Build real-world applications</p>
        </div>
        <div className='card'>
          <h2>Community</h2>
          <p>Connect with tech enthusiasts</p>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={< Services/>} />
        <Route path="/learning-tracker" element={<LearningTracker />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer>
        <div className="footer-buttons">
          <Link to="/about"><button className="footer-button">About</button></Link>
          <Link to="/courses"><button className="footer-button">Courses</button></Link>
          <Link to="/contact"><button className="footer-button">Contact</button></Link>
        </div>
        <div>© 2025 Tech Hub</div>
      </footer>
    </>
  )
}

export default App