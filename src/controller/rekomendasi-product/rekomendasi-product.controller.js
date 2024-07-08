const { jsonFormat } = require('../../utils/jsonFormat');
const db = require('../../config/database');

const {
    Product
} = require('../../models/product/index');
const {
    TrxRatingProduct
} = require('../../models/rating-prodact/index');

const {
    nilaiRataRataRatingUser,
    similarityProduct,
} = require('../../utils/rekomendasi-product');

const {
    prediksi
} = require('../../utils/prediksi-product');

const rekomandasiProduct = (req, res) => {
    const idKategoriProduct = req.params.id_kategori_product

    const nilaiRatingUser = nilaiRataRataRatingUser({
        id_kategori_product: idKategoriProduct
    })

    db.query(nilaiRatingUser, {
        type: db.QueryTypes.SELECT
    })
        .then(async (respons) => {
            if (!respons) {
                return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
            }
            Product.findAll({
                where: { id_kategori_product: idKategoriProduct },
                include: {
                    model: TrxRatingProduct,
                    as: 'rating_product'
                }
            })
                .then(async (respons2) => {
                    if (!respons2) {
                        return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
                    }
                    const similarityP1danP2 = await similarityProduct(0, 1, respons2, respons)
                    const similarityP1danP3 = await similarityProduct(0, 2, respons2, respons)
                    const similarityP1danP4 = await similarityProduct(0, 3, respons2, respons)
                    const similarityP1danP5 = await similarityProduct(0, 4, respons2, respons)
                    const similarityP1danP6 = await similarityProduct(0, 5, respons2, respons)
                    const similarityP1danP7 = await similarityProduct(0, 6, respons2, respons)
                    const similarityP1danP8 = await similarityProduct(0, 7, respons2, respons)
                    const similarityP1danP9 = await similarityProduct(0, 8, respons2, respons)
                    const similarityP1danP10 = await similarityProduct(0, 9, respons2, respons)

                    const similarityP2danP3 = await similarityProduct(1, 2, respons2, respons)
                    const similarityP2danP4 = await similarityProduct(1, 3, respons2, respons)
                    const similarityP2danP5 = await similarityProduct(1, 4, respons2, respons)
                    const similarityP2danP6 = await similarityProduct(1, 5, respons2, respons)
                    const similarityP2danP7 = await similarityProduct(1, 6, respons2, respons)
                    const similarityP2danP8 = await similarityProduct(1, 7, respons2, respons)
                    const similarityP2danP9 = await similarityProduct(1, 8, respons2, respons)
                    const similarityP2danP10 = await similarityProduct(1, 9, respons2, respons)

                    const similarityP3danP4 = await similarityProduct(2, 3, respons2, respons)
                    const similarityP3danP5 = await similarityProduct(2, 4, respons2, respons)
                    const similarityP3danP6 = await similarityProduct(2, 5, respons2, respons)
                    const similarityP3danP7 = await similarityProduct(2, 6, respons2, respons)
                    const similarityP3danP8 = await similarityProduct(2, 7, respons2, respons)
                    const similarityP3danP9 = await similarityProduct(2, 8, respons2, respons)
                    const similarityP3danP10 = await similarityProduct(2, 9, respons2, respons)

                    const similarityP4danP5 = await similarityProduct(3, 4, respons2, respons)
                    const similarityP4danP6 = await similarityProduct(3, 5, respons2, respons)
                    const similarityP4danP7 = await similarityProduct(3, 6, respons2, respons)
                    const similarityP4danP8 = await similarityProduct(3, 7, respons2, respons)
                    const similarityP4danP9 = await similarityProduct(3, 8, respons2, respons)
                    const similarityP4danP10 = await similarityProduct(3, 9, respons2, respons)

                    const similarityP5danP6 = await similarityProduct(4, 5, respons2, respons)
                    const similarityP5danP7 = await similarityProduct(4, 6, respons2, respons)
                    const similarityP5danP8 = await similarityProduct(4, 7, respons2, respons)
                    const similarityP5danP9 = await similarityProduct(4, 8, respons2, respons)
                    const similarityP5danP10 = await similarityProduct(4, 9, respons2, respons)

                    const similarityP6danP7 = await similarityProduct(5, 6, respons2, respons)
                    const similarityP6danP8 = await similarityProduct(5, 7, respons2, respons)
                    const similarityP6danP9 = await similarityProduct(5, 8, respons2, respons)
                    const similarityP6danP10 = await similarityProduct(5, 9, respons2, respons)

                    const similarityP7danP8 = await similarityProduct(6, 7, respons2, respons)
                    const similarityP7danP9 = await similarityProduct(6, 8, respons2, respons)
                    const similarityP7danP10 = await similarityProduct(6, 9, respons2, respons)

                    const similarityP8danP9 = await similarityProduct(7, 8, respons2, respons)
                    const similarityP8danP10 = await similarityProduct(7, 9, respons2, respons)

                    const similarityP9danP10 = await similarityProduct(8, 9, respons2, respons)

                    const dataHasilSimilarity = {
                        hasil_similarityP1danP2: similarityP1danP2,
                        hasil_similarityP1danP3: similarityP1danP3,
                        hasil_similarityP1danP4: similarityP1danP4,
                        hasil_similarityP1danP5: similarityP1danP5,
                        hasil_similarityP1danP6: similarityP1danP6,
                        hasil_similarityP1danP7: similarityP1danP7,
                        hasil_similarityP1danP8: similarityP1danP8,
                        hasil_similarityP1danP9: similarityP1danP9,
                        hasil_similarityP1danP10: similarityP1danP10,
                        hasil_similarityP2danP3: similarityP2danP3,
                        hasil_similarityP2danP4: similarityP2danP4,
                        hasil_similarityP2danP5: similarityP2danP5,
                        hasil_similarityP2danP6: similarityP2danP6,
                        hasil_similarityP2danP7: similarityP2danP7,
                        hasil_similarityP2danP8: similarityP2danP8,
                        hasil_similarityP2danP9: similarityP2danP9,
                        hasil_similarityP2danP10: similarityP2danP10,
                        hasil_similarityP3danP4: similarityP3danP4,
                        hasil_similarityP3danP5: similarityP3danP5,
                        hasil_similarityP3danP6: similarityP3danP6,
                        hasil_similarityP3danP7: similarityP3danP7,
                        hasil_similarityP3danP8: similarityP3danP8,
                        hasil_similarityP3danP9: similarityP3danP9,
                        hasil_similarityP3danP10: similarityP3danP10,
                        hasil_similarityP4danP5: similarityP4danP5,
                        hasil_similarityP4danP6: similarityP4danP6,
                        hasil_similarityP4danP7: similarityP4danP7,
                        hasil_similarityP4danP8: similarityP4danP8,
                        hasil_similarityP4danP9: similarityP4danP9,
                        hasil_similarityP4danP10: similarityP4danP10,
                        hasil_similarityP5danP6: similarityP5danP6,
                        hasil_similarityP5danP7: similarityP5danP7,
                        hasil_similarityP5danP8: similarityP5danP8,
                        hasil_similarityP5danP9: similarityP5danP9,
                        hasil_similarityP5danP10: similarityP5danP10,
                        hasil_similarityP6danP7: similarityP6danP7,
                        hasil_similarityP6danP8: similarityP6danP8,
                        hasil_similarityP6danP9: similarityP6danP9,
                        hasil_similarityP6danP10: similarityP6danP10,
                        hasil_similarityP7danP8: similarityP7danP8,
                        hasil_similarityP7danP9: similarityP7danP9,
                        hasil_similarityP7danP10: similarityP7danP10,
                        hasil_similarityP8danP9: similarityP8danP9,
                        hasil_similarityP8danP10: similarityP8danP10,
                        hasil_similarityP9danP10: similarityP9danP10
                    }

                    const prediksiUser1 = prediksi(1, respons2, dataHasilSimilarity)
                    const prediksiUser2 = prediksi(2, respons2, dataHasilSimilarity)
                    const prediksiUser3 = prediksi(3, respons2, dataHasilSimilarity)
                    const prediksiUser4 = prediksi(4, respons2, dataHasilSimilarity)
                    const prediksiUser5 = prediksi(5, respons2, dataHasilSimilarity)
                    // const prediksiUser2 = prediksi(2, respons2)

                    return jsonFormat(res, 200, "success", "Berhasil Memuat Data", {
                        data_product: respons2,
                        // data_rr_rating: respons,
                        // hasil_similarity: dataHasilSimilarity,
                        hasil_prediksi: {
                            prediksi_user1: prediksiUser1,
                            prediksi_user2: prediksiUser2,
                            prediksi_user3: prediksiUser3,
                            prediksi_user4: prediksiUser4,
                            prediksi_user5: prediksiUser5,
                        }
                    })
                })
        })
        .catch((error) => {
            console.log("error gagal memuat data: ", error);
            return jsonFormat(res, 400, "failed", "gagal Memuat Data: " + error)
        })

    // Product.findAll({
    //     where: { id_kategori_product: idKategoriProduct },
    //     include: {
    //         model: TrxRatingProduct,
    //         as: 'rating_product'
    //     }
    // })
    //     .then(async (respons) => {
    //         if (!respons) {
    //             return jsonFormat(res, 204, "success", "Data Tidak Ditemukan")
    //         }
    //         return jsonFormat(res, 200, "success", "Berhasil Memuat Data", {
    //             total_lenth: respons,
    //         })
    //     })
    //     .catch((error) => {
    //         console.log("error gagal memuat data: ", error);
    //         return jsonFormat(res, 400, "failed", "gagal Memuat Data: " + error)
    //     })
}

module.exports = {
    rekomandasiProduct
}