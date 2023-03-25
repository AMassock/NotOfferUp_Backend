import express from "express"

const router = express()
router.use(express.json()); 

router.get("/",(req, res)=>{
    res.send("connected to local host 3000")
})

router.listen(3000, ()=>{
    console.log("listening on port 3000")
})

