# Intern Management API

A simple REST API built using Node.js and Express.js for managing intern data.

## Features

- Get all interns
- Get intern by ID
- POST a new intern
- PUT update that intern
- Delete an intern
- Input validation

## Technologies Used

- Node.js
- Express.js
- Postman (for testing)

## Installation

1. Clone the repository
2. Navigate to Week-2-Backend-API
3. Install dependencies

npm install

4. Start server

node server.js

## API Endpoints

GET     /                 → Home Route
GET     /interns          → Get All Interns
GET     /interns/:id      → Get Single Intern
POST    /interns          → Create Intern
PUT     /interns/:id      → Update Intern
DELETE  /interns/:id      → Delete Intern

## Testing

Use Postman to test all API endpoints.