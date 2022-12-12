import React,{useState,useEffect} from 'react'
import Gasacdel from './Gasacdel';
import '../Css/Movie.css'
const SimilarMovie = ({params}) => {
    const [similarMovie, setSimilarMovie]=useState([])
    console.log(similarMovie)
    useEffect(()=>{
        //985939
        fetch(`https://api.themoviedb.org/3/movie/${params}/similar?api_key=d8ac6b274e8e77a94f3c28a6507f8f56&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => setSimilarMovie(response.results))
            .catch(err => console.error(err));
        
        
        },[])
  return (
    <div>
     <h1>Similar Movie</h1>
     <div className='similarlist'>
      {similarMovie.map(item=>{
        return (
        
            <Gasacdel Name={item.original_title} image={`https://image.tmdb.org/t/p/w500${item.poster_path}`} item={item.id} openMovie={'.'} />
        
         
            )
      })}
      </div>
    </div>
  )
}

export default SimilarMovie