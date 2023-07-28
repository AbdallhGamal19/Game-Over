import React from 'react'
import logo from '../Login/images/logo.png'
import { Link } from 'react-router-dom'
import style from './navbar.module.css';



export default function Navbar({userData,logOut}) {

  return (<>

<nav className= {` ${style.nav} navbar navbar-expand-lg position-relative`}>
  <div className=  {` container-fluid  bg-dark p-2`}>
    <div className="logo fs-6 d-flex justify-conten-center align-items-center">
      <img className={`${style.img}`} src={logo} alt="logo" />
      <span className={`${style.textLogo}`}>GameOver</span>
    </div>
    {//userData!==null&&
      <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=" navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="rightAndLeft mt-lg-0 mt-3  d-flex justify-content-between w-100 ">
            <div className=" leftNave links d-flex align-items-center ">
              <> 
              <Link to='/' className='text-decoration-none text-white mx-4 fs-6 listOfNav'>Home</Link>
              <Link to='all' className='text-decoration-none text-white me-3  fs-6 listOfNav'>All</Link>

              <div className="dropdown  ">
                <Link className="btn listOfNav text-white dropdown-border border-none text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  platforms
                </Link>
                <ul className="dropdown-menu">
                  <li className='p-2'><Link className={ `  d-block text-decoration-none textColor`} to='pc'>pc</Link></li>
                  <li className='p-2'><Link className={ ` d-block text-decoration-none textColor`} to='browser'>browser</Link></li>
                </ul>
              </div>
              <div className="dropdown  ">
                <Link className="btn  text-white dropdown-border border-none text-decoration-none dropdown-toggle listOfNav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                sort-by
                </Link>
                <ul className='dropdown-menu '>
                  <li className= 'p-2' ><Link className=' d-block text-decoration-none textColor' to='releaseData'>release-date</Link></li>
                  <li className= 'p-2' ><Link className=' d-block text-decoration-none textColor' to='popularity'>popularity</Link></li>
                  <li className= 'p-2' ><Link className=' d-block text-decoration-none textColor' to='alphabetical'>alphabetical</Link></li>
                  <li className= 'p-2' ><Link className=' d-block text-decoration-none textColor' to='relevance'>relevance</Link></li>
                </ul>
              </div>
              <div className="dropdown">
                <Link className="btn listOfNav position-relative text-white dropdown-border border-none text-decoration-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                categories
                </Link>
                <ul className=' dropdown-menu'>
                  <li className="p-2" ><Link className='  d-block text-decoration-none textColor'  to='racing'>racing</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='sports'>sports</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='social'>social</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='shooter'>shooter</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='openWorld'>open-world</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='zombie'>zombie</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='actionRpg'>action-rpg</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='action'>action</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='flight'>flight</Link></li>
                  <li className="p-2" ><Link className=' d-block text-decoration-none textColor'  to='battle'>battle</Link></li>
                </ul>
              </div>
              </>
              
            </div>
            <div className="rightNav ">
              <ul className=' text-white list-unstyled d-flex align-items-center m-0 '>
              {userData!==null?<li  className='px-2 ms-auto'><span onClick={logOut} className={`${style.join}  py-1 px-2 rounded-2 text-decoration-none btn-logOut`}>lougOut</span></li>:<><li className='px-2'><Link className='link text-decoration-none' to='/'>Login</Link></li>
              <li  className='px-2'><Link className={`  ${style.join}  py-1 px-2 rounded-2 text-decoration-none`}to='/'>join free</Link></li></>}
              </ul>
            </div>
          </div>
          
        </div>
      </>
    }
    {/* {userData==null&&
    <div className="rightNav ms-auto ">
      <ul className=' text-white list-unstyled d-flex align-items-center m-0'>
      <li className='px-2'><Link className='link text-decoration-none' to='login'>Login</Link></li>
      <li  className='px-2'><Link className={`  ${style.join}  py-1 px-2 rounded-2 text-decoration-none`}to='regester'>join free</Link></li>
      </ul>
    </div>} */}
  </div>
</nav>
    </>
  )
}
