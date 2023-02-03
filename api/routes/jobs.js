const express = require('express')
const router = express.Router();

let Job = require('../models/jobModel');


router.route('/').get((req,res) => {
    Job.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;