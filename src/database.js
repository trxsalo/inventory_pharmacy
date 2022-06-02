const mysql = require("mysql");

const {promisify} = require("util");

const {database_2}= require("./keys");



const pool = mysql.createPool(database_2); //La conexiónn a la base de datos

pool.getConnection((err,connection) =>{
    if(err){
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.err("La conexción a la DB no se realizó ");
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.err("Hay muchas conexiones a la DB");
        }
        if(err.code === "ECONNREFUSED"){
            console.err("LA CONEXIÓN A SIDO RECHADA");
        }
    }

    if (connection) connection.release();
    console.log("CONEXIÓN A LA DB EXITOSA");
    return;

});


//utilizando promesas
pool.query = promisify(pool.query);

module.exports = pool; //Exportamos la conexión donde podes requerir a futuro 