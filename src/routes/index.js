const express = require("express");
const router = express.Router();
//

router.get("/", (req,res) => {
    res.render("../views/partials/welcome.hbs");
})

module.exports = router;