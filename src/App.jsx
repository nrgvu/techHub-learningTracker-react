import { Routes, Route, Link, useLocation} from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import LearningTracker from './pages/Learning-tracker'
import Navigation from './components/Tasks'
import Post from './components/Post'
import UserProfile from './components/UserProfile'
import Todos from './components/Todos'
import PostDetail from './components/PostDetail'



function App() {
  const location = useLocation();
  const isTasksPage = location.pathname.startsWith('/tasks');
  
  // Debug logs
  console.log('Location object:', location);
  console.log('Pathname:', location.pathname);
  console.log('Pathname type:', typeof location.pathname);
  console.log('startsWith result:', location.pathname.startsWith('/tasks'));
  console.log('Manual check:', location.pathname === '/tasks');

  return (
    <>
      {/* { !isTasksPage && ( */}
        <header style={{display: `${isTasksPage ? 'none' : 'flex'}`}}>
         <img src="/tech-hub-logo.png" alt="Tech Hub Logo" className="tech-hub-logo" />
            <div className="nav-buttons">
                <Link to="/"><button className="header-button">Home</button></Link>
                <Link to="/about"><button className="header-button">About</button></Link>
                <Link to="/services"><button className="header-button">Services</button></Link>
                <Link to="/learning-tracker"><button className="header-button">Learning Tracker</button></Link>
                <Link to="/contact"><button className="header-button">Contact</button></Link>
                {/* <Link to="/post"><button className='header-button'>Post</button> </Link>
                <Link to ="/userProfile"><button className='header-button'>UserProfile</button></Link>
                <Link to ="/todos"><button className='header-button'>Todos</button></Link> */}
                <Link to ="/tasks"><button className='header-button'>Tasks</button></Link>
            </div>
        </header>
      {/* )} */}
 
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={< Services/>} />
        <Route path="/learning-tracker" element={<LearningTracker />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/tasks" element={<Navigation/>} >
          <Route index element= {<h1>Select a task </h1>} />
          <Route path="Post" element ={<Post />}/>
          <Route path="userProfile" element ={<UserProfile />}/>
          <Route path="todos" element ={<Todos />}/>
          <Route path="post/:id" element={<PostDetail />}/>
        </Route>
      </Routes>

      
    </>
  )
}

export default App