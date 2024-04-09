const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require("cors");
const axios = require('axios');
dotenv.config()


const app = express()
const port = process.env.PORT || 3000


const buildPath = path.join(__dirname, 'build')


app.use(express.static(buildPath))
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:4200', 'https://www.frim.io/', 'https://www.api.frim.io/'],
    credentials: true
}))

app.post('/register', async (req, res) => {
    const { token } = req.body;

    try {
        const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        );

        if (response.data.success) {
            console.log("ReCaptcha verification successful!");
        } else {
            console.log("ReCaptcha verification failed!");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error verifying reCAPTCHA");
    }
});


// gets the static files from the build folder
// app.get('*', (req, res) => {
//     res.sendFile(path.join(buildPath, 'index.html'))
// })


// Showing that the server is online and running and listening for changes
app.listen(port, () => {
    console.log(`Server is online on port: ${port}`)
})