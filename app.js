const express = require("express")
const app = express()
const postsData = require("./data/products.json")

app.get("/",(req, res)=>{
    res.send("hello")
})

app.get("/posts", (req,res)=>{
    res.json(postsData.products)
})
app.listen(3000)

//heroku app deployment