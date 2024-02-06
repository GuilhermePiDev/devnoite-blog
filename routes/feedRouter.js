const express = require("express")
const router = express.Router();

const feedController = require("../controllers/feedController")
const { validateEmail, validateTitle } = require("../services/validator");

router.get('/posts', feedController.getPosts)

router.delete('/post/:id', feedController.deletePost)
router.patch('/post/:id', feedController.updatePost)

router.post("/post",
    validateEmail,
    validateTitle,
    feedController.createPost
)
module.exports = router