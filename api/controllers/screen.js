import  {db} from "../db.js";


export const deleteS =(req,res)=>{
    const Id=req.params.id;
    const q="DELETE FROM screens where screen_id=?"
    db.query(q,[Id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })

}

export const getAll = (req, res) => {
    const query = "SELECT * FROM screens"
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}