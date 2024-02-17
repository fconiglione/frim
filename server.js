const express = require('express');
const path = require('path');

const app = express();

// Serve the React app's static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Define your backend routes here
// Example:
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
