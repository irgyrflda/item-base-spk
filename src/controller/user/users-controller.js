// const { jsonFormat } = require("../../utils/jsonFormat");
// const { User } = require('../../models/user/index');

// const Login = (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
//     User.findOne({
//         where: { username: username },
//         attributes: ['username', 'password', 'user_role', 'createdAdd']
//     })
//         .then((data) => {
//             if (!data) {
//                 return jsonFormat(res, 204, "datanull", "User Tidak Ditemukan")
//             }
//             return User.findOne({
//                 where: {
//                     username: username,
//                     password: password
//                 },
//                 attributes: ['username', 'user_role']
//             })
//                 .then((dataUser) => {
//                     if (!dataUser) {
//                         return jsonFormat(res, 204, "datanull", "Password Salah")
//                     }
//                     return jsonFormat(res, 200, "success", "Berhasil Login", dataUser)
//                 })
//         })
//         .catch((error) => {
//             return jsonFormat(res, 400, "failed", "Ada Kesalahan Pada Service" + error)
//         })
// }

// const Register = (req, res) => {
//     const username = req.body.username
//     const password = req.body.password
//     const confrimPassword = req.body.confrim_password
//     if (confrimPassword !== password) {
//         return jsonFormat(res, 400, "failed", "Pastikan konfrimasi password sama dengan pasword")
//     }
//     User.findOne({
//         where: { username: username },
//         attributes: ["user_role"]
//     })
//         .then((dataConfrim) => {
//             if (dataConfrim !== null) {
//                 return jsonFormat(res, 202, "success", "Username Tersebut Sudah Terdaftar")
//             }
//             return User.create({
//                 username: username,
//                 password: password
//             })
//                 .then((respon) => {
//                     if (!respon) {
//                         return jsonFormat(res, 202, "success", "Ada Kesalahan Pada Service")
//                     }
//                     return jsonFormat(res, 200, "success", "Berhasil regis, silahkan login")
//                 })
//         })
//         .catch((error) => {
//             return jsonFormat(res, 400, "failed", "Ada Kesalahan Pada Service" + error)
//         })
// }

// const UpdatePassword = (req, res) => {
//     const username = req.params.username
//     const password = req.body.new_password
//     const confrimPassword = req.body.confrim_password
//     if (confrimPassword !== password) {
//         return jsonFormat(res, 400, "failed", "Pastikan konfrimasi password sama dengan pasword")
//     }
//     User.findOne({
//         where: { username: username },
//         attributes: ["user_role"]
//     })
//         .then((dataConfrim) => {
//             if (dataConfrim === null) {
//                 return jsonFormat(res, 202, "success", "Username Tersebut Tidak Terdaftar")
//             }
//             return User.update({
//                 password: password
//             }, { where: { username: username } })
//                 .then((respon) => {
//                     if (!respon) {
//                         return jsonFormat(res, 202, "success", "Ada Kesalahan Pada Service")
//                     }
//                     return jsonFormat(res, 200, "success", "Berhasil mengubah password, silahkan login")
//                 })
//         })
//         .catch((error) => {
//             return jsonFormat(res, 400, "failed", "Ada Kesalahan Pada Service" + error)
//         })
// }

// module.exports = {
//     Login,
//     Register,
//     UpdatePassword
// }