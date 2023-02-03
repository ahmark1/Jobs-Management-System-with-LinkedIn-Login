const express = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();

const Weather = require('../models/weatherModel');

router.route('/city').post(async (req, res) => {
    const city = req.body.city;
    const apiResponse = await (await fetch(`${process.env.WEATHER_API}&q=${city}&aqi=no`)).json();
    const details = apiResponse;

    Weather.findOne({ city }, async function (err, cityExists) {
        if (!cityExists) {
            await Weather.create({ city, details })
                .then(() => res.status(200).json("City added!"))
                .catch((err) => res.json(`Error code: ${err}`));
        };
        if (cityExists) {
            Weather.updateOne({ city }, { details }, function (err, cityUpdated) {
                if (err) {
                    res.json(err);
                } else {
                    res.json("City weather updated!");
                }
            })
        }
    })
})

router.route('/getCity').post(async (req, res) => {
    const cityName = req.body.cityName;
    const apiResponse = await (await fetch(`${process.env.WEATHER_API}&q=${cityName}&aqi=no`)).json();
    const details = apiResponse;

    res.json(apiResponse);
})

module.exports = router;