const router = require("express").Router();
const {
    getAllProductByKategori,
    getProductById
} = require('../controller/product/index');

router.get('/kategori/:id_kategori_product', getAllProductByKategori)
router.get('/:id_product', getProductById);

module.exports = router;