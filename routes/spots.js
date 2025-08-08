const express = require("express");
const multer = require("multer");

const uploadConfig = require("../config/upload.js");
const SpotController = require("../controllers/spots_controller.js");

const router = express.Router();

const upload = multer(uploadConfig);

router.post("/", upload.single('thumbnail'), SpotController.create_spot);

router.get("/", SpotController.buscar_spot);


module.exports = router;
