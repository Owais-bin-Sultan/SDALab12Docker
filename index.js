const express = require('express');
const rt = require('./route');
const app = express();
const PORT = process.env.PORT || 4000;

app.set('port', PORT);
app.use('/', rt);
app.listen(PORT, () => {
    console.log('Server Up');
});
