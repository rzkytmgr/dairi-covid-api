const express = require("express");
const router = express.Router();
const middleware = require("../middleware");
const { HomeController, ErrorController } = require("../controller");

router.get("/", middleware, HomeController);
router.get("*", middleware, ErrorController);

module.exports = router;
