const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const Bundler = require('parcel-bundler');

// API location
const api = require('./api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api', api);

    // use parcel bundler for watch and HMR
    if (process.env.WORK_ENV !== 'production') {
        const bundler = new Bundler('sample3/index.html', {
            watch: true,
        });
        bundler.bundle();
        app.use(bundler.middleware());
    }

if (process.env.WORK_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'sample3/dist')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'sample3/dist/index.html'));
    });
}


//Set Port
const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost : ${port}`));