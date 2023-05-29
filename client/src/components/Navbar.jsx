  import React from 'react'
import Logo from "../img/icon.png"
import SearchBar  from './SearchBar'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const {currentUser,logout} = useContext(AuthContext);


  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
        <Link className='link' to="/"><img src={Logo} className='logo'></img> </Link>


        </div>


        <div className='searchBarDiv'>
          <SearchBar />
        </div>


        <div className="links">
          <Link className='link' to="/login">{currentUser? null:<span>Giriş Yap</span>  }</Link>
          <Link className='link' to="/register">{currentUser? null:<span>Üye Ol</span>  }</Link>
          <Link className='link' to="/accountdetails">{currentUser?.username}</Link>
          <Link className='link' to="/myTickets">{currentUser? <span>Biletlerim</span> : null}</Link>
          {currentUser? <span onClick={ logout } className='link'>Çıkış Yap</span> : null}

        </div>
      </div>
    </div>
  )
};

export default Navbar