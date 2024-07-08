const nilaiRataRataRatingUser = (val) => {
    const query = `SELECT a.id_user, b.total_rating, c.total_penilai,
    ROUND((b.total_rating / c.total_penilai), 1) rr
    FROM (SELECT a.id_user, a.username, b.id_rating_product, b.rating,
    c.id_product, c.nama_product
    FROM ref_user a
    JOIN trx_rating_product b
    ON a.id_user = b.id_user
    JOIN ref_product c
    ON b.id_product = c.id_product
    WHERE c.id_kategori_product = ${val.id_kategori_product} 
    ORDER BY a.id_user) a
    JOIN (SELECT a.id_user, a.username,
    SUM(b.rating) total_rating
    FROM ref_user a
    JOIN trx_rating_product b
    ON a.id_user = b.id_user
    JOIN ref_product c
    ON b.id_product = c.id_product
    WHERE c.id_kategori_product = ${val.id_kategori_product}
    GROUP BY a.id_user
    ORDER BY a.id_user) b
    ON a.id_user = b.id_user
    JOIN (SELECT a.id_user, a.username,
    COUNT(b.rating) total_penilai
    FROM ref_user a
    JOIN trx_rating_product b
    ON a.id_user = b.id_user
    JOIN ref_product c
    ON b.id_product = c.id_product
    WHERE c.id_kategori_product = ${val.id_kategori_product} 
    GROUP BY a.id_user
    ORDER BY a.id_user) c
    ON a.id_user = c.id_user
    GROUP BY a.id_user
    ORDER BY a.id_product, a.id_user`

    return query;
}

const Product = async (array, product) => {

    const productUser1 = await product[array]?.rating_product.filter(i => i.id_user === 1).map(o => data = { rating: o.rating })
    const productUser2 = await product[array]?.rating_product.filter(i => i.id_user === 2).map(o => data = { rating: o.rating })
    const productUser3 = await product[array]?.rating_product.filter(i => i.id_user === 3).map(o => data = { rating: o.rating })
    const productUser4 = await product[array]?.rating_product.filter(i => i.id_user === 4).map(o => data = { rating: o.rating })
    const productUser5 = await product[array]?.rating_product.filter(i => i.id_user === 5).map(o => data = { rating: o.rating })

    return {
        p_u1: productUser1,
        p_u2: productUser2,
        p_u3: productUser3,
        p_u4: productUser4,
        p_u5: productUser5,
    }
}

