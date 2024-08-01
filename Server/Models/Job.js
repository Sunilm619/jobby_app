const mongoose = require('mongoose');

let skillschema = new mongoose.Schema({
    name: String,
    imageUrl: String
})
let lifeAtCompanyschema = new mongoose.Schema({
    description: String,
    imageUrl: String
})
let jobDetailschema = new mongoose.Schema({
    title: String,
    companyWebsiteUrl: String,
    rating: Number,
    location: String,
    packagePerAnnum: String,
    jobDescription: String,
    companyLogoUrl: String,
    employmentType: String


})
let completjobdetailschema = new mongoose.Schema({
    title: String,
    companyWebsiteUrl: String,
    rating: Number,
    location: String,
    packagePerAnnum: String,
    jobDescription: String,
    skills: [skillschema],
    lifeAtCompany: lifeAtCompanyschema,
    companyLogoUrl: String,
    employmentType: String


})

let jobDetails = mongoose.model('JobDetails', jobDetailschema)

let completjobdetails = mongoose.model('completjobdetails', completjobdetailschema)

module.exports = { completjobdetails, jobDetails }