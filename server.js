
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (_,res) => {
    res.append("link", "<style.css>; rel=stylesheet;");
    res.send();
});

const port = 4444;
app.listen(port, () => console.log(`Server is up on port ${port}`));
