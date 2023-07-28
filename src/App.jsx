
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import jwtDecode from 'jwt-decode'
//import Login from './component/Login/Login';
import {createHashRouter,RouterProvider } from 'react-router-dom';
//import Regester from './component/Regester/Regester';
import RoutLayout from './component/RoutLayout/RoutLayout';
import Home from './component/Home/Home';
import All from './component/All/All';
import Pc from './component/platforms/Pc/Pc';
import Browser from './component/platforms/Browser/Browser';
import ReleaseData from './component/SortBy/ReleaseData/ReleaseData';
import Popularity from './component/SortBy/Popularity/Popularity';
import Alphabetical from './component/SortBy/Alphabetical/Alphabetical';
import Relevance from './component/SortBy/Relevance/Relevance';
import Racing from './component/Categories/Racing/Racing';
import Sports from './component/Categories/Sports/Sports';
import Social from './component/Categories/Social/Social';
import Shooter from './component/Categories/Shooter/Shooter';
import OpenWorld from './component/Categories/OpenWorld/OpenWorld';
import Zombie from './component/Categories/Zombie/Zombie';
import ActionRpg from './component/Categories/ActionRpg/ActionRpg';
import Action from './component/Categories/Action/Action';
import Flight from './component/Categories/Flight/Flight';
import Battle from './component/Categories/Battle/Battle';
import ItemDitails from './component/ItemDitails/ItemDitails';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import { Offline } from 'react-detect-offline';

function App() {
  useEffect(()=>{
    if(localStorage.getItem('userToken')!==null){
      saveUserData();
    }
  },[])
  const [userData, setUserData] = useState(null) 
   function saveUserData() {
  let encodedToken =localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  setUserData(decodedToken);

  }

  let routers=createHashRouter([
    {path:'/' , element: <RoutLayout userData ={userData} setUserData={setUserData} /> ,children:[
      //  {path :'regester' , element: <Regester/> },
      //  {path:'login' , element: <Login saveUserData={saveUserData}/> },
      {index:true, element: <ProtectedRoute><Home/></ProtectedRoute>  },
      {path:'all'  , element:<ProtectedRoute><All/></ProtectedRoute> },
      {path:'pc' , element: <ProtectedRoute> <Pc/></ProtectedRoute> },
      {path:'browser' , element: <ProtectedRoute><Browser/></ProtectedRoute>  },
      {path:'releaseData' , element: <ProtectedRoute><ReleaseData/> </ProtectedRoute> },
      {path:'popularity' , element: <ProtectedRoute><Popularity/></ProtectedRoute>  },
      {path:'alphabetical' , element: <ProtectedRoute><Alphabetical/></ProtectedRoute>  },
      {path:'relevance' , element: <ProtectedRoute><Relevance/> </ProtectedRoute> },
      {path:'racing' , element: <ProtectedRoute> <Racing/></ProtectedRoute> },
      {path:'sports' , element: <ProtectedRoute><Sports/></ProtectedRoute>  },
      {path:'social' , element: <ProtectedRoute><Social/></ProtectedRoute>  },
      {path:'shooter' , element: <ProtectedRoute><Shooter/> </ProtectedRoute> },
      {path:'openWorld' , element: <ProtectedRoute><OpenWorld/></ProtectedRoute>  },
      {path:'zombie' , element: <ProtectedRoute><Zombie/></ProtectedRoute>  },
      {path:'actionRpg' , element: <ProtectedRoute><ActionRpg/></ProtectedRoute>  },
      {path:'action' , element: <ProtectedRoute><Action/> </ProtectedRoute> },
      {path:'flight' , element: <ProtectedRoute><Flight/></ProtectedRoute>  },
      {path:'battle' , element: <ProtectedRoute><Battle/></ProtectedRoute>  },
      {path:'itemDitails/:itemId' , element: <ProtectedRoute><ItemDitails/></ProtectedRoute>  },
      
      
  ]
  }])


  return <>
  
  <RouterProvider router={routers}/>

    <Offline><div className="text-white position-fixed top-50 p-3 rounded-3 ms-3 bg-gradient ">you are offline!</div></Offline>
    
     
  </>
     
     

}

export default App;
