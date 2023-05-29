import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'

import "./adminpanel.scss"
const Session = () => {

const[sessions,setSessions]=useState([]);
const[sessiona,setSessiona]=useState({
  movie_id:null,
  screen_id:null,
  start:null,
  end:null,
})

useEffect(()=>{
  const fetchSession= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/sessions/gets')
      setSessions(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchSession()
  },[])
  
  const handleDelete= async (id)=>{
    try{
      await axios.delete('http://localhost:8800/sessions/delete/'+id)
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }

  const handleUpdate= async (id)=>{
    try{
      await axios.post('http://localhost:8800/sessions/add',sessiona)  
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }
  
  const handleChange = e =>{
    setSessiona((prev=>({...prev,[e.target.name]:e.target.value})))
  }

  return (
    <div className='home'>
      <div><SideBar/></div>
        <div className='homeContainer'>

        <table>
           <tr className='tableRow'>
            <th>movie_id</th>
            <th>screen_id</th>
            <th>start</th>
            <th>end</th>
           </tr>
  
          <tr>
            <th className="tableCell"><input type="number" onChange={handleChange} name="movie_id"/></th>
            <th className="tableCell"><input type="number"  onChange={handleChange} name="screen_id"/></th>
            <th className="tableCell"><input type="number"  onChange={handleChange} name="start"/></th>
            <th className="tableCell"><input type="number" onChange={handleChange}  name="end"/></th>
            <th  className="tableCell"><input type="button" onClick={handleUpdate} value="ekle" /> </th>              
          </tr>
          </table>

          <table>
           <tr className='tableRow'>
            <th>session_id</th>
            <th>movie_id</th>
            <th>screen_id</th>
            <th>start</th>
            <th>end</th>
           </tr>
          {sessions.map(session=>(
          <tr key={session.session_id}>
            <th className="tableCell">{session.session_id}</th>
            <th className="tableCell">{session.movie_id}</th>
            <th className="tableCell">{session.screen_id}</th>
            <th className="tableCell">{session.start}</th>
            <th className="tableCell">{session.end}</th>
            <th  className="tableCell"><input type="button" value="sil" onClick={()=>handleDelete(session.session_id)}/> </th>              
          </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}

export default Session