const similarityProduct = async (productSatu, productDua, product, nilaiRataRata) => {

    const nilaiProduct1PerUser = await Product(productSatu, product)
    const nilaiProduct2PerUser = await Product(productDua, product)

    const P1u1 = nilaiProduct1PerUser.p_u1
    const P1u2 = nilaiProduct1PerUser.p_u2
    const P1u3 = nilaiProduct1PerUser.p_u3
    const P1u4 = nilaiProduct1PerUser.p_u4
    const P1u5 = nilaiProduct1PerUser.p_u5

    const P2u1 = nilaiProduct2PerUser.p_u1
    const P2u2 = nilaiProduct2PerUser.p_u2
    const P2u3 = nilaiProduct2PerUser.p_u3
    const P2u4 = nilaiProduct2PerUser.p_u4
    const P2u5 = nilaiProduct2PerUser.p_u5

    const ratingP1u1 = !(P1u1[0]?.rating) ? 0 : parseFloat(P1u1[0]?.rating);
    const ratingP1u2 = !(P1u2[0]?.rating) ? 0 : parseFloat(P1u2[0]?.rating);
    const ratingP1u3 = !(P1u3[0]?.rating) ? 0 : parseFloat(P1u3[0]?.rating);
    const ratingP1u4 = !(P1u4[0]?.rating) ? 0 : parseFloat(P1u4[0]?.rating);
    const ratingP1u5 = !(P1u5[0]?.rating) ? 0 : parseFloat(P1u5[0]?.rating);

    const ratingP2u1 = !(P2u1[0]?.rating) ? 0 : parseFloat(P2u1[0]?.rating);
    const ratingP2u2 = !(P2u2[0]?.rating) ? 0 : parseFloat(P2u2[0]?.rating);
    const ratingP2u3 = !(P2u3[0]?.rating) ? 0 : parseFloat(P2u3[0]?.rating);
    const ratingP2u4 = !(P2u4[0]?.rating) ? 0 : parseFloat(P2u4[0]?.rating);
    const ratingP2u5 = !(P2u5[0]?.rating) ? 0 : parseFloat(P2u5[0]?.rating);

    const nilaiRrU1 = parseFloat(nilaiRataRata[0].rr)
    const nilaiRrU2 = parseFloat(nilaiRataRata[1].rr)
    const nilaiRrU3 = parseFloat(nilaiRataRata[2].rr)
    const nilaiRrU4 = parseFloat(nilaiRataRata[3].rr)
    const nilaiRrU5 = parseFloat(nilaiRataRata[4].rr)

    const aP1u1 = ratingP1u1 - ((ratingP1u1 === 0) ? 0 : nilaiRrU1);
    const aP2u1 = ratingP2u1 - ((ratingP2u1 === 0) ? 0 : nilaiRrU1);
    const aP1u2 = ratingP1u2 - ((ratingP1u2 === 0) ? 0 : nilaiRrU2);
    const aP2u2 = ratingP2u2 - ((ratingP2u2 === 0) ? 0 : nilaiRrU2);
    const aP1u3 = ratingP1u3 - ((ratingP1u3 === 0) ? 0 : nilaiRrU3);
    const aP2u3 = ratingP2u3 - ((ratingP2u3 === 0) ? 0 : nilaiRrU3);
    const aP1u4 = ratingP1u4 - ((ratingP1u4 === 0) ? 0 : nilaiRrU4);
    const aP2u4 = ratingP2u4 - ((ratingP2u4 === 0) ? 0 : nilaiRrU4);
    const aP1u5 = ratingP1u5 - ((ratingP1u5 === 0) ? 0 : nilaiRrU5);
    const aP2u5 = ratingP2u5 - ((ratingP2u5 === 0) ? 0 : nilaiRrU5);

    const pangkat2aP1u1 = (ratingP1u1 === 0 || ratingP2u1 === 0) ? 0 : aP1u1 ** 2;
    const pangkat2aP1u2 = (ratingP1u2 === 0 || ratingP2u2 === 0) ? 0 : aP1u2 ** 2;
    const pangkat2aP1u3 = (ratingP1u3 === 0 || ratingP2u3 === 0) ? 0 : aP1u3 ** 2;
    const pangkat2aP1u4 = (ratingP1u4 === 0 || ratingP2u4 === 0) ? 0 : aP1u4 ** 2;
    const pangkat2aP1u5 = (ratingP1u5 === 0 || ratingP2u5 === 0) ? 0 : aP1u5 ** 2;
    const pangkat2aP2u1 = (ratingP2u1 === 0 || ratingP1u1 === 0) ? 0 : aP2u1 ** 2;
    const pangkat2aP2u2 = (ratingP2u2 === 0 || ratingP1u2 === 0) ? 0 : aP2u2 ** 2;
    const pangkat2aP2u3 = (ratingP2u3 === 0 || ratingP1u3 === 0) ? 0 : aP2u3 ** 2;
    const pangkat2aP2u4 = (ratingP2u4 === 0 || ratingP1u4 === 0) ? 0 : aP2u4 ** 2;
    const pangkat2aP2u5 = (ratingP2u5 === 0 || ratingP1u5 === 0) ? 0 : aP2u5 ** 2;

    // console.log("====================TEST SATU==========================");
    // console.log("product " + `${(productSatu + 1)} dan ${productDua + 1} : `, `${(aP1u1)} * ${(aP2u1)} + ${(aP1u2)} * ${(aP2u2)} + ${(aP1u3)} * ${(aP2u3)} + ${(aP1u4)} * ${(aP2u4)} + ${(aP1u5)} * ${(aP2u5)}`);
    // console.log("=======================================================");

    // console.log("====================TEST DUA==========================");
    // console.log(`${pangkat2aP1u1} + ${pangkat2aP1u2} + ${pangkat2aP1u3} + ${pangkat2aP1u4} + ${pangkat2aP1u5}`);
    // console.log("=======================================================");

    // console.log("====================TEST TIGA==========================");
    // console.log(`${pangkat2aP2u1} + ${pangkat2aP2u2} + ${pangkat2aP2u3} + ${pangkat2aP2u4} + ${pangkat2aP2u5}`);
    // console.log("=======================================================");

    const perhitungan1P1P2 = (aP1u1) * (aP2u1) + (aP1u2) * (aP2u2) + (aP1u3) * (aP2u3) + (aP1u4) * (aP2u4) + (aP1u5) * (aP2u5)

    const perhitungan2P1P2 = Math.sqrt(pangkat2aP1u1 + pangkat2aP1u2 + pangkat2aP1u3 + pangkat2aP1u4 + pangkat2aP1u5)
    const perhitungan3P1P2 = Math.sqrt(pangkat2aP2u1 + pangkat2aP2u2 + pangkat2aP2u3 + pangkat2aP2u4 + pangkat2aP2u5)

    // console.log("====================TEST EMPAT==========================");
    // console.log(`ini ${perhitungan2P1P2} dikali ${perhitungan3P1P2}`);
    // console.log("=======================================================");

    // console.log("====================TEST LIMA==========================");
    // console.log(`ini ${perhitungan1P1P2} dibagi ${0}`);
    // console.log("=======================================================");

    const perhitunganHasilP1P2 = perhitungan1P1P2 / (perhitungan2P1P2 * perhitungan3P1P2)

    // console.log("====================TEST ENAM==========================");
    // console.log(`Hasil : ${!(perhitunganHasilP1P2) ? 0 : perhitunganHasilP1P2}`);
    // console.log("=======================================================");

    return parseFloat(!(perhitunganHasilP1P2) ? 0 : perhitunganHasilP1P2.toFixed(2));
}

