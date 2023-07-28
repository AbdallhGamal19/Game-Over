
import React from 'react'
import { HelmetProvider,Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom'
import Getgames from '../../Hooks/useGetGames';
import Spinner from '../Spinner/Spinner';
export default function ItemDitails() {
  let {itemId}=useParams();
  let {dataList}=Getgames(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${itemId}`)
 
  console.log(dataList);
  return  <>
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{dataList.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </HelmetProvider>
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
                  <>
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={dataList.screenshots[0].image}  className='w-100 mb-3 d-block' alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src={dataList.screenshots[1].image}  className='w-100 mb-3 d-block' alt="" />
                  </div>
                  <div class="carousel-item">
                    <img src={dataList.screenshots[2].image}  className='w-100 mb-3 d-block' alt="" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>



                  </>
                
                
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
