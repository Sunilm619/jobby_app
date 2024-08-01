const express = require('express')
const router = express.Router()
const { users } = require('../Models/Users')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
app.use(express.json())

router.post('/signup', async (req, res) => {
    try {
        // console.log(req.body)
        const existing = await users.findOne({ email: req.body.email })
        // console.log(existing)
        if (existing) {
            return res.status(400).json({ error: 'Email already exists' })
        }
        else {
            const usernewdata = new users({
                name: req.body.name,
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, 10),
                confirmPassword: await bcrypt.hash(req.body.confirmPassword, 10)
            });
            await usernewdata.save()
            res.status(201).json({ message: 'User created successfully' })
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error in signup process' })
    }
})

router.post('/login', async (req, res) => {
    try {
        const existing = await users.findOne({ email: req.body.email })
        console.log(existing)
        if (!existing) {
            return res.status(400).json({ error: 'User not found' })
        }
        else {
            let payload = { _id: existing._id }
            let comparepassword = await bcrypt.compare(req.body.password, existing.password)
            if (comparepassword) {
                const token = jwt.sign(payload, "key", { expiresIn: '150h' })
                res.status(200).json({ message: 'User logged in successfully', token })
            }
            else {
                return res.status(400).json({ error: 'Incorrect password' })
            }
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error in login process' })
    }
})

module.exports = router