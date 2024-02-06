const {validationResult} = require("express-validator")

exports.getPosts = (req, res, next) => {
    res.status(200).json(
        {
            posts: [{
                title: "fist post",
                content: "this is the fist post!"
            }]
        }
    )
}

exports.createPost = (req, res, next) => {
    const title = req.body.title
    const content = req.body.content

    
    const erros = validationResult(req)
    console.log(erros);
    if (!erros.isEmpty()) {

        return res.status(422).send({
            error:true,
            message:erros.array()[0].msg
        })
    }
    
    

    //validação simples 
    if (!title || !content) {
        res.status(400).json({
            error: true,
            msg: "Voce precisa enviar os dados corretamente"
        })
    }

    //add post ao db
        res.status(201).json({
            error: false,
            msg: "Post criado slk"
        })
}
exports.updatePost = (req, res, next)=>{
    const postId = req.params.id;
    console.log(postId)
    res.status(200).json({
        msg:"Post atualizado",
        post:postId
    })

}

exports.deletePost = (req, res, next)=>{
    const postId = req.params.id;
    console.log(postId)
    res.status(200).json({
        msg:"Post deletado",
        post:postId
    })
}
