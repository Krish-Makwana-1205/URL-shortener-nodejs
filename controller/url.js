const shortid = require('shortid');
const URL = require('../model/url')

async function handlegeneratenewshortURL(req, res){
    const body = req.body;
    if(!body.url)return res.status(400).json({error: 'url is required'});
    const ShortID = shortid();
    await URL.create({
        shortid : ShortID,
        redirecturl : body.url,
        visitHistory : [],
    })

    res.render('home', {
        id:ShortID,
    })
};
async function GetAnalytics(req, res){
    const shortid = req.params.shortid;
    const dets = await URL.findOne({shortid});
    return res.json({totalclicks: dets.visithistory.length,
        analytics: dets.visitHistory
    })
}
module.exports = {
    handlegeneratenewshortURL,
    GetAnalytics
};