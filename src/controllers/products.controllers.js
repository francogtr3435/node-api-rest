import * as model from "../models/products.model.js"

export const getAllProducts = async (req, res) =>{
    const products = await model.getAllProducts()
    res.json(products)
}

export const searchProduct =  (req, res) =>{
    const {nombre} = req.query

    const products =  model.getAllProducts()

    const filteredProducts = products.filter((pro) => 
    pro.nombre.toLowerCase().includes(nombre.toLowerCase())) 
    
    res.json(filteredProducts)
}

export const getProductById = async (req,res) => {
const{id} = req.params

const product =  await model.getProductById(id)

if(!product){
    res.status(404).json({error: "no existe el produto"})
}

res.json(product)
}

export const crearProduct = async (req,res) => {
    const { nombre, precio, cantidad } = req.body

    const newProduct =  await model.crearProduct( nombre, precio, cantidad)
    
    res.status(201).json(newProduct)
}

export const deleteProduct =  async (req, res) =>{
    const productId = parseInt(req.params.id)
    
    const product = await model.deleteProduct(productId)   

     if(!product){
        return res.status(404).json({eror: "producto no encontado"})
      }

    res.status(204).send()
}

//uddate 
//set falta



