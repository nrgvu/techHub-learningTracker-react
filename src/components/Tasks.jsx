
import {Link, Routes, Route, Outlet, NavLink, useNavigate} from 'react-router-dom'
import './tasks.css'



function Navigation(){
  const navigate = useNavigate();
  
  return(
      <div className='tasks-container'>
        
        <nav className='tasks-sidebar'>
          <div className='sidebar-title'>
            <h3 className='sidebar-header'>Select a Task</h3>
          </div>

          


            <NavLink 
              to = "/tasks/UserProfile"
              className={(isActive) => `nav-button ${isActive ? 'active' : ''}`}
            >
              UserProfile
            </NavLink>

            <NavLink
              to="/tasks/Todos"
              className={(isActive) => `nav-button ${isActive ? 'active' : '' }`}
            >
              Todos
            </NavLink>

            <NavLink
              to="/tasks/Post"
              className={(isActive) => `nav-button ${isActive ? 'active': ''}`}
            >
              Post
            </NavLink>
            <button 
            onClick={() => navigate('/')}
            className='back-button' >
                Back to Home
            </button>

        </nav>
        <div className='tasks-content'>
              <Outlet/>
        </div>
        
    </div>
  ) 

}


export default Navigation;