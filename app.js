const { render } = require('ejs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Ensure this points to the correct folder
// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('index', {
        username: process.env.APP_USERNAME || 'Guest', // Fallback to 'Guest' if APP_USERNAME is not set
        themeColor: process.env.THEME_COLOR || 'white' // Fallback to 'white' if THEME_COLOR is not set
    });
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
