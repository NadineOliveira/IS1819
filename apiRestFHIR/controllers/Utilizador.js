var Utilizador = require('./associations').Utilizador
var bcrypt = require('bcrypt')


module.exports.isValidPassword = async (u,p) => {
    var utilizador = await this.getUtilizadorID(username)
    
    if(!utilizador){
        return -2
    }

    var compare = await bcrypt.compare(utilizador.password,p)

    if(!compare){
        return -1
    }

    return 1
}