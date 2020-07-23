const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 2221;

//app.use(bodyParser.json());
//app.use(cors());

app.get('/eden', (request, response) => {
    response.json({ res: 'I got your request for "/" '});
    console.log('Server: server got request');
});

app.listen(port, () =>
    console.log('Server: Express server is up and running on port '+port)
);
