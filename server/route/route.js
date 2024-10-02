const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/",controllers.apply);
router.post("/",controllers.login);

module.exports = router; 