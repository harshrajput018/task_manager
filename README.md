Task Manager Backend
Introduction
This project is a backend implementation for a Task Manager application. It provides a robust API for managing tasks, including adding, retrieving, updating, and deleting tasks. It's designed to be simple, efficient, and easy to integrate with various frontend technologies.

Installation
To set up the Task Manager backend on your local machine:

Clone the repository: git clone [repository-url]
Navigate to the project directory: cd [project-directory]
Install dependencies: npm install
Usage
To start the server, run node server.js. The server will start and listen for incoming requests.

API Reference
Models
Tasks (models/tasks.js): Defines the structure for task objects, including fields like title, description, due date, etc.
Routes
Add Task (routes/addTask.js): POST endpoint for adding a new task. Requires task details in the request body.
Get Tasks (routes/getTasks.js): GET endpoint for retrieving all tasks. Returns a list of task objects.
Update Task (routes/updateTask.js): PUT endpoint for updating an existing task. Requires task ID and updated details in the request.
Delete Task (routes/deleteTask.js): DELETE endpoint for removing a task. Requires the task ID in the request.
