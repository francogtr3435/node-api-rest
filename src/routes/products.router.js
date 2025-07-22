import { Router } from "express";

const router = Router()

 const products=[
   {id: 1 , nombre:"subaru", precio: 10, cantidad:10 },  
   {id: 2 , nombre:"bmw", precio: 20, cantidad:20 }, 
   {id: 3 , nombre:"mazda", precio: 30, cantidad:30 }, 
   {id: 4 , nombre:"audi", precio: 40, cantidad:40 }, 
   {id: 5 , nombre:"toyota", precio: 50, cantidad:50 }, 
 ]

import { crearProduct, 
         getAllProducts, 
         getProductById, 
         searchProduct, 
         deleteProduct }
        from "../controllers/products.controllers.js";

import {auth} from "../middlewares/auth.middleware.js"
        
router.get("/products", getAllProducts)
router.get("/products/search", searchProduct)
router.get("/products/:id", getProductById)
router.post("/products", auth,  crearProduct)
router.delete("/products/:id" , deleteProduct)

//modificar producto pisandolo(objeto completo)
router.put(`/products/:id` ,(req, res) => {
    const productId = parseInt(req.params.id, 10)
    const produCtIndex = products.findIndex((p) =>p.id == productId) 
    
    if(produCtIndex === -1){
     return res.status(404).json({ error: "producto no encontrado"})   
    }

    const{ nombre, precio , cantidad} = req.body

    products[produCtIndex] = {id: productId, nombre, precio, cantidad}
    res.json(products[produCtIndex])
})

export default router

