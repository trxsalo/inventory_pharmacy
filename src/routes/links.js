const express = require("express");
const router = express.Router();

//const conn = require("../database");

router.get("/add", (res,req) =>{
    res.render("../views/links/add.hbs");
});

module.exports = router;
