const {
    formatIdr
} = require('./formatIdr');

const prediksi = (user, product, similarity) => {
    const cekProduct1 = ((product[0].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[0].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct2 = ((product[1].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[1].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct3 = ((product[2].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[2].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct4 = ((product[3].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[3].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct5 = ((product[4].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[4].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct6 = ((product[5].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[5].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct7 = ((product[6].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[6].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct8 = ((product[7].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[7].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct9 = ((product[8].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[8].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    const cekProduct10 = ((product[9].rating_product.filter(i => i.id_user === user)).length === 0) ? false : product[9].rating_product.filter(i => i.id_user === user).map(o => data = { id_product: o.id_product, rating: parseFloat(o.rating) });
    let dataFalse = [
        {
            product: cekProduct1
        }, {
            product: cekProduct2,
        }, {
            product: cekProduct3,
        }, {
            product: cekProduct4,
        }, {
            product: cekProduct5,
        }, {
            product: cekProduct6,
        }, {
            product: cekProduct7,
        }, {
            product: cekProduct8,
        }, {
            product: cekProduct9,
        }, {
            product: cekProduct10
        }];

    const hasFalse = dataFalse.some(element => element.product === false);

    if (hasFalse === false) {
        return [];
    } else {
        const product1 = !(cekProduct1[0]?.rating) ? 0 : cekProduct1[0].rating
        const product2 = !(cekProduct2[0]?.rating) ? 0 : cekProduct2[0].rating
        const product3 = !(cekProduct3[0]?.rating) ? 0 : cekProduct3[0].rating
        const product4 = !(cekProduct4[0]?.rating) ? 0 : cekProduct4[0].rating
        const product5 = !(cekProduct5[0]?.rating) ? 0 : cekProduct5[0].rating
        const product6 = !(cekProduct6[0]?.rating) ? 0 : cekProduct6[0].rating
        const product7 = !(cekProduct7[0]?.rating) ? 0 : cekProduct7[0].rating
        const product8 = !(cekProduct8[0]?.rating) ? 0 : cekProduct8[0].rating
        const product9 = !(cekProduct9[0]?.rating) ? 0 : cekProduct9[0].rating
        const product10 = !(cekProduct10[0]?.rating) ? 0 : cekProduct10[0].rating

        let tampungHasilPrediksi = []
        if (cekProduct1 === false) {
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP1danP2
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP1danP3
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP1danP4
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP1danP5
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP1danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP1danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP1danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP1danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP1danP10

            const productSimilar = (product2 * similarP2) + (product3 * similarP3) +
                (product4 * similarP4) + (product5 * similarP5) +
                (product6 * similarP6) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP2 + similarP3 + similarP4 +
                similarP5 + similarP6 + similarP7 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[0].id_product,
                id_kategori_product: product[0].id_kategori_product,
                link_img: product[0].link_img,
                brand: product[0].brand,
                nama_product: product[0].nama_product,
                detail_product: product[0].detail_product,
                price: formatIdr(product[0].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct2 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP2
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP2danP3
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP2danP4
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP2danP5
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP2danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP2danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP2danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP2danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP2danP10

            const productSimilar = (product1 * similarP1) + (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product6 * similarP6) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) + (product10 * similarP10)

            const similar = similarP1 + similarP3 + similarP4 + similarP5 + similarP6 + similarP7 +
                similarP8 + similarP9 + similarP10

            // console.log("==================================================================");
            // console.log("similar X rating 1 : ", `(${product1} * ${similarP1}) + (${product3} * ${similarP3}) + (${product4} * ${similarP4}) +
            //     (${product5} * ${similarP5}) + (${product6} * ${similarP6}) + (${product7} * ${similarP7}) +
            //     (${product8} * ${similarP8}) + (${product9} * ${similarP9}) + (${product10} * ${similarP10})`);
            // console.log("hasil similar X rating : ", productSimilar);
            // console.log("==================================================================");

            // console.log("==================================================================");
            // console.log("perhitungan similar : ", `${similarP1} + ${similarP3} + 
            // ${similarP4} + ${similarP5} + 
            // ${similarP6} + ${similarP7} +
            // ${similarP8} + ${similarP9} + 
            // ${similarP10}`);
            // console.log("similar : ", similar);
            // console.log("==================================================================");
            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[1].id_product,
                id_kategori_product: product[1].id_kategori_product,
                link_img: product[1].link_img,
                brand: product[1].brand,
                nama_product: product[1].nama_product,
                detail_product: product[1].detail_product,
                price: formatIdr(product[1].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct3 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP3
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP3
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP3danP4
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP3danP5
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP3danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP3danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP3danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP3danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP3danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product4 * similarP4) + (product5 * similarP5) +
                (product6 * similarP6) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP4 +
                similarP5 + similarP6 + similarP7 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[2].id_product,
                id_kategori_product: product[2].id_kategori_product,
                link_img: product[2].link_img,
                brand: product[2].brand,
                nama_product: product[2].nama_product,
                detail_product: product[2].detail_product,
                price: formatIdr(product[2].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct4 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP4
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP4
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP4
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP4danP5
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP4danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP4danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP4danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP4danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP4danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product5 * similarP5) +
                (product6 * similarP6) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP5 + similarP6 + similarP7 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[3].id_product,
                id_kategori_product: product[3].id_kategori_product,
                link_img: product[3].link_img,
                brand: product[3].brand,
                nama_product: product[3].nama_product,
                detail_product: product[3].detail_product,
                price: formatIdr(product[3].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct5 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP5
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP5
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP5
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP5
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP5danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP5danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP5danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP5danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP5danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product6 * similarP6) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP6 + similarP7 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[4].id_product,
                id_kategori_product: product[4].id_kategori_product,
                link_img: product[4].link_img,
                brand: product[4].brand,
                nama_product: product[4].nama_product,
                detail_product: product[4].detail_product,
                price: formatIdr(product[4].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct6 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP6
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP6
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP6
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP6
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP5danP6
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP6danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP6danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP6danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP6danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product7 * similarP7) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP5 + similarP7 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[5].id_product,
                id_kategori_product: product[5].id_kategori_product,
                link_img: product[5].link_img,
                brand: product[5].brand,
                nama_product: product[5].nama_product,
                detail_product: product[5].detail_product,
                price: formatIdr(product[5].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct7 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP7
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP7
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP7
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP7
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP5danP7
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP6danP7
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP7danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP7danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP7danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product6 * similarP6) +
                (product8 * similarP8) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP5 + similarP6 +
                similarP8 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[6].id_product,
                id_kategori_product: product[6].id_kategori_product,
                link_img: product[6].link_img,
                brand: product[6].brand,
                nama_product: product[6].nama_product,
                detail_product: product[6].detail_product,
                price: formatIdr(product[6].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct8 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP8
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP8
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP8
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP8
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP5danP8
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP6danP8
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP7danP8
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP8danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP8danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product6 * similarP6) +
                (product7 * similarP7) + (product9 * similarP9) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP5 + similarP6 +
                similarP7 + similarP9 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[7].id_product,
                id_kategori_product: product[7].id_kategori_product,
                link_img: product[7].link_img,
                brand: product[7].brand,
                nama_product: product[7].nama_product,
                detail_product: product[7].detail_product,
                price: formatIdr(product[7].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct9 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP9
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP9
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP9
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP9
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP5danP9
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP6danP9
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP7danP9
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP8danP9
            const similarP10 = (product10 === 0) ? 0 : similarity.hasil_similarityP9danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product6 * similarP6) +
                (product7 * similarP7) + (product8 * similarP8) +
                (product10 * similarP10)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP5 + similarP6 +
                similarP7 + similarP8 + similarP10

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[8].id_product,
                id_kategori_product: product[8].id_kategori_product,
                link_img: product[8].link_img,
                brand: product[8].brand,
                nama_product: product[8].nama_product,
                detail_product: product[8].detail_product,
                price: formatIdr(product[8].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        if (cekProduct10 === false) {
            const similarP1 = (product1 === 0) ? 0 : similarity.hasil_similarityP1danP10
            const similarP2 = (product2 === 0) ? 0 : similarity.hasil_similarityP2danP10
            const similarP3 = (product3 === 0) ? 0 : similarity.hasil_similarityP3danP10
            const similarP4 = (product4 === 0) ? 0 : similarity.hasil_similarityP4danP10
            const similarP5 = (product5 === 0) ? 0 : similarity.hasil_similarityP5danP10
            const similarP6 = (product6 === 0) ? 0 : similarity.hasil_similarityP6danP10
            const similarP7 = (product7 === 0) ? 0 : similarity.hasil_similarityP7danP10
            const similarP8 = (product8 === 0) ? 0 : similarity.hasil_similarityP8danP10
            const similarP9 = (product9 === 0) ? 0 : similarity.hasil_similarityP9danP10

            const productSimilar = (product1 * similarP1) + (product2 * similarP2) +
                (product3 * similarP3) + (product4 * similarP4) +
                (product5 * similarP5) + (product6 * similarP6) +
                (product7 * similarP7) + (product8 * similarP8) +
                (product9 * similarP9)

            const similar = similarP1 + similarP2 + similarP3 +
                similarP4 + similarP5 + similarP6 +
                similarP7 + similarP8 + similarP9

            const hitung = productSimilar / similar
            tampungHasilPrediksi.push({
                id_product: product[9].id_product,
                id_kategori_product: product[9].id_kategori_product,
                link_img: product[9].link_img,
                brand: product[9].brand,
                nama_product: product[9].nama_product,
                detail_product: product[9].detail_product,
                price: formatIdr(product[9].price),
                prediksi_rating: (parseFloat(hitung.toFixed(2)) > 5) ? 5 : parseFloat(hitung.toFixed(2))
            })
        }
        return tampungHasilPrediksi
    }
    // console.log('===================================================');
    // console.log('cek product user : ' + user, {
    //     hasFalse: hasFalse
    // });
    // console.log('===================================================');
}

module.exports = {
    prediksi
}