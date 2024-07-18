const express = require('express');
const urlroute = require('./routes/url')
const app = express();
const port = 8001;
const URL = require('./model/url');


app.listen(port, ()=>console.log(`Listening on port ${port}`));
const {connecttoMongoDb} = require('./connect');


connecttoMongoDb('mongodb://localhost:27017/shorturl')
.then(()=>{console.log("Mongo DB connected")})

app.use(express.json());
app.use("/url", urlroute);

app.get('/:shortid', async (req, res)=>{
    const shortid = req.params.shortid;
    const entry = await URL.findOneAndUpdate({
        shortid
    },{$push : {
        visithistory: {timestamp: Date.now()}
    }})
    res.redirect(entry.redirecturl);
})