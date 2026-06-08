# Week-3-Database-Integration

## Overview

This project demonstrates database integration using MongoDB and Mongoose with a Node.js and Express.js backend. The API performs complete CRUD (Create, Read, Update, Delete) operations for managing intern data stored in a MongoDB database.

## Features

* MongoDB database integration
* Mongoose schema and model creation
* Create a new intern
* Retrieve all interns
* Retrieve a specific intern by ID
* Update intern details
* Delete an intern
* Error handling for invalid requests
* RESTful API architecture

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (API Testing)

## Project Structure

```text
Week-3-Database-Integration/
│
├── models/
│   └── Intern.js
│
├── db.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd Week-3-Database-Integration
```

3. Install dependencies

```bash
npm install
```

4. Start MongoDB locally

5. Run the server

```bash
node server.js
```

## Database Connection

The application connects to MongoDB using Mongoose:

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/internPortal");
```

## API Endpoints

---

# Get All Interns
# Get Intern By ID
# Add New Intern
# Update Intern
# Delete Intern

## Testing

All API endpoints were tested using Postman to verify successful database operations and proper error handling.

## Learning Outcomes

* Understanding MongoDB fundamentals
* Working with Mongoose schemas and models
* Performing CRUD operations
* Connecting Node.js applications to a database
* Building RESTful APIs with persistent data storage

## Github Repo Link🔗
https://github.com/gauri9368gupta-maker/Decodelab-project
