import React,{useState} from 'react'
import {GrCircleInformation } from 'react-icons/gr';
import { AiFillWindows} from 'react-icons/ai';
const GameDescription = ({gameinfo, gameMinRequirements}) => {
  const [descriptionChecker, setDescriptionChecker]=useState(false)
    
return (
  <div>
       <p className='platformslist'> platforms : <AiFillWindows style={{position:'relative', top:'4px'}}/> </p>

    <section style={{marginLeft:'20%', marginRight:'20%', display:'flex', justifyContent:'space-around'}}>
    <GrCircleInformation/>
      {/* more less description */}
      {descriptionChecker?
      <h1> <strong style={{color:'green'}}>description : </strong> {gameinfo.description} <button className='descriptionbtn' onClick={()=> setDescriptionChecker(!descriptionChecker)}> short description</button> </h1>
      :
      <h1>{gameinfo.short_description} <button className='descriptionbtn' onClick={()=> setDescriptionChecker(!descriptionChecker)}> Full description</button> </h1>
    }

    </section>
 
    <section className='gameMinRequirements' > 
     <h1> MIN REQUIREMENTS</h1>
     <p> graphics: <strong style={{color:'green'}}>{gameMinRequirements.graphics}</strong></p>
     <p>min Memory : {gameMinRequirements.memory}</p>
     <p> processor : {gameMinRequirements.processor}</p>
     <p> Os : {gameMinRequirements.os}</p>
     <p> Storage : {gameMinRequirements.storage}</p>
    </section>

    <a href={gameinfo.game_url} >
     <button className='button-78' >  URL</button>
    </a>
  </div>
)
}

export default GameDescription