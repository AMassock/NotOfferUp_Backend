import express from "express"
import Product from "../models/product.js"

const product = express (); 

product.get('/', async(req, res) =>{
    const product = await Product.find({})
    res.json(product)
})

export default product; 