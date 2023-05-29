import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from "framer-motion"
import axios from 'axios';

function Category() {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);


    
    useEffect(()=>{
    const fetchMovie= async()=>{
        try{
        const res = await axios.get('http://localhost:8800/movies/getPoster')
        setPopular(res.data);
        setFiltered(res.data);
        }
        catch(err){
        console.log(err)
        }
    } 
    fetchMovie()
    },[])

    return (
        <div className='category'>
            <Filter activeCategory={activeCategory} setActiveCategory={setActiveCategory} setFiltered={setFiltered}  popular={popular} />
            <motion.div layout className="popular-movies">
                <AnimatePresence>
                {filtered.map((movie) => {
                    return <Movie key={movie.movie_id} movie={movie}/>;
                })}
                </AnimatePresence>
            </motion.div>
        </div>
      );
}


export default Category;