# Hospital API

This repository contains the source code for a Hospital API. The API allows doctors to register and login, patients to register, and provides endpoints for creating and fetching patient reports. The API is built using Node.js and utilizes various npm packages.

## Getting Started

To set up the project on your local system, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-username/hospital_api.git


2. Install the required packages:
   npm install


3. Run the application:
   npm run dev


This command will start the server and make the API accessible at http://localhost:3000.

## API Routes

The following routes are available in the API:

### Register a Doctor

**Endpoint:** [POST] `/api/v1/doctors/register`

This route allows a doctor to register in the system.

### Login for Doctor

**Endpoint:** [POST] `/api/v1/doctors/login`

This route enables a doctor to log into the system.

### Register a Patient

**Endpoint:** [POST] `/api/v1/patients/register`

This route allows the registration of a new patient.

### Create Patient Report

**Endpoint:** [POST] `/api/v1/patients/:id/create_report`

This route is used to create a medical report for a specific patient identified by `:id`.

### Fetch All Reports of a Patient

**Endpoint:** [GET] `/api/v1/patients/:id/all_reports`

This route retrieves all the medical reports associated with a specific patient identified by `:id`.

### Fetch All Reports Based on a Status

**Endpoint:** [GET] `/api/v1/reports/:status`

This route retrieves all medical reports based on a specific status.



