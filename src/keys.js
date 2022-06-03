require("dotenv").config()

module.exports = {
    database: {
        host: process.env.LOCAL,
        user: process.env.DB_USSER,
        password: process.DB_PASS,
        database: process.env.DB_NAMEDB
    },
    database_2: {
        host: "localhost",
        user: "root",
        password: "010819",
        database: "sql_inventario"
    }

};