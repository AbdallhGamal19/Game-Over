import React from 'react';

import { HelmetProvider,Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Getgames from '../../Hooks/useGetGames';
import ItemGame from '../ItemGame/ItemGame';
import Spinner from '../Spinner/Spinner';


export default function Home() {
 
  
  let {dataList}=Getgames(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=battle-royale`)
  return (
    <>
    <HelmetProvider>
      <Helmet>
      <meta charSet="utf-8" />
          <title>Home Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </HelmetProvider>
    
      {dataList<=0&&<Spinner/>}
      <header className=' home-bg text-white text-center '>
        <div className="conten py-5 ">
          <div className=" py-5">
            <h1>Find & track the best <span className='free-word'>free-to-play</span> games!</h1>
            <p className='mainColor my-3 '>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            <div className="btn btn-info "><Link className='text-white text-decoration-none d-block' to='all'>Browser Game</Link></div>
          </div>
        </div>
      </header>
    <div className="container">
      <div className="row g-3 mt-5">
      {dataList.splice(0,4).map((item,index)=>  <ItemGame key={index} item={item} />  )}
      </div>
    </div>
    </>
  )
}
