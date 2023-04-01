import express from "express"
import Product from "../models/product.js"

const product = express (); 
// show all products
product.get('/', async(req, res) =>{
    res.setHeader("Acccess-Control-Allow-Origin", "*")
    const product = await Product.find({})
    res.json(product)
})
// creating new listing
product.post("/", async(req, res) => {
    const product = await Product.create(req.body)
    res.json(product); 
})

//updating product listing
product.put("/:id", async (req, res)=>{
    const product = await Product.findOneAndUpdate(
        {_id: req.params.id},
            req.body, 
            {new: true}
    )
    res.json(product); 
        }
    )
//delete product listing 
product.delete("/:id", async(req, res)=>{
    const product = await Product.findOneAndDelete(
        {_id: req.params.id},
        req.body, 
        {new: true}
    )
    res.json(product)
        }
    )

export default product; 