const db = require("../../config/database");
const { DataTypes } = require("sequelize");

const KategoriProduct = db.define(
    "KategoriProduct",
    {
        id_kategori_product: {
            type: DataTypes.NUMBER(11),
            allowNull: false,
            primaryKey: true,
        },
        kategori_product: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    },
    {
        timestamps: false,
        tableName: 'm_kategori_product',
    }
)

module.exports = KategoriProduct;