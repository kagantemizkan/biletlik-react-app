import React, { useEffect, useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import useResizeObserver from "use-resize-observer";
import axios from 'axios' 

export default function Slider() {

  const [movies,setMovies]= useState([])
  
  useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/movies/banners')
      setMovies(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchMovie()
  },[])
  
  const { ref, width = 1, height = 1 } = useResizeObserver();

  console.log(movies)
  
  return (
    <div  ref={ref}  style={{ width: "100%", height: "850px" }} className='container-slider'>
          <SimpleImageSlider
          width={width}
          height={height}
          images={movies.map(movie=>movie.image_banner)}
          showBullets={true}
          showNavs={true}
          loop={true}
          autoPlay={true}
          slideDuration={0.5}
          autoPlayDelay={2}
        />
    </div>
  )
}
