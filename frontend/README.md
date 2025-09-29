Task Management System

A simple task management system built with Angular (Frontend) and Node.js + Express + MSSQL (Backend). Users can register, login, and manage tasks. Optional enhancements include role-based access and file uploads for tasks.

Frontend

This project was generated using Angular CLI
 version 20.3.3.

Prerequisites

Node.js (v20+ recommended)

Angular CLI installed globally:

npm install -g @angular/cli


Development Server

To start the frontend development server:

ng serve


Open your browser at http://localhost:4200/.
The app will automatically reload when you modify any source files.

Code Scaffolding

Angular CLI provides tools to generate components, services, directives, etc.:

ng generate component component-name
ng generate service service-name


For a complete list of schematics:

ng generate --help

Building

To build the project for production:

ng build


Build artifacts are stored in the dist/ directory. Production build optimizes performance.

Running Unit Tests

To run unit tests using Karma
:

ng test

Running End-to-End Tests

To run e2e tests:

ng e2e


Angular CLI does not include an e2e testing framework by default—you can choose your preferred tool (e.g., Cypress, Protractor).

Backend

The backend is built with Node.js, Express, and MSSQL.

Prerequisites

Node.js (v20+ recommended)

MSSQL Server or SQL Server Express

Required environment variables in a .env file:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_SERVER=your_db_server
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret

Install Dependencies
npm install

Start Backend Server
node server.js


The backend server runs on http://localhost:5000 by default.

API Endpoints
Method	Endpoint	Description
POST	/api/register	Register a new user
POST	/api/login	Login and get JWT token
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create a new task
PUT	/api/tasks/:id	Update an existing task
DELETE	/api/tasks/:id	Delete a task

Note: JWT token is required for all /api/tasks routes.

Optional Add-Ons

Role-based access: Different views for Admin vs User

File uploads: Attach documents to tasks

Additional Resources

Angular CLI Overview and Command Reference

Express.js Documentation

MSSQL Node.js Driver

JWT Authentication with Node.js