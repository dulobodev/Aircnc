const Spot = require("../models/spots_model");

const User = require("../models/user_model");

const create_spot = async (req, res) => {
    const { company, price, techs } = req.body
    const { user_id } = req.headers;

    if(!req.file)
        return res.status(400).json({error: 'Arquivo não encontrado'})

    const {filename} = req.file

    const usuario = await User.findById(user_id); 
    if(!usuario) return res.status(400).json({error:'Usuario não existe!!!'})
 
    const spot = await Spot.create({
        thumbnail: filename,
        user: user_id,
        company,
        price,
        techs: techs.split(',').map(tech=> tech.trim()),
    })
 
    return res.json(spot)
}

module.exports = { create_spot }
