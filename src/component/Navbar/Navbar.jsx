import React from 'react'
import logo from '../Login/images/logo.png'
import { Link } from 'react-router-dom'
import style from './navbar.module.css';
import Dropdowns from "../Dropdowns/Dropdowns"


export default function Navbar({userData,logOut}) {
 
   

  return (
    <>

 <nav className=" first-navbar navbar navbar-dark bg-dark p-3 mb-5">
  <div className="container-fluid">
    <div className="logo fs-6 d-flex justify-conten-center align-items-center">
      <img className={`${style.img}`} src={logo} alt="logo" />
      <span className={`${style.textLogo}`}>GameOver</span>
    </div>

    <div className="rightNav">
      <ul className=' text-white list-unstyled d-flex align-items-center m-0 '>
        {userData!==null?<><button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
        <span className="navbar-toggler-icon"></span>
        </button></>
        :<><li className='px-2 '><Link className='link text-decoration-none ' to='login'>Login</Link></li>
        <li  className='px-2'><Link className={`  ${style.join}  py-1 px-2 rounded-2 text-decoration-none`}to='regester'>join free</Link></li></>}   
      </ul>
    </div>
    {userData&&
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Choose any section</h5>
      <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <Dropdowns/>
      <div className='mt-4'>
        <li  className='px-2'><span onClick={logOut} className={`  ${style.join} btn-logOut  py-1 px-2 rounded-2 text-decoration-none `}>lougOut</span></li>
      </div>
    </div>
  </div>
    }
    
  </div>
</nav>





    <nav className='mb-5 second-navbar'>
        <div className="container">
            <div className="conten d-flex justify-content-between align-items-center py-3 ">
                <div className="logo  fs-5 d-flex justify-conten-center align-items-center">
                    <img className={`${style.img}`} src={logo} alt="logo" />
                    <span className={`${style.textLogo}`}>GameOver</span>
                </div>
                <div className={` fs-5 img d-flex align-items-center`}> 
                <div className="links d-flex align-items-center">
                    {userData && <> 
                    <Link to='/' className='text-decoration-none text-white mx-4 fs-6'>Home</Link>
                    <Link to='all' className='text-decoration-none text-white me-3  fs-6'>All</Link>
                    <Dropdowns/>
                    </>
                    }
                </div>
                </div>
                
                <div className="rightNav">
                    <ul className=' text-white list-unstyled d-flex align-items-center m-0 '>
                    {userData!==null?<li  className='px-2'><span onClick={logOut} className={`  ${style.join}  py-1 px-2 rounded-2 text-decoration-none btn-logOut`}>lougOut</span></li>:<><li className='px-2'><Link className='link text-decoration-none' to='login'>Login</Link></li>
                    <li  className='px-2'><Link className={`  ${style.join}  py-1 px-2 rounded-2 text-decoration-none`}to='regester'>join free</Link></li></>}
                        
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}
