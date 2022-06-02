
const express = require("express");
const router = express.Router();

const conn = require("../database")
///// ----- GET ----------  /////

router.get("/main", (req, res) =>{
    res.render("../views/partials/welcome.hbs");
});

//Formulario para agregar una nueva presentaación
router.get("/addPresentacion", (req, res) =>{
    res.render("../views/inventario/form/addPresentacionForm.hbs");
});


//Formulario para agregar un nuevo Grupo Terapeutico
router.get("/addGrupoTerapeutico", (req, res) =>{
    res.render("../views/inventario/form/addGrupoTeraForm");
});

//Formulario para agregar un nuevo Medicamento
router.get("/addMedicamento", (req, res) =>{
    res.render("../views/inventario/form/addMedicamentoForm");
});

//Formulario para agregar un nuevo Medicamento
router.get("/addLote", (req, res) =>{
    res.render("../views/inventario/form/addLoteForm");
});


//Formulario para agregar un nuevo laboratorio
router.get("/addLaboratorio", (req, res) =>{
    res.render("../views/inventario/form/addLaboratorioForm");
});



///// ----- POST ----------  /////

//ENVIAR EL DATOS DE GRUPO TERAPEUTICO
router.post('../views/inventario/form/addPresentacionForm.hbs', (req, res)=> {
    const {presetacion} = req.body;
    const newPresentacion = {
        presetacion
    };
    res.send('POST request to the homepage');
});

router.post("/addLaboratorio", (req, res) =>{
    console.log(req.body);
    res.send("Post recivido");
});


module.exports = router;
