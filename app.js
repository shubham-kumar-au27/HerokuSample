const express = require("express")
const app = express()
const postsData = require("./data/products.json")

app.get("/",(req, res)=>{
    res.send("hello")
})

app.get("/posts", (req,res)=>{
    res.json(postsData.products)
})


//heroku app deployment
let PORT = process.env.PORT || 3000

app.listen(PORT)