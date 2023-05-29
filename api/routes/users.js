import express from "express";
import  {getUsers,deleteUser,updateUser,getUser} from "../controllers/user.js"
 
const router = express.Router();
router.get("/getdetails/:id",getUser)
router.get("/get",getUsers)
router.delete("/delete/:id",deleteUser )
router.put("/update", updateUser)

export default router;