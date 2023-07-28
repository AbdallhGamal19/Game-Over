import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemGame({item}) {
  
  return <>
  <div className=" col-lg-6 col-xl-4 col-xxl-3 m-auto mb-3  ">
    <Link className='text-decoration-none' to= {`/itemDitails/${item.id}`}>
      <div className="item-box rounded-2 overflow-hidden ">
        <img className='w-100' src={item.thumbnail} alt="" />
        <div className="descBox p-3  mainColor  ">
          <div className="btnAndHed d-flex justify-content-between align-items-center mb-3">
            <h2 className='h5 '>{item.title}</h2>
            <div className="btn btn-sm text-white btn-color btn-free">free</div>
          </div>
          <p className='mb-2'> {item.short_description.split(' ').splice(0,2).join(' ')}</p>
          <div className="logo d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-square-plus fs-5"></i>
          <div className='genres fs-5'><span className="genre py-1 px-3 rounded-4 fs-6 ">{item.genre}</span><span> {item.platform==='PC (Windows)' ?<i className="fa-brands fa-windows"></i>:<i className="fa-solid fa-window-maximize "></i>}</span></div>
          </div>
        </div>
      </div>
    </Link>
  </div>  
  </>
}
