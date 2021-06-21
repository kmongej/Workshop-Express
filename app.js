const express = requiere('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
   res.send('Hello Word of Express'); 
});

app.get('/about', (req, res) => {
    res.send('This is a small Express project :) ');
});

app.get('/contact-us', (req, res) => {
    res.send('My email is mongekaren17@gmail.com');
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
