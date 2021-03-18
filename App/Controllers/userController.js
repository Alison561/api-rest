const user = require('../Model/userModel')


exports.select = async (req, res) =>{
    var sle = await user.findall()
    res.status(200)
    res.json(sle)
}


exports.findOne = async (req, res) =>{
    var sle = await user.findOne(req.params.id)
    res.status(200)
    res.json(sle)
}


exports.insert = (req, res) =>{
    if (req.body.nome == '' || req.body.sobnome == '') {
        res.sendStatus(401)
    } else {
        user.creat(req.body.nome, req.body.sobnome)
        res.sendStatus(200)
    }
}

exports.upadte = async (req, res) =>{
    var select = await user.findOne(req.params.id)
    if (select == undefined) {
        res.sendStatus(404)
    } else if(req.body.nome == '' || req.body.sobnome == ''){
        res.sendStatus(401)
    } else {
        user.update(req.body.nome, req.body.sobnome, req.params.id)
        res.sendStatus(200)
    }
}

exports.delete = async (req, res) =>{
    var select = await user.findOne(req.params.id)
    if (select == undefined) {
        res.sendStatus(404)
    } else {
        user.delete(req.params.id)
        res.sendStatus(200)
    }
}