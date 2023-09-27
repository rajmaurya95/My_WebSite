// rafce
import React from 'react';
import {Link, useLocation} from 'react-router-dom'
import {GoPerson} from 'react-icons/go'

const Sidebar = (props) => {

  let location = useLocation();
  // console.log(location.pathname)

  
  // console.log(userd)
   
  return (
  <>
 
 <div class="offcanvas offcanvas-start "style={{width:"250px"}} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">My_WebSite</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body bg-dark text-white  " style={{width:"250px"}}>
    <div>
    
        <nav className=""  data-bs-theme="dark" >
            <div className="container-fluid">
               
              
                <div className="list " id="navbarSupportedContent">
                    <div className="me-auto mb-2 p-3 mb-lg-0" style={{}}>
                       
                            <Link  className={`mt-2 nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/home">Home</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/about'?'active':''}`} to="/about">Contact</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Dashboard</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Orders</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Products</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Services</Link>
                            <Link  className={` mt-2 nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Career</Link>
                    </div>
{/* offcanvas start */}

    </div>
    </div>
    </nav>
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
      <GoPerson />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Project</a></li>
        <li><a class="dropdown-item" href="#">User Details</a></li>
        <li><a class="dropdown-item" href="#">Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
    )
}

export default Sidebar