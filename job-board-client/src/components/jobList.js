import React, { useEffect, useState } from 'react';
import axios from 'axios';

function JobList() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the job list!", error);
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1>Job List</h1>
            <ul className="list-group">
                {jobs.map(job => (
                    <li key={job._id} className="list-group-item">
                        <h5>{job.title}</h5>
                        <p>{job.company} - {job.location}</p>
                        <p>{job.description}</p>
                        <p>Requirements: {job.requirements}</p>
                        <p>Salary: {job.salaryRange}</p>
                        <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default JobList;
