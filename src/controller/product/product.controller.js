const { jsonFormat } = require('../../utils/jsonFormat');
const {
    Product
} = require('../../models/product/index');
const {
    TrxRatingProduct
} = require('../../models/rating-prodact/index');

const getAllProductByKategori = (req, res) => {
    const idKategoriProduct = req.params.id_kategori_product

    Product.findAll({
        where: { id_kategori_product: idKategoriProduct }
    })
        .then((respons) => {
            if (!respons) {
                return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
            }
            return jsonFormat(res, 200, "success", "Berhasil Memuat Data", respons)
        })
        .catch((error) => {
            console.log("error get data product by kategori : ", error);
            return jsonFormat(res, 400, "failed", "Gagal Memuat Data Product")
        })
};

const getProductById = (req, res) => {
    const idProduct = req.params.id_product
    console.log("id_product : ", idProduct);

    Product.findAll({
        include: {
            model: TrxRatingProduct,
            as: 'rating_product'
        },
        where: { id_product: idProduct }
    })
        .then((respons) => {
            if (!respons) {
                return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
            }
            return jsonFormat(res, 200, "success", "Berhasil Memuat Data", respons)
        })
        .catch((error) => {
            console.log("error get data product by id product : ", error);
            return jsonFormat(res, 400, "failed", "Gagal Memuat Data Product")
        })
}

module.exports = {
    getAllProductByKategori,
    getProductById
}