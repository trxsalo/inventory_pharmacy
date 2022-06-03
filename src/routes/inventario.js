
const express = require("express");
const router = express.Router();
const conn = require("../database")

///// ----- GET ----------  /////

router.get("/", (req, res) =>{ 
    res.render("../views/partials/welcome.hbs");
});

router.get("/add",(req,res)=>{
    res.render("../views/partials/navigation.hbs")
})
//Formulario para agregar un nuevo laboratorio
router.get("/addLaboratorio", (req, res) =>{
    res.render("../views/inventario/form/addLaboratorio.hbs");
});

//Formulario para agregar un nueva presentación
router.get("/addPresentacion", (req, res) =>{
    res.render("../views/inventario/form/addPrentacion.hbs");
});

//Formulario para agregar un nuevo grupo teraputico
router.get("/addGrupoTerapeutico", (req, res) =>{
    res.render("../views/inventario/form/addGrupoTerapeutico.hbs");
});

///// ----- POST ----------  /////

//ENVIAR EL DATOS DE Laboratorio
router.post("/addLaboratorio", async (req, res) =>{
    const {nombre,correo,telefono}=req.body;
    //console.log(req.body);
    const newLaboratorio={
        nombre,
        correo,
        telefono
    };
    await conn.query("Insert into laboratorio set ?", [newLaboratorio]);

    res.send("Post recivido");
});

//ENVIAR EL DATOS DE Laboratorio
router.post("/addGrupoTerapeutico",async (req, res) =>{
    console.log(req.body);
    const {nombre}= req.body;
    const newGrupo ={
        nombre
    };
    await conn.query("INSERT INTO grupo_terapeutico set ?", [newGrupo]);
    res.send("Post recivido");
})

//ENVIAR EL DATOS DE Laboratorio
router.post("/addPresentacion", async(req, res) =>{

    console.log(req.body);
    const {nombre}= req.body;
    const newPresentacion = {
        nombre
    }
    await conn.query("Insert into presentacion set ?", [newPresentacion])
    res.send("Post recivssssido");
})




module.exports = router;
