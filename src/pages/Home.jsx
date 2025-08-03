
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
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

export default Home;