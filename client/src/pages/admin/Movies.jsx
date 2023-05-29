import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'

import "./adminpanel.scss"
const Movies = () => {

const[movies,setMovies]=useState([]);
const[movieA,setMovieA]=useState({
  title:"",
  director:"",
  cast:"",
  duration:null,
  description:"",
  image:"",
  image_banner:"",
  category:null,
});

useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/movies/get')
      setMovies(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchMovie()
  },[])
  
  const handleDelete= async (id)=>{
    try{
      console.log(id)
      await axios.delete('http://localhost:8800/movies/delete/'+id)
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }

  const handleUpdate= async (id)=>{
    try{
      await axios.post('http://localhost:8800/movies/addmovie',movieA)  
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }
  
  const handleChange = e =>{
    setMovieA((prev=>({...prev,[e.target.name]:e.target.value})))
  }


  return (
    <div className='home'>
      <div><SideBar/></div>
        <div className='homeContainer'>
        <table>
            <tr>
              <th>title</th>
              <th>director</th>
              <th>cast</th>
              <th>duration</th>
              <th>description</th>
              <th>image</th>
              <th>banner</th>
              <th>category</th> 
            </tr>
            <tr>
            <th className="tableCell"><input type="text" onChange={handleChange} name="title"  /></th>
            <th className="tableCell"><input type="text" onChange={handleChange} name="director"  /></th>
            <th className="tableCell"><input type="text" onChange={handleChange} name="cast" /></th>
            <th className="tableCell"><input type="number" onChange={handleChange} name="duration"  /></th>
            <th className="tableCell"><input type="text" onChange={handleChange} name="description" /></th>
            <th className="tableCell"><input type="text" onChange={handleChange} name="image" /></th>
            <th className="tableCell"><input type="text" onChange={handleChange} name="image_banner"  /></th>
            <th className="tableCell"><input type="number" onChange={handleChange} name="category"  /></th>
            <th  className="tableCell"><input type="button" value="ekle" onClick={handleUpdate} /> </th>    
            </tr>
      </table>
          <table>
            <tr>
              <th>movie_id</th>
              <th>title</th>
              <th>director</th>
              <th>cast</th>
              <th>duration</th>
              <th>description</th>
              <th>image</th>
              <th>banner</th>
              <th>category</th>
            </tr>
          {movies.map(movie=>(
          <tr key={movie.movie_id}>
            <th className="tableCell" >{movie.movie_id}</th>
            <th className="tableCell">{movie.title}</th>
            <th className="tableCell">{movie.director}</th>
            <th className="tableCell">{movie.cast}</th>
            <th className="tableCell">{movie.duration}</th>
            <th className="tableCell">{movie.description}</th>
            <th className="tableCell"><img className='movie-banner' alt='' src={movie.image}/></th>
            <th className="tableCell"><img className='movie-banner' alt='' src={movie.image_banner }/></th>
            <th className="tableCell">{movie.category}</th>
            <th  className="tableCell"><input type="button" value="sil"  onClick={()=>handleDelete(movie.movie_id)} /> </th>    
          </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}


export default Movies