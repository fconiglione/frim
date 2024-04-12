const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require("cors");
const axios = require('axios');
const { verifyCaptcha } = require('./services/reCaptcha'); 
dotenv.config()


const app = express()
const port = process.env.PORT || 3000


const buildPath = path.join(__dirname, 'build')


app.use(express.static(buildPath))
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:4200', 'http://localhost:3000', 'https://www.frim.io', 'https://www.api.frim.io', 'https://www.cloud.frim.io'],
    credentials: true
}))

app.post('/register', async (req, res) => {
    const { token } = req.body;

    verifyCaptcha(token);
    if (verifyCaptcha) {
        res.status(200).send("Success!");
    } else {
        res.status(400).send("Error verifying reCAPTCHA");
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