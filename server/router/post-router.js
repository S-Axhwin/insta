const express = require('express');
const User = require("../model/User")

const router = express.Router();

router.post('/newpost', (req, res)=>{
    const { username, blog } = req.body;
    console.log(username, blog);
    res.send("OK");
})

router.get("/post", (req, res)=>{
    res.json([
        {
            username: 'ashwin',
            post: 'hi bro'
        }
    ])
})

module.exports = router