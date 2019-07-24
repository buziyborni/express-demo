const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

port = process.env.PORT || 3000;
app.listen(port, console.log(`listing on port ${port}`));