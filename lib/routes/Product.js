import express from "express"
import Product from "../models/product.js"

const product = express (); 
// show all products
product.get('/', async(req, res) =>{
    const product = await Product.find({})
    res.json(product)
})
// creating new listing
product.post("/", async(req, res) => {
    const product = await Product.create(req.body)
    res.json(product); 
})



export default product; 