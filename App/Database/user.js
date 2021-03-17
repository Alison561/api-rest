const Sequelize = require("sequelize");
const con       = require("./conn")

const user = con.define('user', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = user