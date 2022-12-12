import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FullImg from './FullImg';
 //import {GrCircleInformation } from 'react-icons/gr';
import GameDescription from './GameDescription';
 
const GameInfo = () => {
const params = useParams();
   
    const [gameId, setGameId]= useState(params.id)
    const [gameinfo, setGameInfo]=useState([])
    const  [gameImage,setGameImage]=useState([])
    const [gameMinRequirements, setGameMinRequirements]=useState([])
   console.log(gameinfo)
 //Api
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bf718c188amshbcc322c06110690p179c70jsnde1bbfdbce58',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    //aq unda chavamaton id is msgavsi
    useEffect(()=>{
 fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
        .then(response => response.json())
        .then(response => setGameInfo(response))
       
        .catch(err => console.error(err));
  
    }, [])
    useEffect(()=>{
      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
             .then(response => response.json())
             .then(response => setGameImage(response.screenshots))
            
             .catch(err => console.error(err));
       
         }, [])


         useEffect(()=>{
          fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
                 .then(response => response.json())
                 .then(response => setGameMinRequirements(response.minimum_system_requirements))
                
                 .catch(err => console.error(err));
           
             }, [])
   

  return (
    <div>
 <h1 style={{textAlign:'center'}}>{gameinfo.title}</h1>

 <section className='releaseanddeveloper'>
  <p>developer : <strong style={{color:'green'}}>{gameinfo.developer}</strong> </p>
  <p> release date: {gameinfo.release_date}</p>

 </section>
 
{/* game all images*/}
 <div className='gameimages'>
  {gameImage.map((item)=>{
    return (
      <div  key={item.id}>
      <FullImg  image={item.image} gameImage={gameImage}/>
      </div>
      )
  })}
 </div>
 {/* description and requirements*/}
 <GameDescription gameinfo={gameinfo} gameMinRequirements={gameMinRequirements}/>

    </div>
  )
}

export default GameInfo
