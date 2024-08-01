const express = require('express');
const port = 4000 || process.env.PORT
const app = express();
const mongoose = require('mongoose');
const { completjobdetails, jobDetails } = require('./Models/Job');
app.use(express.json());
const cors = require('cors');

app.use(cors());
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

mongoose.connect('mongodb+srv://sunilmanga60:bangbang-23@sunilm19.ne13j3y.mongodb.net/new_folder?retryWrites=true&w=majority&appName=sunilm19')
    .then(() => { console.log("Connected") })
    .catch((e) => { console.log(`Error connecting to`, e) });

app.use('/auth', require('./Routes/auth'));
app.use('/api', require('./Routes/api'));
// console.log(completjobdetailschema)

//sending data to db

// const addJobs = async () => {
//     try {
//         const jobDetail = new completjobdetails({
//             title: "Frontend Engineer",
//             companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
//             companyWebsiteUrl: "https://about.facebook.com/",
//             rating: 4,
//             location: "Delhi",
//             packagePerAnnum: "15 LPA",
//             jobDescription: "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//             skills: [
//                 {
//                     name: "HTML 5",
//                     imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/html-img.png"
//                 },
//                 {
//                     name: "CSS 3",
//                     imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/css-img.png"
//                 },
//                 {
//                     name: "Javascript",
//                     imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png"
//                 },
//                 {
//                     name: "React JS",
//                     imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png"
//                 },
//                 {
//                     name: "Redux",
//                     imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/redux-img.png"
//                 }
//             ],

//             lifeAtCompany: {
//                 description: "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
//                 imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-facebook-img.png"
//             },
//             employmentType: "Part Time",
//         });

//         const savedJobDetail = await jobDetail.save();
//         // Create and save a Job document that uses the same _id as the JobDetail

//         const job = new jobDetails({
//             _id: savedJobDetail._id, // Use the same _id as the JobDetail
//             title: "Frontend Engineer",
//             companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
//             rating: 4,
//             location: "Delhi",
//             packagePerAnnum: "15 LPA",
//             jobDescription: "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
//             employmentType: "Part Time",
//         });


//         await job.save();
//         await mongoose.disconnect();
//     } catch (e) {
//         console.log(e);
//     }
// };

// addJobs()

