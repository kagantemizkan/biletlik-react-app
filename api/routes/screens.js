import express from "express";
import  {getAll, deleteS} from "../controllers/screen.js"

 
const router = express.Router();

router.get("/getAll",getAll)
router.delete("/delete/:id", deleteS)

export default router;