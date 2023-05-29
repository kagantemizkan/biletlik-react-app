import express from "express";
import  {getSession,getAll,getz,deleteS,addSession} from "../controllers/session.js"

 
const router = express.Router();

router.post("/add",addSession)
router.post("/get-session",getSession)
router.get("/getAll/:id",getAll)
router.get("/gets",getz)
router.delete("/delete/:id",deleteS)

export default router;