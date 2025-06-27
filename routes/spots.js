const express = require("express");
const SpotController =  require('../controllers/spots_controller.js');
const router = express.Router();

router.post('/', SpotController.create_spot);

module.exports = router;