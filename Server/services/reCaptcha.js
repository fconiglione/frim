const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

async function verifyCaptcha(token) {
    try {
        const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        );

        if (response.data.success) {
            console.log("ReCaptcha verification successful!", response.status);
            return true;
        } else {
            console.log("ReCaptcha verification failed!");
            return false;
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error verifying reCAPTCHA");
        return false;
    }
}

module.exports = { verifyCaptcha };