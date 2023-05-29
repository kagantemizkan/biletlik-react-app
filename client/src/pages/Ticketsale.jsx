import React,{ useContext ,useEffect, useState} from 'react'
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Ticketsale = () => {
  const {currentUser} = useContext(AuthContext);
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('session_id');
  const [err,setError] = useState(false)
  const [occupiedSeat,setOccupiedSeats] = useState([]);
  const occupiedSeats = occupiedSeat.map(seat => seat.seat_number-1);
  const [selectedSeats, setSelectedSeats] = React.useState([]);
  const [seatNumbers, setSeatNumbers] = React.useState([...Array(48)].map((_, index) => index + 1));
  const [ticket, setTickets] = useState([]);
  
  useEffect(()=>{
    const fetchSeat= async()=>{
      try{
        const res = await axios.get('http://localhost:8800/bookings/occSeats/'+id)
        setOccupiedSeats(res.data)
      }
      catch(err){
        console.log(err)
      }
    } 
    fetchSeat()
    },[])
    

  const handleSeatClick = (index) => {
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };

  const getSeatClassName = (index) => {
    if(occupiedSeats.includes(index))  {
      return "occupied";
    } else if (selectedSeats.includes(index)) {
      return "selected";
    } else {
      return "";
    }
  };

  ticket.seat_number={selectedSeats}+1;
 
  const handleClick = async e => {
    try{
      const newTickets = selectedSeats.map((seat) => ({
        user_id: currentUser.user_id,
        session_id: id,
        seat_number: seat + 1,
      }));
      await axios.post("http://localhost:8800/bookings/buy-Ticket", { tickets: newTickets });
      console.log("Tickets Successfully Bought");
      window.location.reload()
    }
    catch{
      setError(err.response.data)
    }
  };


  return (
    <>
    <Navbar/>
    
    <div className='ticketsale'>
      
    <div className='screen'><p>Ekran</p></div>

      <ul className="showcase">
      <li>
        <div className="seat" />
        <small>Boş</small>
      </li>
      <li>
        <div className="seat selected" />
        <small>Seçtiğiniz</small>
      </li>
      <li>
        <div className="seat occupied" />
        <small>Dolu</small>
      </li>
      </ul>
         
         <div className="container-ticketsale">
           <div className="row">
           {[...Array(8)].map((_, index) => (
             <div
               key={index}
               className={`seat ${getSeatClassName(index)}`}
               onClick={() => handleSeatClick(index)}
             > <span className="seat-number">{seatNumbers[index]}</span>
               </div>
           ))}
           </div>
           <div className="row">
           {[...Array(8)].map((_, index) => (
             <div
               key={index + 8}
               className={`seat ${getSeatClassName(index+8)}`}  
               onClick={() => handleSeatClick(index + 8)}
             ><span className="seat-number">{seatNumbers[index + 8]}</span>
               </div>
           ))}
           </div>
           <div className="row">
           {[...Array(8)].map((_, index) => (
             <div
               key={index + 16}
               className={`seat ${getSeatClassName(index+16)}`}
               onClick={() => handleSeatClick(index + 16)}
             ><span className="seat-number">{seatNumbers[index + 16]}</span>
               </div>
           ))}
           </div>
           <div className="row">
           {[...Array(8)].map((_, index) => (
             <div
               key={index + 24}
               className={`seat ${getSeatClassName(index+24)}`}
               onClick={() => handleSeatClick(index + 24)}
             ><span className="seat-number">{seatNumbers[index + 24]}</span>
             </div>
           ))}

           
           
           </div>
            <button className='satın-al-buton' onClick={handleClick}>Satın Al</button>
           </div>



     
      </div> 
    <Footer/>
    </>
  )
}

export default Ticketsale