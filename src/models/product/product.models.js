const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const { KategoriProduct } = require('../kategori-product/index')

const Product = db.define(
    "Product",
    {
        id_kategori_product: {
            type: DataTypes.NUMBER(11),
            allowNull: true
        },
        id_product: {
            type: DataTypes.NUMBER(11),
            allowNull: false,
            primaryKey: true
        },
        link_img: {
            type: DataTypes.TEXT(),
            allowNull: true
        },
        brand: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        nama_product: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        detail_product: {
            type: DataTypes.TEXT(),
            allowNull: true
        },
        price: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'ref_product',
    }
)

KategoriProduct.hasMany(Product, { foreignKey: 'id_kategori_product', as: 'product' });
Product.belongsTo(KategoriProduct, { foreignKey: 'id_kategori_product', as: 'kategori_product'});

module.exports = Product;