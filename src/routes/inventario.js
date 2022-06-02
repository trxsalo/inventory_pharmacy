
const express = require("express");
const router = express.Router();
//const conn = require("../database")

///// ----- GET ----------  /////

router.get("/main", (req, res) =>{
    res.render("../views/partials/welcome.hbs");
});

//Formulario para agregar un nuevo laboratorio
router.get("/addLaboratorio", (req, res) =>{
    res.render("../views/inventario/form/addLaboratorioForm.hbs");
});

///// ----- POST ----------  /////
//ENVIAR EL DATOS DE Laboratorio
router.post("/addLaboratorio", (req, res) =>{
    console.log(req.body);
    res.send("Post recivido");
});


module.exports = router;
