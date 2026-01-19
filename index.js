const express = require('express');
const app = express();
const port = 3000;

// This defines the "hompage" of your server
app.get('/', (req, res) => {
    res.send('My Backend Server is Live!');
}); 

// This tells the server to start listening 
app.listen(port, () => { 
    console.log(`Server listening on port ${port}`);
});

// A new page at /about 
app.get('/about', (req, res) => {
    res.send('This is the About page of my backend server.');
    res.send('This is the about page created by Jose!');
});

// This is an "API" Endpoint" that retuns data 
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];
    res.json(users); // . json() sends data instead of text
});