const express = require('express');
// const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));
app.listen(process.env.PORT || 4200);

/*
app.use(express.static(__dirname + '/dist/brick-link-app'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/brick-link-app/index.html'));
});
 */

app.listen(process.env.PORT || 8080);
