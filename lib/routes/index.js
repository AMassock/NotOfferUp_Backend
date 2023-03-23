import express from "express"
import Router from "./.js"
import Router from "./js"


const router = express.Router()

router.use("/", Router)
router.use("/", Router)

router.get("/",(req, res)=>{
    res.send("connected to local host 3000")
})

export default router; 