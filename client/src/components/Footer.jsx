import React from 'react'
import Logo from '../img/icon.png'
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer>
      <img src={Logo}></img>
      <div className='links'>
       <div><Link className='link' to="/iletisim">İletişim</Link></div>
       <div><Link className='link' to="/hakkimizda">Hakkımızda</Link></div>
       <div><Link className='link' to="/sss">Sık Sorulan Sorular</Link></div>
      </div>
    </footer>
  )
}

export default Footer