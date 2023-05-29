import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'
import "./adminpanel.scss"

const Tickets = () => {

const[tickets,setTickets]=useState([]);

useEffect(()=>{
  const fetchUser= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/bookings/get-ticket')
      setTickets(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchUser()
  },[])
  const handleDelete= async (id)=>{
    try{
      await axios.delete('http://localhost:8800/bookings/delete/'+id)
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
          <table>
          <tr className='tableRow'>
            <th> booking_id </th>
            <th>session_id</th>
            <th>user</th>
            <th>seat number</th>    
            </tr>
            
        
          {tickets.map(ticket=>(
          <tr key={ticket.booking_id}>
            <th className="tableCell">{ticket.booking_id}</th>
            <th className="tableCell">{ticket.session_id}</th>
            <th className="tableCell">{ticket.user_id}</th>
            <th className="tableCell">{ticket.seat_number}</th>
            <th  className="tableCell"><input type="button" value="sil" onClick={()=>handleDelete(ticket.booking_id)} /> </th>              
            </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}

export default Tickets