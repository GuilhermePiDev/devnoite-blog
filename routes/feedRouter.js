const express = require("express")
const router = express.Router();

const listPost = require("../controllers/feedController")


router.get('/posts', listPost.getPosts)

module.exports = router