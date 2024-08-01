const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const jwtauth = require('../Middeware/jwtauth.js')
const { completjobdetails, jobDetails } = require('../Models/Job.js')
const { users } = require('../Models/Users.js')

router.get('/jobs', jwtauth, async (req, res) => {
    try {
        let jobDetailslist = await jobDetails.find({})
        // console.log(jobDetailslist)
        res.status(200).json({ jobDetailslist: jobDetailslist })
        // res.status(200).send({ message: Job }
        // console.log("Job")
        // await res.send(jobDetails)
    }

    catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error in fetching jobs' })
    }
})

router.get('/jobs/:id', jwtauth, async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)

        let complete = await completjobdetails.findOne({ _id: id })
        res.status(200).json({ completejobs: complete })
        console.log(complete)
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error in fetching job details' })
    }
})

router.get('/filterjobs', jwtauth, async (req, res) => {
    try {
        const { employment_type, minimum_package, search } = req.query;
        // console.log(employment_type, minimum_package, search)
        // Construct a query to filter jobs based on the provided parameters
        const query = {};

        if (employment_type) {
            // console.log('Employment type');
            // Split the employment_type string into an array using commas as the delimiter
            const employmentTypesArray = employment_type.split(',');
            // Use $in operator to match any of the selected employment types
            query.employmentType = { $in: employmentTypesArray.map(type => new RegExp(type, 'i')) };

        }

        if (minimum_package) {
            // console.log('Minimum package');
            // Parse the minimum_package value and convert it to a numeric value (remove non-numeric characters)
            const minPackageValue = parseFloat(minimum_package.replace(/\D+/g, ''));

            if (!isNaN(minPackageValue)) {
                query.packagePerAnnum = { $gte: minPackageValue };
            }
        }

        if (search) {
            console.log('Searching')
            query.title = { $regex: search, $options: 'i' }; // Case-insensitive title matching
        }
        console.log(query)

        // Find jobs that match the query
        const filteredJobs = await completjobdetails.find(query);
        if (filteredJobs.length === 0) {
            return res.status(404).json({ message: 'No Jobs found' });
        }

        return res.json(filteredJobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/profile', jwtauth, async (req, res) => {
    try {
        console.log(req.id)
        let resp = await users.find({ _id: req.id })
        console.log(resp)
        res.status(200).json({ answe: resp })

    }
    catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Error in fetching user profile' })
    }
})

module.exports = router
