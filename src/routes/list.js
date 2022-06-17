const express = require("express");
const router = express.Router();

router.route("/inventario/listGrupoTerapeutico", async (req,res)=>{
    const list = await fetch("http://localhost:3000/get/getGrupos");
    res.render("../views/inventario/list/listGrupoTerapeutico.hbs" , {list})
})

router.route("/inventario/listPresentacion", (req,res)=>{
    const lists =async()=>{
        return await fetch("http://localhost:3000/get/getPresentaciones");
    }
    const list= lists();
    res.render("../views/inventario/list/listPresentacion.hbs" , {list})
})