// const similarityProduct1dan2 = async (product, nilaiRataRata) => {

//     const P1u1 = await product[0]?.rating_product.filter(i => i.id_user === 1).map(o => data = { rating: o.rating })
//     const P1u2 = await product[0]?.rating_product.filter(i => i.id_user === 2).map(o => data = { rating: o.rating })
//     const P1u3 = await product[0]?.rating_product.filter(i => i.id_user === 3).map(o => data = { rating: o.rating })
//     const P1u4 = await product[0]?.rating_product.filter(i => i.id_user === 4).map(o => data = { rating: o.rating })
//     const P1u5 = await product[0]?.rating_product.filter(i => i.id_user === 5).map(o => data = { rating: o.rating })

//     const P2u1 = await product[1]?.rating_product.filter(i => i.id_user === 1).map(o => data = { rating: o.rating })
//     const P2u2 = await product[1]?.rating_product.filter(i => i.id_user === 2).map(o => data = { rating: o.rating })
//     const P2u3 = await product[1]?.rating_product.filter(i => i.id_user === 3).map(o => data = { rating: o.rating })
//     const P2u4 = await product[1]?.rating_product.filter(i => i.id_user === 4).map(o => data = { rating: o.rating })
//     const P2u5 = await product[1]?.rating_product.filter(i => i.id_user === 5).map(o => data = { rating: o.rating })

//     const ratingP1u1 = !(P1u1[0]?.rating) ? 0 : parseFloat(P1u1[0]?.rating);
//     const ratingP1u2 = !(P1u2[0]?.rating) ? 0 : parseFloat(P1u2[0]?.rating);
//     const ratingP1u3 = !(P1u3[0]?.rating) ? 0 : parseFloat(P1u3[0]?.rating);
//     const ratingP1u4 = !(P1u4[0]?.rating) ? 0 : parseFloat(P1u4[0]?.rating);
//     const ratingP1u5 = !(P1u5[0]?.rating) ? 0 : parseFloat(P1u5[0]?.rating);

//     const ratingP2u1 = !(P2u1[0]?.rating) ? 0 : parseFloat(P2u1[0]?.rating);
//     const ratingP2u2 = !(P2u2[0]?.rating) ? 0 : parseFloat(P2u2[0]?.rating);
//     const ratingP2u3 = !(P2u3[0]?.rating) ? 0 : parseFloat(P2u3[0]?.rating);
//     const ratingP2u4 = !(P2u4[0]?.rating) ? 0 : parseFloat(P2u4[0]?.rating);
//     const ratingP2u5 = !(P2u5[0]?.rating) ? 0 : parseFloat(P2u5[0]?.rating);

