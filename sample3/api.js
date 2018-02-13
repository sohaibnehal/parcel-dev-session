const express = require('express');
const router = express.Router();

// Error handling
const sendError = (err, res) => {
    let response = {...responseObj};
    response.status = 501;
    response.message = typeof err === 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let responseObj = {
    status: 200,
    data: [],
    message: null
};

router.get('/users/:userId', (req, res) => {
    let response = {...responseObj};
    if (req.params.userId) {
        response.data = {
            id: 1,
            name: 'Sohaib Nehal',
            email: 'sohaib.nehal@ymail.com'
        };
        res.json(response);
    } else {
        sendError({message: 'User ID is required'}, res);
    }
});

module.exports = router;
