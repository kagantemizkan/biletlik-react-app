import express from "express";
import { addMovie, getBanners,getTitle,getMovie,getz,deleteM,getPoster } from "../controllers/movie.js";

const router = express.Router();


router.get("/get",getz)

router.get("/getPoster", getPoster)

router.post("/addmovie",addMovie)

router.get("/titles",getTitle)

router.get("/banners",getBanners)

router.get("/movie/:movie_id",getMovie)

router.delete("/delete/:id",deleteM)

export default router;