const express = require("express");
const router = express.Router();

const adController = require("../controllers/adController");

router.get("/advertisments", adController.index);
router.get("/advertisments/new", adController.new);
router.post("/advertisments/create", adController.create);

module.exports = router;