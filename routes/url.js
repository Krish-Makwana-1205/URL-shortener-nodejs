const express = require('express');
const router = express.Router();
const {handlegeneratenewshortURL, GetAnalytics} = require('../controller/url');

router.post('/', handlegeneratenewshortURL);

router.get("/analytics/:shortid", GetAnalytics);
module.exports = router;