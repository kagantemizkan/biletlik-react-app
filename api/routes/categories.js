import express from "express";
import  {getCat,deleteCat} from "../controllers/category.js"
 
const router = express.Router();

router.get("/get",getCat)
router.delete("/delete/:id",deleteCat )

export default router;