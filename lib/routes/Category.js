import express from "express";
import Category from "../models/category.js"

const category = express.Router()

//get all categories
category.get("/", async(req, res) =>{
    const category = await Category.find({})
    res.json(category)
    })

//find by id
category.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id)
    res.json(category)
})

//option to create new item
category.post("/", async(req, res) => {
    const category = await Category.create(req.body)
    res.json(category)
})

export default category; 

