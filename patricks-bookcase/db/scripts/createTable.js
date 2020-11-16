const { query } = require("../index");

const statement = `CREATE TABLE library (id SERIAL PRIMARY KEY, title TEXT, author TEXT, genre TEXT, read BOOLEAN, series TEXT, leant TEXT );`

async function createTable() {
    let res = await query(statement);
    console.log(res);
    console.log("The table has been created.");
  }

createTable();