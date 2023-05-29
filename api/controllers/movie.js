import  {db} from "../db.js";

export const addMovie = (req, res) => {
    const query= "INSERT INTO movies (`title`,`director`,`cast`,`duration`,`description`,`image`,`image_banner`,`category`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.director,
        req.body.cast,
        req.body.duration,
        req.body.description,
        req.body.image,
        req.body.image_banner,
        req.body.category]

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("film eklendi");
    })
}

export const getBanners = (req, res) => {
    const sqlSelect = "select * from moviebanners limit 5"

    db.query(sqlSelect, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
    })
}


export const getPoster = (req, res) => {
    const sqlSelect = "select * from moviePoster "

    db.query(sqlSelect, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
    })
}


export const getTitle = (req, res) => {
    const sqlSelect = "SELECT * from movieTitle"

    db.query(sqlSelect, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
    })
} 

export const getMovie = (req, res) =>{
    const fetchid=req.params.movie_id;
    db.query('SELECT * FROM movies WHERE movie_id = ?', fetchid, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
            console.log(result);
        }
})
}   

export const getz = (req, res) => {
    const query = "SELECT * FROM movies"
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

export const deleteM =(req,res)=>{
    const movieId=req.params.id;
    
    const q="DELETE FROM movies where movie_id=?"
    db.query(q,[movieId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}