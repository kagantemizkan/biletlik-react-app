import axios from 'axios'
import React from 'react'
import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [user,setUser] = useState({
    username:"",
    password:"",
  })

  const [err,setError] = useState(false)

  const navigate = useNavigate()

  const {login} = useContext(AuthContext)
  

  const handleChange = e =>{
    setUser((prev=>({...prev,[e.target.name]:e.target.value})))
  }


  const handleClick = async e =>{
    e.preventDefault()
    try {
      login(user)
    } catch (err) {
      setError(err.response.data)
    }
      if(user.username === "admin"){
        navigate("/adminpanel")
      }
      else{
      navigate("/")
      }
  }

  return (
    <div className='auth'>
      <h1>LOGIN</h1>
      <form>
      <input type="Text" placeholder='Username' onChange={handleChange}  name='username'/>
      <input type="password" placeholder='Password' onChange={handleChange}  name='password'/>
      <button onClick={handleClick}>Login</button>
      {err&&<p>{err}</p>}
      <span>Hesabın yok mu? <Link to="/register">Hesap Oluştur</Link>
      </span>
      </form>
    </div>
  )
}

export default Login