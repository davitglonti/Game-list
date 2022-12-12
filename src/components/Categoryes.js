import React,{useEffect,useState} from 'react'
import GameList from './GameList'
import '../Css/Categories.css'
const Categoryes = ({setGames}) => {
    const [CategoryMap,setCategoryMap]=useState([])
    const [categoryChange,setCategoryChange]=useState('shooter')
    const [CategoryChecker,setCategoryChecker]=useState(false)
   console.log(CategoryChecker)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aeb0516f50mshd2b9c30ed4d0009p103319jsnbaca91e157d2',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    useEffect(()=>{
         fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryChange}`, options)
        .then(response => response.json())
        .then(response => setCategoryMap(response))
        .catch(err => console.error(err));

    }, [categoryChange])

        const CategoryList=(info)=>{
            setCategoryChange(info)

        }
  return (
    <div>
           

{CategoryChecker?

<> 
<button className='button-36' onClick={()=>setCategoryChecker(!CategoryChecker)}> Category </button>
 <section >
 <button onClick={()=> CategoryList('Shooter')}>shooter</button>
 <button onClick={()=> CategoryList('Strategy')}>strategy</button>
 <button onClick={()=> CategoryList('Racing')}>racing</button>
 <button onClick={()=> CategoryList('Sports')}>sports</button>
 <button onClick={()=> CategoryList('Social')}>social</button>
 <button onClick={()=> CategoryList('Zombie')}>zombie</button>
 <button onClick={()=> CategoryList('Fighting')}>fighting</button>
</section>
<GameList games={CategoryMap}/>
</>
:
<button className='button-36' onClick={()=>setCategoryChecker(!CategoryChecker)}> Category </button>
}

    
    </div>
  )
}

export default Categoryes