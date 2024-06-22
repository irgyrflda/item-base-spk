//INDEX ROUTES
const router = require("express").Router();

const kategoriProduct = require('./kategori-product.routes');
const product = require('../routes/product.routes');

// const User = require('./users-routes'); //import routes user

// router.use('/user', User) //url user

router.use('/kategori', kategoriProduct);
router.use('/product', product);

module.exports = router //exports router
//module ini di import di index.js depan