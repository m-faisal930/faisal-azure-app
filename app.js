const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();


app.get('/', (req, res) => {
  res.send(`<h1>Welcome, ${process.env.APP_USERNAME}</h1>`);
});















// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Routes
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/views/projects.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
