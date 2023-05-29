import  {db} from "../db.js";


export const deleteCat =(req,res)=>{
    const Id=req.params.id;
    const q="DELETE FROM categories where category_id=?"
    db.query(q,[Id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })

}

export const getCat = (req, res) => {
    const query = "SELECT * FROM categories"
    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}
