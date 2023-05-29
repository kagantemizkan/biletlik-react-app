import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'

import "./adminpanel.scss"
const AdminPanel = () => {

const[users,setUsers]=useState([]);
const[userU,setUserU]=useState({
username:"",
email:"",
password:"",
user_id:null,
});

const handleUpdate= async (id)=>{
  try{
    await axios.put('http://localhost:8800/users/update',userU)
    window.location.reload()

  }
  catch(err){
    console.log(err)
  }
}

const handleChange = e =>{
  setUserU((prev=>({...prev,[e.target.name]:e.target.value})))
}

const handleDelete= async (id)=>{
  try{
    await axios.delete('http://localhost:8800/users/delete/'+id)
    window.location.reload()
  }
  catch(err){
    console.log(err)
  }
}


useEffect(()=>{
  const fetchUser= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/users/get')
      setUsers(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchUser()
  },[])

  return (
    <div className='home'>
      <div><SideBar/></div>
        <div className='homeContainer'>

          <table>
          <tr className='tableRow'>
            <th>user_id</th>
            <th>username</th>
            <th>email</th>
            <th></th>

          </tr>
          <tr>
            <th  className="tableCell"> <input type="text" name="user_id" onChange={handleChange} /></th>
              <th className="tableCell"><input type="text" name="username"  onChange={handleChange}  /></th>
              <th className="tableCell"><input type="text" name="email"   onChange={handleChange} /></th>
              
              <th className="tableCell"><input type="button" value="guncelle" onClick={handleUpdate}/></th>
          </tr>
          </table>
          <table>
          <tr className='tableRow'>
            <th>user_id</th>
            <th>username</th>
            <th>email</th>
            
            <th></th>

          </tr>
          {users.map(user=>(
          <tr key={user.user_id}>
            <th  className="tableCell"> {user.user_id} </th>
            <th  className="tableCell">{user.username} </th>
            <th  className="tableCell">{user.email}</th>
            <th  className="tableCell"><input type="button" value="sil" onClick={()=>handleDelete(user.user_id)} /> </th>       
            </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}

export default AdminPanel