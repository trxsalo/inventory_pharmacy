
const { response } = require("express");
const express = require("express");
const router = express.Router();
const conn = require("../database")

///-----------GET LIST----------//////
//Presentacion list -Main
router.get("/list",(req,res)=>{
    res.render("../views/partials/navigationList.hbs");
});

//Grupo terapeutico Lis
router.get("/listGrupoTerapeutico",(req,res)=>{

    res.render("../views/inventario/list/listGrupoTerapeutico.hbs");
});

//Presentacion Laboratorio
router.get("/listLaboratorio",(req,res)=>{

    res.render("../views/inventario/list/listLaboratorio.hbs");
});

//Presentacion Presentacion
router.get("/listPresentacion",(req,res)=>{

    res.render("../views/inventario/list/listPresentacion.hbs");
});
///// ----- GET Inventario ----------  /////

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

///// ----- POST Inventario ----------  /////




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

    await fetch("http://localhost:3000/post/postPresentacion",{
        method:"Post",
        body: JSON.stringify(req.body()),
        headers:{
            "Content-Type": "application/json"
        }
    }).then (res=> res.json())
        .catch(error=>console.error("Error", error))
        .then(response=> console.log("Sucesses", response))
    
})






module.exports = router;
