const express = require("express");
const DashboardController =  require('../controllers/dash_controller');
const router = express.Router();

router.get('/', DashboardController.index);

module.exports = router;