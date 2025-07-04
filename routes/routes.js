const express = require("express");
const SessionRoutes = require("./session");
const SpotRoutes = require("./spots")
const DashboardRoutes = require("./dashboard");

const router = express.Router()

router.use('/session', SessionRoutes)
router.use('/spot', SpotRoutes)
router.use('/dashboard', DashboardRoutes)

module.exports = router; 