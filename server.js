const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/brick-link-app'));
app.get('/*', function(req,res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.sendFile(path.join(__dirname + '/dist/brick-link-app/index.html'));
});
app.listen(process.env.PORT || 8080);
