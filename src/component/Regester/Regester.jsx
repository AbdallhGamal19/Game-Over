// import React, { useState } from 'react'
// import style from './Regester.module.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Joi from 'joi';
// import { Helmet } from 'react-helmet';

// export default function Regester() {
//   let usNavigat =useNavigate()

// const [loding, setloding] = useState(false)
// const [error, setError] = useState('')
//  const[erorrList,seterorrList] = useState([])
// const [user, setuser] = useState({
//   first_name:"",
//   last_name:"",
//   email:"",
//   password:"",
//   age:0
// })
// async function sendUserToApi() {
//   let {data} = await axios.post(`https://route-movies-api.vercel.app/signup`,user)
//   if(data.message==='success'){
//     setloding(false)
//     usNavigat('/login')
//   }else{
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
//   first_name:Joi.string().pattern(/^([A-Z]|[a-z]){3,8}$/).min(3).max(10).required(),
//   last_name:Joi.string().pattern(/^([A-Z]|[a-z]){3,8}$/).min(3).max(10).required(),
//   email:Joi.string().email({ tlds :{allow:['com','net']}}).required(),
//   password:Joi.string().pattern(/^([A-Z]|[a-z]){4,8}$/).required(),
//   age:Joi.number().min(16).max(80)
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
// } 
// else{
//   sendUserToApi();
  
// }


// }

//   return (
//     <>
//     <Helmet>
//         <meta charSet="utf-8" />
//         <title>Regester</title>
//         <link rel="canonical" href="http://mysite.com/example" />
//       </Helmet>
//     {error&&<div className="alert alert-danger w-75 m-auto mb-3">{error}</div>}
//     <section>
//         <div className="container">
//             <div className="conten row">
//             <div className={`${style.imGbox} col-md-6`}></div>
//               <div className=  {`${style.formBg} setInfo col-md-6 text-white text-center p-5`}>
//               <h2 className='mb-3 mainColor fs-3'>Create My Account!</h2>
//               <form onSubmit={submitRegisterData}>
//                 <div className="names d-flex justify-content-between">
                
//                 <input onChange={setRegisterDataToUser} className='d-block form-control  mb-3 py-2 px-3 my-input' type="text" name="first_name"  placeholder='First Name' />
                
//                 <input onChange={setRegisterDataToUser} className='form-control mb-3 py-2 px-3 my-input' type="text" name="last_name"  placeholder='Last Name' />
//                 </div>
//                 <div className='d-flex justify-content-between'>
//                 {erorrList.filter((err)=> err.context.label==="first_name")[0]?<div className=" alertsOfNames alert alert-danger  m-auto mb-3 p-1 ms-0">Your name should have at least 3 characters not more than 10 characters</div> :''}
//                 {erorrList.filter((err)=> err.context.label==="last_name")[0]?<div className=" alertsOfNames alert alert-danger  m-auto mb-3 p-1 me-0 ">Your name should have at least 3 characters not more than 10 characters</div> :''}
//                 </div>
//                 <input onChange={setRegisterDataToUser} className='form-control mb-3 py-2 px-3 my-input' type="email" name="email"  placeholder='Email' />
//                 {erorrList.filter((err)=> err.context.label==="email")[0]?<div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">You should enter a valid email.</div> :''}
//                 <input onChange={setRegisterDataToUser} className='form-control mb-3 py-2 px-3 my-input' type="number" name="age"  placeholder='age' />
//                 {erorrList.filter((err)=> err.context.label==="age")[0]?<div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">Your age must be over 15 and not over 80.</div> :''}
//                 <input onChange={setRegisterDataToUser} className='form-control mb-3 py-2 px-3 my-input' type="password" name="password"  placeholder='Password' />
//                 {erorrList.filter((err)=> err.context.label==="password")[0]?<div className=" alert alert-danger  m-auto mb-3 p-1 ms-0">It must be 4 to 8 characters long</div> :''}
//                 <button className= {`${style.bottonBg} form-control mb-3 p-2 fs-5`} type="submit">{loding?<><i className="fa fa-spinner fa-spin text-white"></i></>:'Creat Acount'}</button>
//                 </form> 
//                 <div className='textColor mb-3'><p  >This site is protected by reCAPTCHA and the Google <Link className='textColor' to='#'>Privacy</Link> <Link className='textColor' to='#'>Policy</Link>  and <Link className='textColor' to='Terms of Service'>Terms of Service</Link> apply.</p></div>
//                 <hr />
//                 <p  className= 'textColor'>Already a member? <Link className='text-decoration-none' to="login">Login</Link></p>
//               </div> 
//             </div>
//         </div>
        
//     </section>
//     </>
//   )
// }
