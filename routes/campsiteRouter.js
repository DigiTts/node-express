const express = require('express');
const CampsiteRouter = express.Router();

CampsiteRouter.route('/')
// The code above is the equivalent of the following code in server.js:
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the campsites to you');
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})

.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})

.delete((req, res) => {
    res.end('Deleting all campsites');
});

module.exports = CampsiteRouter;