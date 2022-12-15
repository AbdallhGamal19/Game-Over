import React from 'react';
import { Helmet } from 'react-helmet';
import Getgames from '../../../Hooks/useGetGames';
import ItemGame from '../../ItemGame/ItemGame';
import Spinner from '../../Spinner/Spinner';

export default function Zombie() {
    let {dataList,endIndex,addGame}=Getgames(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=zombie`)
    return (
      <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zombie Gemes</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {dataList<=0&&<Spinner/>}
      <div className="container">
        <div className="row g-3">
          {dataList.slice(0 , endIndex).map((item,index)=> <ItemGame key={index} item={item} />  )}
        </div>
        {endIndex<dataList.length?<button onClick={addGame} className="btn see-more mb-3  m-auto ">See More</button>:''}
      </div>
      </>
    )
}
