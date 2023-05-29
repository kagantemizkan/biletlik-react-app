import  {db} from "../db.js";
import bcrypt from "bcryptjs";


   export const updateUser =(req,res)=>{
    const q="Update users Set `username`=?,`email`=?, `password`=? where `user_id`=?"
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt)

    const values=[
        req.body.username,
        req.body.email,
        hash,
        req.body.user_id 
    ]

    db.query(q,values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })}

    export const deleteUser =(req,res)=>{
        const userId=req.params.id;
        const q="DELETE FROM users where user_id=?"
        db.query(q,[userId], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })

   }

   export const getUser = (req, res) => {
    const userId=req.params.id;
    const query = "SELECT * FROM users where user_id=?"
    db.query(query,userId, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
}

    export const getUsers = (req, res) => {
        const query = "SELECT * FROM users"
        db.query(query, (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
        })
    }

    
  