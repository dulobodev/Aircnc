const User = require("../models/user_model");

const create_user = async (req, res) => {
    const { email } = req.body;
    console.log(email)

    let usuario = await User.findOne({ email });
    
    if(!usuario) usuario = await User.create({ email })

      return res.status(201).json({ usuario });
};

module.exports = { create_user };
