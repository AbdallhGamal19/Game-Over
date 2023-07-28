import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function RoutLayout({userData,setUserData}) {
  let Navigate =useNavigate();
  function logOut() {
    setUserData(null);
    localStorage.removeItem('userToken')
    Navigate('/login')
   }
  return <>


  <Navbar userData={userData} logOut ={logOut}/>
   <Outlet></Outlet>
  </>
}
