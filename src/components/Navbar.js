import React from 'react'
import {Link,useLocation} from 'react-router-dom';
// import { GoPerson } from "react-icons/go";

const Navbar = () => {
    

   
    let location=useLocation();
    // console.log(location.pathname)
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark" >
            <div className="container-fluid">
                <Link  className="navbar-brand" to="/home"> My_WebSite</Link>
                <button className="fs-4 bd navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample  " aria-controls="offcanvasExample" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{}}>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/about'?'active':''}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link  className={`nav-link ${location.pathname==='/dashboard'?'active':''}`} to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>
{/* offcanvas start */}

    <div className=''>               


    {/* <button className="fs-4 bd" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight  "  aria-controls="offcanvasWithBackdrop" ><GoPerson/> </button> */}


</div>



                
                </div>
            </div>
        </nav>
    )
}

export default Navbar