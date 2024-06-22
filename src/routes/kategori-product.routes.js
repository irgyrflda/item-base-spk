const router = require("express").Router();
const {
    getALL
} = require('../controller/kategori-product/index');

router.get('/product', getALL);

module.exports = router;