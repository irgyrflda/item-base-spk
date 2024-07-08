const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const { Product } = require('../product/index');

const TrxRatingProduct = db.define(
    "TrxRatingProduct",
    {
        id_rating_product: {
            type: DataTypes.NUMBER(11),
            allowNull: false,
            primaryKey: true,
        },
        id_product: {
            type: DataTypes.NUMBER(11),
            allowNull: true
        },
        id_user: {
            type: DataTypes.NUMBER(11),
            allowNull: true
        },
        rating: {
            type: DataTypes.DECIMAL(20, 2),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'trx_rating_product',
    }
)

Product.hasMany(TrxRatingProduct, { foreignKey: 'id_product', as: 'rating_product' });
TrxRatingProduct.belongsTo(Product, { foreignKey: 'id_product', as: 'product' });

module.exports = TrxRatingProduct;