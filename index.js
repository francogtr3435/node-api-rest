 import  "dotenv/config"
 import express from "express"
 import cors from "cors"
 const app = express()

 app.use(cors())
 app.use(express.json())

 app.get("/", (req, res) =>{
    res.send("api rest en node.js")
})

//import {auth} from "./src/middlewares/auth.middleware.js"

import productsRouter from "./src/routes/products.router.js"
 
app.use("/api", productsRouter)

import authRouter from "./src/routes/auth.router.js"
app.use(authRouter)


 app.use((req,res,next) =>{
    res.status(404).json({ erro: "no encontrado"})
})



const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))








