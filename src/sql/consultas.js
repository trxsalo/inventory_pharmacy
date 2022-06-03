
const conn = require("../database");

const getPresentaciones = (req,req)=>{

    const sql = "Select * from presentaciones"

    conn.query(sql,(err,result)=>{
        if(err){
            console.log("Ha ocurrido un error");
        }
        else{
            console.log(result)
        }
    });
    return;
};

module.exports = getPresentaciones;