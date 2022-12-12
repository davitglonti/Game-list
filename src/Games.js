import React,{useState,useEffect} from 'react'
import './Css/Game.css'
import GameSearch from './components/GameSearch';
import GamesCategory from './components/GamesCategory';
import Categoryes from './components/Categoryes';
import GameList from './components/GameList';
const Games = () => {
  const [games, setGames]=useState([])
  const [gameMore, setGameMore]= useState(10)
const [gamesfulllist,setGamesFullList]=useState([])

//console.log(games)
 const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf718c188amshbcc322c06110690p179c70jsnde1bbfdbce58',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
//add catalog api
useEffect(()=>{
 fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
	.then(response => response.json())
	.then(response => setGamesFullList(response))
	.catch(err => console.error(err));

}, [])
//add  api information
useEffect(()=>{
  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
   .then(response => response.json())
   .then(response => setGames(response))
   .catch(err => console.error(err));
 
 }, [])
 
//publisher list function
const Publisher = (curcat) => {
  const newItem = gamesfulllist.filter((newVal) => {
    if(curcat==='all'){
    return gamesfulllist
    }
    return newVal.publisher === curcat; 
  });
  setGames(newItem);
};

  return (
<>
<GameSearch  gamesfulllist={gamesfulllist} setGames={setGames}/>

<Categoryes />
<br>
</br>
<GamesCategory Publisher={Publisher} />

    <div >
      <GameList games={games} gameMore={gameMore} setGameMore={setGameMore}/>
    {/*
    {games.slice(0,gameMore).map(item=>{

      return (
        <div key={item.id}  style={{border:'3px solid red', margin:'10px'}} alt='error image' className='gamelistper'>
     <h1> {item.publisher}</h1>
       <img src={item.thumbnail}  style={{width:'100%', height:'150px'}}/>
        <p className='release-data'>Release data : {item.release_date}</p>
        <h4>{item.title}</h4>
      
     <a href={`/gameinfo/${item.id}`}>
        <button className='button-78' style={{width:'100%'}}> More</button>
     </a>

        </div>
      )
    })}
  
    <button className="button-84" onClick={()=>setGameMore(gameMore+10)}>
 More
    </button>
  */}
    </div>
</>
  )
}

export default Games;
