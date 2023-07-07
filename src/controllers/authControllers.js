const UserSchema = require('../models/userSchema');
//importa o schema (template do banco de dados) para usuários 
const bcrypt = require('bcrypt');
//importa o bcrypt para criptografar senhas
const jwt = require('jsonwebtoken'); 
//importa o json web token para gerar tokens

const SECRET = process.env.SECRET; 
//importa a SECRET para ser usada pelo JWT na geracao do token

const login = async (req, res) => {
    try {
        const user = await UserSchema.findOne({ email: req.body.email });
        /*acha um resultado apenas para usuário que
        tenha o email igual ao digitado no body*/
        console.log("User:", user);
        //exibe o usuário no console (este passo é opcional)
              if(!user) {
                //se não achar o usuário pelo email, retorna erro
                return res.status(404).send({
                    message: 'Usuário não encontrado',
                    email: `${req.body.email}`
                });
            }   //usuári não encontrado
            
            /*se chegar aqui, não houve erro e identificamos 
            o usuário, agora vamos ver se as senhas batem*/
            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            /*checa com uma função interna do bcrypt (compareSync)
             se a senha no body (depois de hash) bate com a senha
             hasheada que está salva no banco*/
            console.log("Senha válida?", validPassword)
            /*exibe se é válida (true ou false)
            (este passo é opcional*/
            
            if(!validPassword){
                return res.status(401).send({
                message: "Senha invalida",
                statusCode: 401
                })
            }//se a senha for inválida, erro
            
            //sintaxe: jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({name: user.name}, SECRET);
            //usa o nome cadastrado e o secret para gerar o token
            console.log("Token gerado: ", token)
            //exibe o token (este passo é opcional)
            res.status(200).send({
                message: "Login efetuado com sucesso",
                token
            })//se tudo der certo, devolve o token//
        } catch(err) {
        console.error(err)
    }//catch erro
}
module.exports = {
    login
};
//exporta a função de login