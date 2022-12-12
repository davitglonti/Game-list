import React,{useEffect,useState} from 'react'
import Gasacdel from './Gasacdel';
import '../Css/Movie.css'
import SimilarMovie from './SimilarMovie';
import { useParams } from "react-router-dom";

const OpenMovie = () => {
    const params = useParams()
   
    const [Movie, setMovie]=useState([])
console.log(params)
   
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d8ac6b274e8e77a94f3c28a6507f8f56`)
            .then(response => response.json())
            .then(response => setMovie(response))
            .catch(err => console.error(err));
        
        
        },[])
  return (
    <div>
        <section>
            <img src={`https://image.tmdb.org/t/p/w500${Movie.backdrop_path}`} className='backdrop_img'/>
           <div className='backdrop_info'>
            <h1>{Movie.original_title}</h1>
            <h2> Release Data: {Movie.release_date}</h2>
            <p>{Movie.tagline}</p>
           
         
           
         
            </div>
        </section>
   <div style={{display:'flex'}}>
    <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} className='poster_path'/>
     <p className='overview'>{Movie.overview}</p>
    </div>
    <div >
    {
            Movie.genres 
            ?
            Movie.genres.map(item=>(
                <div className='genres'>
                <h1 style={{color:'red'}}>{item.name}</h1>
                </div>
            ))
            :
            ''
           }

<section className='Production'>
<h1 style={{textAlign:'center'}}>Production</h1>
<div style={{display:'flex', justifyContent:'space-around'}}>
{
            Movie.production_companies 
            ?
            Movie.production_companies.map(item=>(
                <div >
            
                <img src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} style={{width:'100px', height:'80px'}}/>
                </div>
            
            ))
           
            :
            ''
           }
           </div>
</section>

<section >
    <SimilarMovie params={params.id}/>
</section>

    </div>
    </div>
  )
}

export default OpenMovie
// 