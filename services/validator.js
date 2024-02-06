const {check , body} = require("express-validator")


module.exports = {
    validateEmail :check("email").isEmail().withMessage("Digite um email valido").custom((value, {req})=>{
        if (value === "guigui@email.com.br") {
            throw new Error("Ja existe fih")
    
        }
        return true;
    }),
    validateTitle:body('title')
    .isLength({min:5})
    .withMessage("O titulo precisa de pelo menos 5 caracteres")
}