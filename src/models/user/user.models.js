// const db = require("../../config/database"); //import connection database
// const { DataTypes } = require("sequelize");
// //menggunakan ORM express.js
// const User = db.define(
//     "User",
//     {
//         username: {
//             type: DataTypes.STRING(12),
//             allowNull: false,
//             primaryKey: true,
//         },
//         password: {
//             type: DataTypes.STRING(255),
//             allowNull: false,
//         },
//         user_role: {
//             type: DataTypes.ENUM('admin', 'user'),
//             allowNull: false,
//             defaultValue: 'user'
//         }
//     },
//     {
//         timestamps: false,
//         tableName: 'ref_users',
//     }
// )

// module.exports = User; //exports module user
// //module ini di import di ./src/models/user/index.js