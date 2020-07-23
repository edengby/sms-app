const express = require('express');
const app = express();
const port = process.env.PORT || 2221;

app.listen(port, () =>
    console.log('Express server is up and running, port '+port)
);

app.get('/', (request, response) => {
    res.send({ res: 'I got your request for "/" '});
});