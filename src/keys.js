require("dotenv").config()

module.exports = {
    database: {
        host: process.env.LOCAL,
        user: process.env.DB_USSER,
        password: process.DB_PASS,
        database: process.env.DB_NAMEDB
    },
    database_2: {
        host: "127.0.0.1@3306",
        user: "salome",
        password: "010819",
        database: "sql_inventario"
    }

};