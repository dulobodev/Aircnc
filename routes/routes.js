const express = require("express");
const SessionRoutes = require("./session");
const SpotRoutes = require("./spot");
const DashboardRoutes = require("./dashboard");

const router = express.Router()

router.use('/session', SessionRoutes)
