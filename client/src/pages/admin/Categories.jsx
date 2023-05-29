import React, { useEffect, useState } from 'react'
import SideBar from '../../components/Sidebar'
import axios from 'axios'

import "./adminpanel.scss"
const Categories = () => {

const[cats,setCats]=useState([]);

useEffect(()=>{
  const fetchCat= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/categories/get')
      setCats(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchCat()
  },[])

  const handleDelete= async (id)=>{
    try{
      await axios.delete('http://localhost:8800/categories/delete/'+id)
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
              <th>id</th>
              <th>category</th>
            </tr>
          {cats.map(cat=>(
          <tr key={cat.category_id}>
            <th className="tableCell">{cat.category_id}</th>
            <th className="tableCell">{cat.category_name}</th>
            <th  className="tableCell"><input type="button" value="sil"  onClick={()=>handleDelete(cat.category_id)} /> </th>              
            </tr>
          ))}
          </table>
        </div>
    </div>
    
  )
}

export default Categories