const addMultipleJobs = async () => {
    const jobDetailsData = [
        {
            title: "Frontend Engineer",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
            companyWebsiteUrl: "https://about.facebook.com/",
            rating: 4,
            location: "Delhi",
            packagePerAnnum: "15 LPA",
            jobDescription: "The Experimentation Platform team builds internal tools with a big impact across the company. We are looking to add a UI engineer to our team to continue to improve our experiment analysis workflow and tools. Ideal candidates will be excited by direct contact with our users, fast feedback, and quick iteration.",
            skills: [
                { name: "HTML 5", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/html-img.png" },
                { name: "CSS 3", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/css-img.png" },
                { name: "Javascript", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png" },
                { name: "React JS", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png" },
                { name: "Redux", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/redux-img.png" }
            ],
            lifeAtCompany: {
                description: "Our core philosophy is people over process. Our culture has been instrumental to our success. It has helped us attract and retain stunning colleagues, making work here more satisfying. Entertainment, like friendship, is a fundamental human need, and it changes how we feel and gives us common ground. We want to entertain the world.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-facebook-img.png"
            },
            employmentType: "Part Time",
        },
        {
            title: "Backend Engineer",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/google-img.png",
            companyWebsiteUrl: "https://about.google.com/",
            rating: 4.5,
            location: "Bangalore",
            packagePerAnnum: "20 LPA",
            jobDescription: "Responsible for server-side web application logic and integration of the work front-end developers do.",
            skills: [
                { name: "Node.js", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/nodejs-img.png" },
                { name: "Express.js", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/express-img.png" },
                { name: "MongoDB", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/mongodb-img.png" }
            ],
            lifeAtCompany: {
                description: "Innovation and creativity are the heart of our work culture. We encourage employees to bring new ideas to the table.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-google-img.png"
            },
            employmentType: "Full Time",
        },
        {
            title: "Data Scientist",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/amazon-img.png",
            companyWebsiteUrl: "https://about.amazon.com/",
            rating: 4.7,
            location: "Hyderabad",
            packagePerAnnum: "30 LPA",
            jobDescription: "Analyzing large amounts of data to identify patterns and trends that can influence business decisions.",
            skills: [
                { name: "Python", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/python-img.png" },
                { name: "R", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/r-img.png" },
                { name: "SQL", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/sql-img.png" }
            ],
            lifeAtCompany: {
                description: "We thrive on diverse perspectives and celebrate individuality. Join us and make an impact with your ideas.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-amazon-img.png"
            },
            employmentType: "Contract",
        },
        {
            title: "Full Stack Developer",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/microsoft-img.png",
            companyWebsiteUrl: "https://about.microsoft.com/",
            rating: 4.6,
            location: "Mumbai",
            packagePerAnnum: "25 LPA",
            jobDescription: "Developing both client and server software. Understand how to work with several languages and databases.",
            skills: [
                { name: "JavaScript", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png" },
                { name: "React", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png" },
                { name: "Node.js", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/nodejs-img.png" }
            ],
            lifeAtCompany: {
                description: "We value innovation and continuous learning. Our teams are collaborative and driven by the need to build meaningful software.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-microsoft-img.png"
            },
            employmentType: "Internship",
        },
        {
            title: "Mobile App Developer",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/apple-img.png",
            companyWebsiteUrl: "https://about.apple.com/",
            rating: 4.8,
            location: "Pune",
            packagePerAnnum: "22 LPA",
            jobDescription: "Creating applications for mobile devices, working closely with the design team to ensure a high-quality user experience.",
            skills: [
                { name: "Swift", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/swift-img.png" },
                { name: "Kotlin", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/kotlin-img.png" },
                { name: "React Native", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactnative-img.png" }
            ],
            lifeAtCompany: {
                description: "Our culture promotes creativity and innovation. We believe in creating an environment where employees can grow and succeed.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-apple-img.png"
            },
            employmentType: "Full Time",
        },
        {
            title: "DevOps Engineer",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png",
            companyWebsiteUrl: "https://about.facebook.com/",
            rating: 4.4,
            location: "Chennai",
            packagePerAnnum: "18 LPA",
            jobDescription: "Ensuring reliable and efficient deployment of software products. Work closely with development and operations teams.",
            skills: [
                { name: "AWS", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/aws-img.png" },
                { name: "Docker", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png" },
                { name: "Kubernetes", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/kubernetes-img.png" }
            ],
            lifeAtCompany: {
                description: "We value collaboration and openness. Our teams are dedicated to creating a positive impact through our work.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-facebook-img.png"
            },
            employmentType: "Part Time",
        },
        {
            title: "System Architect",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/oracle-img.png",
            companyWebsiteUrl: "https://about.oracle.com/",
            rating: 4.9,
            location: "Kolkata",
            packagePerAnnum: "40 LPA",
            jobDescription: "Designing and implementing complex computer systems, focusing on efficiency and scalability.",
            skills: [
                { name: "Java", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/java-img.png" },
                { name: "Microservices", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/microservices-img.png" },
                { name: "Cloud Computing", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/cloudcomputing-img.png" }
            ],
            lifeAtCompany: {
                description: "Our mission is to create powerful and efficient solutions for our clients. We believe in fostering innovation and growth.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-oracle-img.png"
            },
            employmentType: "Full Time",
        },
        {
            title: "Cybersecurity Analyst",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/cisco-img.png",
            companyWebsiteUrl: "https://about.cisco.com/",
            rating: 4.5,
            location: "Bangalore",
            packagePerAnnum: "28 LPA",
            jobDescription: "Protecting company data and systems from cyber threats, developing security measures and protocols.",
            skills: [
                { name: "Network Security", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/networksecurity-img.png" },
                { name: "Ethical Hacking", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/ethicalhacking-img.png" },
                { name: "Cryptography", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/cryptography-img.png" }
            ],
            lifeAtCompany: {
                description: "We prioritize security and integrity. Our teams work diligently to protect our systems and data from potential threats.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-cisco-img.png"
            },
            employmentType: "Full Time",
        },
        {
            title: "AI Research Scientist",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/ibm-img.png",
            companyWebsiteUrl: "https://about.ibm.com/",
            rating: 4.8,
            location: "Hyderabad",
            packagePerAnnum: "35 LPA",
            jobDescription: "Conducting research on artificial intelligence and machine learning algorithms to develop innovative solutions.",
            skills: [
                { name: "Machine Learning", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/machinelearning-img.png" },
                { name: "Python", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/python-img.png" },
                { name: "TensorFlow", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/tensorflow-img.png" }
            ],
            lifeAtCompany: {
                description: "We are dedicated to advancing technology and creating solutions that make a difference. Join our innovative team and contribute to cutting-edge research.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-ibm-img.png"
            },
            employmentType: "Contract",
        },
        {
            title: "Cloud Solutions Architect",
            companyLogoUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/azure-img.png",
            companyWebsiteUrl: "https://about.azure.com/",
            rating: 4.6,
            location: "Delhi",
            packagePerAnnum: "32 LPA",
            jobDescription: "Designing and implementing cloud infrastructure, ensuring scalability and efficiency.",
            skills: [
                { name: "Azure", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/azure-img.png" },
                { name: "AWS", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/aws-img.png" },
                { name: "GCP", imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/gcp-img.png" }
            ],
            lifeAtCompany: {
                description: "Innovation drives our work. We encourage creativity and out-of-the-box thinking to solve complex problems.",
                imageUrl: "https://assets.ccbp.in/frontend/react-js/jobby-app/life-azure-img.png"
            },
            employmentType: "Full Time",
        }
    ];

    try {
        for (let detail of jobDetailsData) {
            const jobDetail = new completjobdetails(detail);
            const savedJobDetail = await jobDetail.save();

            const job = new jobDetails({
                _id: savedJobDetail._id, // Use the same _id as the JobDetail
                title: detail.title,
                companyLogoUrl: detail.companyLogoUrl,
                rating: detail.rating,
                location: detail.location,
                packagePerAnnum: detail.packagePerAnnum,
                jobDescription: detail.jobDescription,
                employmentType: detail.employmentType,
            });

            await job.save();
        }

        console.log("All jobs added successfully!");
    } catch (e) {
        console.log(e);
    }
};

// addMultipleJobs();
