const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
app.use(express());
let jsonweToken

const jwtauth = async (req, res, next) => {
    try {
        jsonweToken = req.headers["authorization"].split(" ")[1]
        // console.log(jsonweToken)
        if (jsonweToken === undefined) {
            return res.status(401).json({ message: "No token provided" })
        }
        else {
            console.log(jsonweToken)

            jwt.verify(jsonweToken, 'key', async (error, payload) => {
                if (error) {
                    return res.status(401).json({ message: "Invalid JWT Token" })
                } else {
                    req.id = payload._id;
                    next()

                }
            })
        }
    }
    catch (err) {
        return res.status(401).json({ message: "Authentication failed" })
    }
}

module.exports = jwtauth

