import "./sidebar.scss";
import { AuthContext } from '../context/authContext';
import { Link } from "react-router-dom";
import { useContext } from "react";


const SideBar = () => {
  const {currentUser,logout} = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        
          <Link to="/adminpanel" style={{ textDecoration: "none" }}>
          <span className="logo">biletlik admin </span>
       </Link>
       </div>
     
      <hr />
      <div className="center">
        <ul>
        
        <Link className='link' to="/adminpanel" > <li><span>Kullanıcılar</span></li></Link>
        <Link  className='link'to="/bookings" ><li><span>Biletler</span></li></Link>
        <Link  className='link'to="/movies" ><li><span>Filmler</span></li></Link>
        <Link  className='link'to="/kategoriler" ><li><span>Kategoriler</span></li></Link>
        <Link  className='link'to="/screens" ><li><span>Salonlar</span></li></Link>
        <Link  className='link'to="/sessions" ><li><span>Seanslar</span></li></Link>

        <li><span onClick={ logout } ><Link className='link' to="/">Çıkış Yap</Link></span> </li>
         
        </ul>
      </div>
      <div className="bottom">
      </div>
    </div>
  );
};
export default SideBar;