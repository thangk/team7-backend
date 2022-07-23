const express = require("express");
const router = express.Router();
const watches = require("../services/watches");

router.get('/', async function(req, res, next)  {
    try {
        res.json(await watches.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error while getting watches', err.message);
        next(err);
    }
})

module.exports = router;