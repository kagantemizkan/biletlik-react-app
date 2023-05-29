import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'

import "./adminpanel.scss"
const Screens = () => {

const[screens,setScreens]=useState([]);

useEffect(()=>{
  const fetchScreen= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/screens/getAll')
      setScreens(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchScreen()
  },[])


  const handleDelete= async (id)=>{
    try{
      await axios.delete('http://localhost:8800/screens/delete/'+id)
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='home'>
      <div><SideBar/></div>
        <div className='homeContainer'>

          <table >
            <tr className='tableRow'>
              <th>screen_id</th>
              <th>name</th>
              <th>capacity</th>
            </tr>
          {screens.map(screen=>(
          <tr key={screen.screen_id}>
            <th className="tableCell">{screen.screen_id}</th>
            <th className="tableCell">{screen.name}</th>
            <th className="tableCell">{screen.capacity}</th>
            <th  className="tableCell"><input type="button" value="sil" onClick={()=>handleDelete(screen.screen_id)}  /> </th>    
          </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}

export default Screens