# Task Board

## Overview

Task Board is a web-based Kanban-style application designed to help individuals and teams manage tasks efficiently. The application provides an intuitive drag-and-drop interface to organize tasks across different stages of completion (To Do, In Progress, Done). It is built with HTML, CSS, and JavaScript, utilizing libraries such as jQuery UI and Bootstrap for enhanced interactivity and styling.

**User Story**

AS A user with multiple tasks
I WANT a board where I can organize my tasks by their status
SO THAT I can efficiently manage my daily activities and workflow

**Acceptance Criteria**

GIVEN a task board application
WHEN I open the application
THEN I am presented with a board divided into three columns: To Do, In Progress, and Done
WHEN I click on the "Add Task" button
THEN a modal pops up allowing me to input task details including title, description, and due date
WHEN I submit a task
THEN the task appears in the To Do column
WHEN I drag a task to another column
THEN the task's progress status updates accordingly
WHEN I delete a task
THEN the task is removed from the board

## Features

- Interactive drag-and-drop interface
- Dynamic task creation with a responsive modal form
- Task categorization across three distinct stages
- Persistent task storage using browser's localStorage
- Color-coded task cards based on urgency

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Links](#links)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/task-board.git
2. Navigate to the project directory.
   ```bash
   cd task-board

## Setup
No additional setup is required, as the application runs directly in the browser. Simply open the index.html file in a modern web browser to get started.

## Links 
github: https://github.com/Lrbenjamin/My_API_Task_Manager
Live site: 

## Usage
To use the application, follow these steps:

1. Open the index.html file in your browser.
2. Click on the "Add Task" button to create a new task.
3. Fill in the task details and click "Create Task" to add the task to the To Do column.
4. Drag and drop tasks between columns to update their progress status.
5. Click the delete icon on a task card to remove the task from the board.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.