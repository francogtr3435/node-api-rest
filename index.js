 import express from "express"

 const app = express()


 const products=[
    {id:1 , name:"p1", price: 100},
    {id:2 , name: "p2", price: 101 },
    {id:3, name: " p3", price: 102},
 ]
 

 app.get(`/`, (req, res)=>{
    res.send("<h1> hola fg  </h1>")
 })

app.get(`/products`,(req, res)=>{
    res.sent(products)
})

app.get(`/products/:id`,(req, res)=>{
    
    const product = products.find((item) => item.id == req.params.id)
    res.json(product)
})
 const PORT =3000

 app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))



//para ver cambios (desarollo)
//npm install --save-dev nodemon
// "dev": "nodemon index.js"



