import  {db} from "../db.js";

export const addSession = (req, res) => {
    const query= "INSERT INTO sessions (`movie_id`,`screen_id`,`start`,`end`) VALUES (?)"
    const values = [
        req.body.movie_id,
        req.body.screen_id,
        req.body.start,
        req.body.end,
       ]

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("film eklendi");
    })
}
export const getSession = (req, res) => {
    const query= "Select * from  sessions where session_id = ?"
    const value = req.body.session_id;

    db.query(query, value, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })}


    
export const getAll = (req, res) => {
    const Id=req.params.id;
    const query= "Select * from  sessions where movie_id = ? "
    db.query(query, Id, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })}

    export const getz = (req, res) => {
        const query = "SELECT * FROM sessions"
        db.query(query, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
    }

    export const deleteS =(req,res)=>{
        const Id=req.params.id;
        const q="DELETE FROM sessions where session_id=?"
        db.query(q,[Id], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
    }