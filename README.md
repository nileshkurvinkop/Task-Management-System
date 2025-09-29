# Task Management System

A simple Task Management System built with **Angular (Frontend)** and **Node.js + Express + MSSQL (Backend)**. Users can register, login, and manage tasks.

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)

---

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete tasks

---

## Technologies

- Frontend: Angular 20.3.3
- Backend: Node.js, Express
- Database: Microsoft SQL Server (MSSQL)
- Authentication: JWT

---

## Prerequisites

- Node.js v20+
- Angular CLI globally installed:
```bash

npm install -g @angular/cli

```


##Development Server
-To start the frontend development server:
```bash
-ng serve
-Open your browser at http://localhost:4200/.
-The app will automatically reload when you modify any source files.
```
##Code Scaffolding
-Angular CLI provides tools to generate components, services, directives, etc.: 
```bash
ng generate component component-name
ng generate service service-name
```
-For a complete list of schematics:
```bash
ng generate --help
```

## Building

-To build the project for production:
```bash
ng build
```

-Build artifacts are stored in the dist/ directory. Production build optimizes performance.

-Running Unit Tests

-To run unit tests using Karma
:
```bash
ng test
```


## Backend

-The backend is built with Node.js, Express, and MSSQL.

## Prerequisites

-Node.js (v20+ recommended)

-MSSQL Server or SQL Server Express

-Required environment variables in a .env file:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_SERVER=your_db_server
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret

## Install Dependencies
```bash
npm install
```
-Start Backend Server
```bash
npm run dev
```

-The backend server runs on http://localhost:5000 by default.

## API Endpoints
-Method	Endpoint	Description
-POST	/api/register	Register a new user
-POST	/api/login	Login and get JWT token
-GET	/api/tasks	Get all tasks
-POST	/api/tasks	Create a new task
-PUT	/api/tasks/:id	Update an existing task
-DELETE	/api/tasks/:id	Delete a task

Note: JWT token is required for all /api/tasks routes.




