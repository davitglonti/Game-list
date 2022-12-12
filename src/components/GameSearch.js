import React,{useState} from 'react'
const GameSearch = ({gamesfulllist,setGames}) => {
const [searchValue,setSearchValue]=useState([])

//filter function
const SearChing =()=>{
  //search function
  const Search = gamesfulllist.filter((search)=>{
    return search.title.slice(0,4).toLowerCase() === searchValue;
  })
  setGames(Search);
}

  return (
    <div>
      <section className='searchbar'>

      <input 
      type='text'
       placeholder='input' 
       onChange={(event) => setSearchValue(event.target.value)}
       maxLength='4'
      className='searchinput'
       />
       
      <input
      type='submit' 
      
      onClick={()=> SearChing()}
      />
   
</section>
    </div>
  )
}

export default GameSearch