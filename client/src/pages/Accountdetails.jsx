import React ,{useState,useEffect,useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import axios from 'axios'
import { AuthContext } from '../context/authContext';
import { Link } from "react-router-dom";



const Accountdetails = () => {


  const [detail,Setdetails]= useState([])
  const {currentUser} = useContext(AuthContext);
  const [users,setUser] = useState({
    oldPassword:"",
    newPassword:"",
  })

  useEffect(()=>{
  const fetchDetail= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/users/getdetails/'+currentUser.user_id)
      Setdetails(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchDetail()
  },[])


  const handleChange = e =>{
    setUser((prev=>({...prev,[e.target.name]:e.target.value})))
  }


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/auth/changepass/"+currentUser.user_id,users)
      console.log("degisti")
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
    <Navbar/>
    <div className='account-details'>
      <div className='account-details-container'>
        
        <h2>Üyelik Bilgileri</h2>
        {detail.map(d=>(
            <div className='user-infos'>
              <div className="user-name">Kullanıcı Adı:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                <div className='aaa'> {d.username} </div> 
              </div> 
              <div className="user-epost">E-Posta Adresi:&nbsp;&nbsp;&nbsp;<div> {d.email} </div> </div>
            </div>
            ))} 

            <div className='sifre-degistir-container'>
              <div>
                Eski Şifrenizi Giriniz: <input className='sifre' type="Text" placeholder='Eski Şifre' onChange={handleChange}  name='oldPassword'/>
              </div>
              <div>
                Yeni Şifrenizi Giriniz: <input className='sifre' type="text" placeholder='Yeni Şifre' onChange={handleChange}  name='newPassword'/>
              </div>  
              <button className='sifre-defistir-button' onClick={handleClick}>Degistir</button>
      
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Accountdetails