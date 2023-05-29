import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [user,setUser] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err,setError] = useState(false)

  const navigate = useNavigate()


  const handleChange = e =>{
    setUser((prev=>({...prev,[e.target.name]:e.target.value})))
  }


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/auth/register",user)
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }
  console.log(user)
  return (
    <div className='auth'>
    <h1>REGISTER</h1>
    <form>
    <input required type="Text" placeholder='Username' onChange={handleChange}  name='username'/>
    <input required type="email" placeholder='Email' onChange={handleChange}  name='email' />
    <input required type="password" placeholder='Password' onChange={handleChange}  name='password' />
    <button onClick={handleClick}>Register</button>
    {err &&<p>{err}</p>}
    <span>Zaten hesabın var mı? <Link to="/login">Giriş Yap</Link>
    </span>
    </form>
  </div>
  )
}

export default Register