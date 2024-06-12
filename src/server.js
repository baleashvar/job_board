const express = require("express");
require("./db/mongoose");

const jobBoardRouter = require("./routers/jobBoard");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, DELETE, PATCH, POST");
        return res.status(200).json({});
    }

    next();
});

app.use(jobBoardRouter);

module.exports = app;
