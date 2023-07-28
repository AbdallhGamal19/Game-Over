import axios from "axios";
import { useEffect, useState } from "react";

export default function Getgames(url) {
    const [dataList, setDataList] = useState([]);
    const [endIndex , setEndIndex] = useState(20);

    async function getAllGames() {

        let {data} = await axios.get(url,{
            
            headers :{'X-RapidAPI-Key':
                'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            
        })
        setDataList(data);
    }
    function addGame() {
        if(endIndex<=(dataList.length-20)){
            setEndIndex(endIndex+20)
        }
        else{
            setEndIndex(dataList.length)
        }
    }
    useEffect(()=>{getAllGames()} , [])
    
    return {dataList,addGame,endIndex};
}