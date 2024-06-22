const { jsonFormat } = require("../../utils/jsonFormat");
const {
    KategoriProduct
} = require('../../models/kategori-product');

const getALL = (req, res) => {
    KategoriProduct.findAll()
        .then((respons) => {
            if (!respons) {
                return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
            }
            return jsonFormat(res, 200, "success", "Berhasil Memuat Data", respons)
        })
        .catch((error) => {
            console.log("Error Get kategori product");
            return jsonFormat(res, "400", "failed", `Gagal Memuat Kategori Product : ${error}`)
        })
}

module.exports = { getALL }