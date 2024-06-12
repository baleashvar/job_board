# Job Board

## Description

Job Board is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to post job listings, search for jobs, and apply for job positions. It provides a platform for employers to find the right candidates and for job seekers to find suitable job opportunities.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Signup/Login)
- Job Posting for Employers
- Job Search for Job Seekers
- Job Application Process
- User Profile Management
- Admin Dashboard for Managing Users and Job Posts

## Installation

To get started with the project, follow these steps:

### Backend Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/job_board.git
    cd job_board
    ```

2. Navigate to the `job-board-client` directory and install dependencies:

    ```sh
    cd job-board-client
    npm install
    ```

3. Navigate to the `job_board` directory and install dependencies:

    ```sh
    cd ..
    cd job_board
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the `job_board` directory and add the following:

    ```env
    MONGODB_URI= "your_mongodb_connection_string"
    ```

5. Start the backend server:

    ```sh
    node index.js
    ```

### Frontend Setup

1. Navigate to the `job-board-client` directory:

    ```sh
    cd ../job-board-client
    ```

2. Start the frontend development server:

    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Sign up as a new user or log in if you already have an account.
3. As an employer, post new job listings.
4. As a job seeker, search for jobs and apply for positions.
5. Manage your profile and view your job applications.

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login a user

### Jobs

- `GET /api/jobs` - Get all job listings
- `POST /api/jobs` - Create a new job listing (Employer only)
- `GET /api/jobs/:id` - Get a single job listing by ID
- `PUT /api/jobs/:id` - Update a job listing (Employer only)
- `DELETE /api/jobs/:id` - Delete a job listing (Employer only)

### Users

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get a single user by ID (Admin only)
- `PUT /api/users/:id` - Update user information (Admin only)
- `DELETE /api/users/:id` - Delete a user (Admin only)

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Styling**: CSS

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed MIT.
