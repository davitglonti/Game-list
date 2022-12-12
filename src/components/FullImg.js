import React,{useState} from 'react'
import { AiFillCaretRight,AiFillCaretLeft } from 'react-icons/ai';
import '../App.css';

const FullImg = ({image, gameImage}) => {
    const [fullChecker,setFullChecker]=useState(false)
    const [current, setCurrent] = useState(0);
    const length = gameImage.length
    function nextSlide() {
      setCurrent( current === length - 1 ? 0 : current + 1 );
    }
   
    function prevSlide() {
      setCurrent( current === 0  ? length - 1 : current - 1 );
    }
      
  return (
    <div >
        {fullChecker? 
        <div className='fullimagecontainer'>
          
            <img src={gameImage[current].image} className={fullChecker? 'fullImg': 'nofullImg'} onClick={()=>setFullChecker(!fullChecker)}/>
            <AiFillCaretRight style={{color:'red',fontSize:'50px',position:'fixed', right:'0', top:'50%'}} onClick={()=> nextSlide()}/>
            <AiFillCaretLeft style={{color:'red',fontSize:'50px',position:'fixed', left:'0', top:'50%'}} onClick={()=> prevSlide()}/>
    </div>
     :
     <>
     <img src={image} className={fullChecker? 'fullImg': 'nofullImg'} onClick={()=>setFullChecker(!fullChecker)}/>
 
 </>
    }
      
    </div>
  )
}

export default FullImg