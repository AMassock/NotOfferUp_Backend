import mongoose from '../db/connection.js'
const Schema = mongoose.Schema
const product = new Schema({
    item: "",
    price: Number,
    description: String,
    image: String,
    posted_at: Number,
    title: String
})

export default mongoose.model('product', product)
