const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require("cors");
const { verifyCaptcha } = require('./services/reCaptcha'); 
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

dotenv.config()

const connectionString = `postgres://${process.env.FRIM_CLOUD_DB_USER}:${process.env.FRIM_CLOUD_DB_PASSWORD}@${process.env.FRIM_CLOUD_DB_HOST}:${process.env.FRIM_CLOUD_DB_PORT}/${process.env.FRIM_CLOUD_DB_NAME}?ssl=true`;

const pool = new Pool({
    connectionString: connectionString
});

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
    const { token, fullName, email, password, receiveUpdates } = req.body;
    const captchaVerified = await verifyCaptcha(token);
    if (!captchaVerified) {
        return res.status(400).send("Error verifying reCAPTCHA");
    } else {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const client = await pool.connect();
            const query = `
                INSERT INTO users (full_name, email, password, receive_updates)
                VALUES ($1, $2, $3, $4)
                RETURNING *;
            `;
            const values = [fullName, email, hashedPassword, receiveUpdates];
            const result = await client.query(query, values);
            client.release();
    
            res.status(200).send("Success!");
        } catch (error) {
            console.error("Error inserting registration data into database:", error);
            res.status(500).send({ error: "Internal Server Error", message: error.message });
        }
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await pool.connect();
        const query = `
            SELECT * FROM users
            WHERE email = $1;
        `;
        const values = [email];
        const result = await client.query(query, values);
        client.release();
        if (result.rows.length === 0) {
            console.error("User not found:", error);
            return res.status(404).send({ error: "User not found", message: error.message });
        }
        const user = result.rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            res.status(200).send("Success!");
        } else {
            res.status(401).send({ error: "Invalid password", message: error.message });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send({ error: "Internal Server Error", message: error.message });
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