//     const nilaiRrU1 = parseFloat(nilaiRataRata[0].rr)
//     const nilaiRrU2 = parseFloat(nilaiRataRata[1].rr)
//     const nilaiRrU3 = parseFloat(nilaiRataRata[2].rr)
//     const nilaiRrU4 = parseFloat(nilaiRataRata[3].rr)
//     const nilaiRrU5 = parseFloat(nilaiRataRata[4].rr)

//     const aP1u1 = ratingP1u1 - ((ratingP1u1 === 0) ? 0 : nilaiRrU1);
//     const aP2u1 = ratingP2u1 - ((ratingP2u1 === 0) ? 0 : nilaiRrU1);
//     const aP1u2 = ratingP1u2 - ((ratingP1u2 === 0) ? 0 : nilaiRrU2);
//     const aP2u2 = ratingP2u2 - ((ratingP2u2 === 0) ? 0 : nilaiRrU2);
//     const aP1u3 = ratingP1u3 - ((ratingP1u3 === 0) ? 0 : nilaiRrU3);
//     const aP2u3 = ratingP2u3 - ((ratingP2u3 === 0) ? 0 : nilaiRrU3);
//     const aP1u4 = ratingP1u4 - ((ratingP1u4 === 0) ? 0 : nilaiRrU4);
//     const aP2u4 = ratingP2u4 - ((ratingP2u4 === 0) ? 0 : nilaiRrU4);
//     const aP1u5 = ratingP1u5 - ((ratingP1u5 === 0) ? 0 : nilaiRrU5);
//     const aP2u5 = ratingP2u5 - ((ratingP2u5 === 0) ? 0 : nilaiRrU5);

//     const pangkat2aP1u1 = (ratingP1u1 === 0 || ratingP2u1 === 0) ? 0 : aP1u1 ** 2;
//     const pangkat2aP1u2 = (ratingP1u2 === 0 || ratingP2u2 === 0) ? 0 : aP1u2 ** 2;
//     const pangkat2aP1u3 = (ratingP1u3 === 0 || ratingP2u3 === 0) ? 0 : aP1u3 ** 2;
//     const pangkat2aP1u4 = (ratingP1u4 === 0 || ratingP2u4 === 0) ? 0 : aP1u4 ** 2;
//     const pangkat2aP1u5 = (ratingP1u5 === 0 || ratingP2u5 === 0) ? 0 : aP1u5 ** 2;
//     const pangkat2aP2u1 = (ratingP2u1 === 0 || ratingP1u1 === 0) ? 0 : aP2u1 ** 2;
//     const pangkat2aP2u2 = (ratingP2u2 === 0 || ratingP1u2 === 0) ? 0 : aP2u2 ** 2;
//     const pangkat2aP2u3 = (ratingP2u3 === 0 || ratingP1u3 === 0) ? 0 : aP2u3 ** 2;
//     const pangkat2aP2u4 = (ratingP2u4 === 0 || ratingP1u4 === 0) ? 0 : aP2u4 ** 2;
//     const pangkat2aP2u5 = (ratingP2u5 === 0 || ratingP1u5 === 0) ? 0 : aP2u5 ** 2;

//     const perhitungan1P1P2 = (aP1u1) * (aP2u1) + (aP1u2) * (aP2u2) + (aP1u3) * (aP2u3) + (aP1u4) * (aP2u4) + (aP1u5) * (aP2u5)

//     const perhitungan2P1P2 = Math.sqrt(pangkat2aP1u1 + pangkat2aP1u2 + pangkat2aP1u3 + pangkat2aP1u4 + pangkat2aP1u5)
//     const perhitungan3P1P2 = Math.sqrt(pangkat2aP2u1 + pangkat2aP2u2 + pangkat2aP2u3 + pangkat2aP2u4 + pangkat2aP2u5)

//     const perhitunganHasilP1P2 = perhitungan1P1P2 / (perhitungan2P1P2 * perhitungan3P1P2)

//     return parseFloat(perhitunganHasilP1P2.toFixed(2));
// }

module.exports = {
    nilaiRataRataRatingUser,
    similarityProduct
}