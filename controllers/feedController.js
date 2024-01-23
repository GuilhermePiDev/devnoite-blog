exports.getPosts = (req , res , next) =>{
    res.status(200).json(
        {
            posts: [{title:"fist post",
             content: "this is the fist post!"}]
        }
    )
}