import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import JobList from './components/jobList';
import JobPost from './components/jobPost';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <h2 className="navbar-brand">Job Board</h2>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-testid="jobListLink" to="/joblist">Job List</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" data-testid="jobPostLink" to="/jobpost">Post a Job</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/joblist" element={<JobList />} />
                    <Route path="/jobpost" element={<JobPost />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
