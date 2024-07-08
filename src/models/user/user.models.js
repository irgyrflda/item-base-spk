const db = require("../../config/database"); //import connection database
const { DataTypes } = require("sequelize");
//menggunakan ORM express.js
const User = db.define(
    "User",
    {
        id_user: {
            type: DataTypes.NUMBER(11),
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        }
    },
    {
        timestamps: false,
        tableName: 'ref_users',
    }
)

module.exports = User; //exports module user
//module ini di import di ./src/models/user/index.js