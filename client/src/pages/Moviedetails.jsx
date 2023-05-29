import React ,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import axios from 'axios'
import { Link } from "react-router-dom";


const Moviedetails = () => {

  const [movies,setMovies]= useState([])
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('movie_id');
  
  useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/movies/movie/'+id)
      setMovies(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchMovie()
  },[])
console.log(movies)

const[sessions,setSessions]=useState([]);

useEffect(()=>{
  const fetchSession= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/sessions/getAll/'+id)
      setSessions(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchSession()
  },[])

  

  return (
    <div className='movie-details'>
    <Navbar/>
        {movies.map(movie=>(
          <img className='movie-banner' src={movie.image_banner }/>
          ))}
          <div className="movie-details-box">
              {movies.map(movie=>(
              <div className='details-movie'>
                <h4 className="film-text">{movie.title}</h4>
                <p className="film_detail-text">Yonetmen: {movie.director}</p>
                <p className="film_detail-text">Oyuncular: {movie.cast}</p>
                <p className="film_detail-text">Film Süresi: {movie.duration} dakika</p>
                <p className="film_detail-text">Açıklama: {movie.description}</p> 
              </div>
           ))} 

            <div className='seans-container'>
            <h4 className="seans-text">Seanslar</h4>

            {sessions.map(session=>(
            <div className="details-seans">

               <Link className='seans-saati-link' to={`/ticketsale/?session_id=${session.session_id}`} > 
                <p className="seans-saati"> {session.start} </p>
               </Link>

            </div>
            ))}
            </div>
          </div>
    <Footer/>
    </div>
   
  )

}
export default Moviedetails