const express = require("express");
const SessionController =  require('../controllers/session_controller');
const router = express.Router();

router.post('/', SessionController.create_user);

module.exports = router;