const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PGHOST,
    database:process.env.PGDATABASE,
    user:process.env.PGUSER,
    port:process.env.PGPORT,
    password:process.env.PGPASSWORD,
    ssl:{
        rejectUnauthorized:false
    },
});

module.exports = {
    query: (txt, params, cb) => {
        return pool.query(txt,params,cb);
    },
};