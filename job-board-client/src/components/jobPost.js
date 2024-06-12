import React, { useState } from 'react';
import axios from 'axios';

function JobPost() {
    const [job, setJob] = useState({
        title: '',
        description: '',
        company: '',
        location: '',
        requirements: '',
        salaryRange: '',
        deadline: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob({
            ...job,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/jobs', job)
            .then(response => {
                alert("Job saved successfully!");
                setJob({
                    title: '',
                    description: '',
                    company: '',
                    location: '',
                    requirements: '',
                    salaryRange: '',
                    deadline: ''
                });
            })
            .catch(error => {
                alert("Error saving job: " + error.message);
            });
    };

    return (
        <div className="container mt-4">
            <h1>Post a Job</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={job.title} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" value={job.description} onChange={handleChange} className="form-control" required></textarea>
                </div>
                <div className="form-group">
                    <label>Company</label>
                    <input type="text" name="company" value={job.company} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" name="location" value={job.location} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Requirements</label>
                    <textarea name="requirements" value={job.requirements} onChange={handleChange} className="form-control" required></textarea>
                </div>
                <div className="form-group">
                    <label>Salary Range</label>
                    <input type="text" name="salaryRange" value={job.salaryRange} onChange={handleChange} className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Deadline</label>
                    <input type="date" name="deadline" value={job.deadline} onChange={handleChange} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Save Job</button>
            </form>
        </div>
    );
}

export default JobPost;
