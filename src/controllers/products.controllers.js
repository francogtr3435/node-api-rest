import * as services from "../services/products.services.js"

export const getAllProducts = (req, res) =>{
    res.json(services.getAllProducts())
}

export const searchProduct =(req, res) =>{
    const {nombre} = req.query

    const products = services.getAllProducts()

    const filteredProducts = products.filter((pro) => 
    pro.nombre.toLowerCase().includes(nombre.toLowerCase())) 
    
    res.json(filteredProducts)
}

export const getProductById = (req,res) => {
const{id} = req.params

//const products = services.getAllProducts()

const p = services.getProductById(id)

if(!p){
    res.status(404).json({error: "no existe el produto"})
}

res.json(p)
}

export const crearProduct = (req,res) => {
    const { nombre, precio, cantidad} = req.body

    const newProduct = model.crearProduct( nombre, precio, cantidad)
    
    res.status(201).json(newProduct)
}

export const deleteProduct = (req, res) =>{
    const productId = parseInt(req.params.id, 10)
    
    const product = model.deleteProduct(productId)   

     if(!product){
        return res.status(404).json({eror: "producto no encontado"})
      }

    res.status(204).send()
}


