import express from "express"
import cors from "cors"
import movieRouter from "./routes/movies.js"
import userRouter from "./routes/users.js"
import authRouter from "./routes/auth.js"
import cookieParser from "cookie-parser"
import sessionsRouter from "./routes/sessions.js"
import bookingsRouter from "./routes/bookings.js"
import categoriesRouter from "./routes/categories.js"
import screensRouter from "./routes/screens.js"
import  {db} from "./db.js";


const app = express()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json())

app.use(cookieParser())
app.use("/movies", movieRouter)
app.use("/users", userRouter)
app.use("/auth", authRouter)
app.use("/sessions",sessionsRouter)
app.use("/bookings",bookingsRouter)
app.use("/categories",categoriesRouter)
app.use("/screens",screensRouter)


app.listen(8800, () => {
    console.log("Backend server is running!")
})



