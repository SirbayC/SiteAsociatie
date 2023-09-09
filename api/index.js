import express from "express"
// import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/postRoute.js"
import cors from "cors"

const PORT = 8800

const app = express()

app.use(express.json())
app.use(cors())


// app.use("/api/auth", authRoutes)
app.use("/api/posts", postRoutes)

app.get('/', (req, res) => {
    res.json("Yess")
  });
  

app.listen(process.env.PORT || PORT,()=>{
    console.log(`Api Running o ${PORT}!`)
})
