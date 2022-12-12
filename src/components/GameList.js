import React from 'react'

const GameList = ({games,gameMore, setGameMore}) => {
  return (
    <div className='gameslist'>
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
    </div>
  )
}

export default GameList