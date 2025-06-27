const Spot = require("../models/spots_model");

const User = require("../models/user_model");

const create_spot = async (req, res) => {
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

};

module.exports = { create_spot };
