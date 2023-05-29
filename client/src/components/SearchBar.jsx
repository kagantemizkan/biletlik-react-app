import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { CgSearch } from "react-icons/cg"


const SearchBar = () => {

  const [movies, setMovies]= useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  
  useEffect(()=>{
  const fetchMovie= async()=>{
    try{
      const res = await axios.get('http://localhost:8800/movies/titles')
      setMovies(res.data)
    }
    catch(err){
      console.log(err)
    }
  } 
  fetchMovie()
  },[])

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = movies.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
  
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className='input-wrapper'>
    
        <CgSearch id="search-icon" />
        
        <div className='data-result-container'>

        <input placeholder='Ara' className='search-input'  value={wordEntered} onChange={handleFilter} />

        {filteredData.length > 0 && filteredData.slice(0, 15).map((value, key) => {
            return (
              <div className='dataResult'>
                <a className="dataItem"  target="_blank" href={'http://localhost:3000/moviedetails/?movie_id='+value.movie_id}key={value.movie_id} >
                  <p>{value.title} </p>
                </a> 
              </div>
            );
           
          })}
          </div>
        
        
    </div>
  );
};

export default SearchBar

