
const express = require("express");
const router = express.Router();

///// ----- GET ----------  /////


//Formulario para agregar una nueva presentaación
router.get("/addPresentacion", (req, res) =>{
    res.render("../views/links/form/addPresentacioForm");
});

//Formulario para agregar un nuevo Grupo Terapeutico
router.get("/addGrupoTerapeutico", (req, res) =>{
    res.render("../views/links/form/addGrupoTeraForm");
});

//Formulario para agregar un nuevo Medicamento
router.get("/addMedicamento", (req, res) =>{
    res.render("../views/links/form/addMedicamentoForm");
});

//Formulario para agregar un nuevo Medicamento
router.get("/addLote", (req, res) =>{
    res.render("../views/links/form/addLoteForm");
});


//Formulario para agregar un nuevo laboratorio
router.get("/addLaboratorio", (req, res) =>{
    res.render("../views/links/form/addLaboratorioForm");
});



///// ----- POST ----------  /////

//ENVIAR EL DATOS DE GRUPO TERAPEUTICO
router.post("/addGrupoTerapeutico", (req, res) =>{
    res.send("recivido");
});



module.exports = router;
