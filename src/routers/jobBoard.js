const express= require("express");
const Job= require("../models/job.js");

const router = new express.Router();

// GET /jobs
router.get('/jobs', async (req, res) => {
    const match = {};
    if (req.query.title) {
        match.title = { $regex: req.query.title, $options: 'i' }; // case-insensitive search
    }
    if (req.query.location) {
        match.location = { $regex: req.query.location, $options: 'i' };
    }

    try {
        const jobs = await Job.find(match);
        res.status(200).send(jobs);
    } catch (error) {
        res.status(400).send({ error: "Error while getting the data" });
    }
});

// POST /jobs
router.post('/jobs', async (req, res) => {
    const job = new Job(req.body);

    try {
        await job.save();
        res.status(201).send({ message: "Job saved successfully" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;