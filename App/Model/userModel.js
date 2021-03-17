const user = require('../Database/user')

exports.findall = async () =>{
    var select = await user.findAll({ raw: true})
    return select
}

exports.findOne = async (id) =>{
    var select = await user.findByPk(id)
    return select
} 

exports.creat = (nome, sobnome) =>{
    user.create({ nome: nome, sobrenome: sobnome });
}

exports.update = (nome, sobnome, id) =>{
    user.update({ nome: nome, sobrenome: sobnome },{
        where:{
            id: id
        }
    });
}

exports.delete = (id) =>{
    user.destroy({
        where:{
            id: id
        }
    });
}