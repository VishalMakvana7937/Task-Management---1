const Users = require("../models/models");


const login = async (req, res) => {
    try {
        console.log(req.body);
        const { email,password } = req.body;
        const LoginUser = await Users.create({ email, password });
        res.status(200).json({ msg: LoginUser });
    } catch (error) {
        console.log('err..', error);
    }
}

const apply = async (req, res) => {
    try {
        res.status(200).json({ messege: "Welcome to Home" });
    } catch (error) {
        res.status(500).json("Internal server error")
    }
}

module.exports = { apply,login }; 