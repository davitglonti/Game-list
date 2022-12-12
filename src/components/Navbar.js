import React,{useState} from 'react'
import LiveSportGames from '../Games'
const Navbar = () => {
   
  return (
    <div className='navbar'>
          <h1>Games</h1>
         <div>
        <ul className='sportslist'> 
       
         <a href='football'> <button className='button-78'>
                football
            </button>
</a> 
<a href="/basketball" >
      <button className='button-78'>
                basketball
            </button>
    </a> 
          
          <a href='tennis'>
            <button className='button-78'>
            tennis
            </button>
            </a>
        </ul>
      
    </div>
    
    </div>
  )
}

export default Navbar