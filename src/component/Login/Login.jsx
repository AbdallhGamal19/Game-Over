
// import style from './Login.module.css'
// import imgLogo from './images/logo.png'
// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Joi from 'joi';
// import { Helmet } from 'react-helmet';
// export default function Login({saveUserData}){

//   let usNavigat =useNavigate()

// const [loding, setloding] = useState(false)
// const [error, setError] = useState('')
// const[erorrList,seterorrList] = useState([])
// const [user, setuser] = useState({
//   email:"",
//   password:"",
// })
// async function sendUserToApi() {
//   let {data} = await axios.post(`https://route-movies-api.vercel.app/signin`,user)
//   if(data.message==='success'){
//     setloding(false)
//     localStorage.setItem('userToken', data.token);
//     saveUserData();
//     usNavigat('/')
//   }else{
//     console.log(data.message);
//     setloding(false)
//     setError(data.message)
//   }
// }

// function setRegisterDataToUser(eventInfo) {
//   let myUser={...user};
//   myUser[eventInfo.target.name]=eventInfo.target.value;
//   setuser(myUser);
  
// }

// function validationRsgisterData() {
//   let scheme=Joi.object({
//   email:Joi.string().email({ tlds :{allow:['com','net']}}).required(),
//   password:Joi.string().pattern(/^([A-Z]|[a-z]){3,8}$/).required(),
//   })
//   return (scheme.validate(user,{abortEarly:false}));
// }
// function submitRegisterData(e) {
//   e.preventDefault();
//   setloding(true);
//   let validation = validationRsgisterData();
// if(validation.error) {
//   setloding(false);
//   seterorrList(validation.error.details);
//   console.log(erorrList);
// } 
// else{
//   sendUserToApi();
  
// }


// }
//   return (
//     <>
//     <Helmet>
//       <meta charSet="utf-8" />
//       <title>Login</title>
//       <link rel="canonical" href="http://mysite.com/example" />
//     </Helmet>
//     <section>
//       <div className="container">
//           <div className="conten row">
//           <div className={`${style.imGbox} col-md-6`}></div>
//             <div className=  {`${style.formBg} setInfo col-md-6 text-white text-center p-5`}>
//             <div><img className={`${style.logo}`} src={imgLogo} alt=""/></div>
//             <h2 className='mb-3 mainColor fs-4'>Log in to GameOver</h2>
//             <form onSubmit={submitRegisterData}>
//               <input onChange={setRegisterDataToUser} className='form-control mb-3 p-2' type="email" name="email"  placeholder='Email' />
//               {erorrList.filter((err)=> err.context.label==="email")[0]?<div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">You should enter a valid email.</div> :''}
//               <input onChange={setRegisterDataToUser}  className='form-control mb-3 p-2' type="password" name="password"  placeholder='Password' />
//               {erorrList.filter((err)=> err.context.label==="password")[0]?<div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">It must be 4 to 8 characters long</div> :''}
//               <button className= {`${style.bottonBg} form-control mb-3 p-2 fs-5`} type="submit">{loding?<><i className="fa fa-spinner fa-spin text-white"></i></>:'Login'}</button>
//               </form> 
//               <hr />
//               <Link href="#">Forgot Password?</Link>
//               <div className="creactAccount"><span>Not a member yet?</span><Link href="#"> creactAccount</Link></div>
//             </div> 
//           </div>
//       </div>
//     </section>
//     </>
//   )
// }
