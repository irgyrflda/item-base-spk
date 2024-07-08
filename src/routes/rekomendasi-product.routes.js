const router = require("express").Router();
const {
    rekomandasiProduct
} = require('../controller/rekomendasi-product/index');

router.get('/product/:id_kategori_product', rekomandasiProduct);

module.exports = router;