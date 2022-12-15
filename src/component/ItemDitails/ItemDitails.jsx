
import React from 'react'
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'
import Getgames from '../../Hooks/useGetGames';
import Spinner from '../Spinner/Spinner';

export default function ItemDitails() {
  let {itemId}=useParams();
  let {dataList}=Getgames(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${itemId}`)
 
  console.log(dataList);
  return  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{dataList.title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    {dataList<=0&&<Spinner/>}
    <div className="gameDitails">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="item">
              <img className='w-100 mb-3' src={dataList.thumbnail} alt="imgGame" />
              <div className="btns mb-3  d-flex justify-content-between  ">
                <span className=' btn genre text-white me-3 btn-free '>Free</span>
                <span className=' w-75 d-block fw-bold  w-md-75 btn-play-now btn btn-color'><a  href={dataList.game_url} className='text-white text-decoration-none d-block ' >PLAY NOW</a></span>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-1 pw-2 mainColor">
              <div className="item">
                <h1 className='h2'>{dataList.title}</h1>
                <h2 className='h4'>About </h2>
                <p className=''>{dataList.description}</p>
                <h3 className='h4'>{dataList.title} Global Screenshots</h3>
                {dataList.screenshots&&
                
                <img src={dataList.screenshots[0].image}  className='w-100 mb-3 d-block' alt="" />
                }
                
                <div className="points">
                  <div className="firstPoints d-flex justify-content-between align-items-center">
                    <div className="point">
                    <span className='d-block'>Title :</span>
                    <span> {dataList.title}</span>
                    </div>
                    <div className="point">
                    <span className='d-block'>Developer :</span>
                    <span> {dataList.developer}</span>
                    </div>
                    <div className="point">
                    <span className='d-block'>Publisher :</span>
                    <span> {dataList.publisher}</span>
                    </div>
                    
                  </div>
                  <div className="lastPoints d-flex justify-content-between align-items-center mt-3">
                    <div className="point">
                    <span className='d-block'>Release Date :</span>
                    <span> {dataList.release_date}</span>
                    </div>
                    <div className="point">
                    <span className='d-block'>Genre :</span>
                    <span> {dataList.genre}</span>
                    </div>
                    <div className="point">
                    <span className='d-block'>Platform :</span>
                    <span> {dataList.platform}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  
  </>
}
