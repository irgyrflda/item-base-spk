//menggunakan raw query database
const UserRow = (val) => {
//dengan kondisi
    let query
    switch (val.method) {
        case 'GET_ALL':
            query = 'SELECT username, password, user_role FROM ref_users'
            break;
        case 'GET_BY_ID':
            query = `SELECT username, password, user_role FROM ref_users WHERE username = ${val.username}`
            break;
        case 'GET_BY_ROLE':
            query = `SELECT username, password, user_role FROM ref_users WHERE user_role = ${JSON.stringify(val.role)}`
            break;
        case 'POST':
            query = `INSERT INTO ref_users (username, password) VALUES (${JSON.stringify(val.username)}, ${JSON.stringify(val.password)})`
            break;
        case 'PUT':
            query = `UPDATE ref_users SET password = ${JSON.stringify(val.password)} WHERE username = ${val.username}`
            break;
        case 'DELETE':
            query = `DELETE FROM ref_users WHERE username = ${val.username}`
            break;
    }
    return query;
}

module.exports = UserRow; //exports module userraw
//module ini di import di ./src/models/rowquery/index.js