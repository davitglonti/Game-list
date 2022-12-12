import React,{useEffect, useState} from 'react'
import '../Css/Categories.css'
const GamesCategory = ({Publisher}) => {
const [gameCategory,setGameCategory]=useState('')
const [categoryList, setCategoryList]=useState('')

  return (
    <div>
 <section className='publisherlist' >
  <h1>Publisher List</h1>
  <div className='publisher'>
<button className='button-87' id="carbutton" onClick={()=> Publisher('all')}>All</button>
  <button className='button-87' onClick={()=> Publisher('Suba Games')} >Suba Games</button>
  <button className='button-87' onClick={()=> Publisher('Wargaming')}>Wargaming</button>
  <button className='button-87' onClick={()=> Publisher('Blizzard Entertainment')}>Blizzard Entertainment</button>
  <button className='button-87' onClick={()=> Publisher('Valve')}>Valve</button>
</div>
</section>
  
    </div>
  )
}

export default GamesCategory 