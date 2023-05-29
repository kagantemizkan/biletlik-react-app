import { useEffect } from "react";


function Filter({setActiveCategory, activeCategory, setFiltered, popular}){
    
    useEffect(() => {
        if(activeCategory === 0){
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.category_id === activeCategory);
        setFiltered(filtered);
    }, [activeCategory])
    
    return(
        <div className="filter-container">
            <button className={activeCategory === 0 ? "active" : ""} onClick={() => setActiveCategory(0)}>Tüm Filmler</button>
            <button className={activeCategory === 2 ? "active" : ""} onClick={() => setActiveCategory(2)}>Aksiyon</button>
            <button className={activeCategory === 1 ? "active" : ""} onClick={() => setActiveCategory(1)}>Komedi</button>
            <button className={activeCategory === 4 ? "active" : ""} onClick={() => setActiveCategory(4)}>Drama</button>
            <button className={activeCategory === 3 ? "active" : ""} onClick={() => setActiveCategory(3)}>Aile</button>
        </div>
    );
}

export default Filter;