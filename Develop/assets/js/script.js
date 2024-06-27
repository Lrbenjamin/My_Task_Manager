// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// Function to generate a unique task ID
function generateTaskId() {
    let newId = nextId;
    nextId++; // Increment the global nextId
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return newId;
}

// Function to create a task card HTML
function createTaskCard(task) {
    let urgencyClass = 'bg-light';
    const daysUntilDue = dayjs(task.dueDate).diff(dayjs(), 'day');
    
    if (daysUntilDue <= 2) {
        urgencyClass = 'bg-danger'; // Red for urgent tasks
    } else if (daysUntilDue <= 4) {
        urgencyClass = 'bg-warning'; // Yellow for near due tasks
    }

    return `
        <div class="task-card ${urgencyClass}" id="task-${task.id}">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <button class="btn btn-danger delete-task" data-task-id="${task.id}">Delete</button>
        </div>
    `;
}

// Function to render the task list
function renderTaskList() {
    $("#todo-cards, #in-progress-cards, #done-cards").empty();
    taskList.forEach(task => {
        $(`#${task.status}-cards`).append(createTaskCard(task));
    });
    $(".task-card").draggable({
        containment: "document",
        cursor: "move",
        revert: "invalid",
        helper: "clone"
    });
}

// Function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();

    let title = $("#newTitle").val();
    let description = $("#newDescription").val();
    let dueDate = $("#newDueDate").val();

    let task = {
        id: generateTaskId(),
        title: title,
        description: description,
        dueDate: dueDate,
        status: 'todo'
    };

    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
    $('#newTaskModal').modal('hide');
}

// Function to handle deleting a task
function handleDeleteTask(event) {
    let taskId = $(event.target).data("task-id");
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    let taskId = parseInt(ui.draggable.attr("id").replace('task-', ''));
    let newStatus = $(event.target).attr("id").replace('-cards', '');
    let task = taskList.find(t => t.id === taskId);
    if (task) {
        task.status = newStatus;
        localStorage.setItem("tasks", JSON.stringify(taskList));
        renderTaskList();
    }
}

// Initialize the application
$(document).ready(function() {
    renderTaskList();
    $('#newTaskForm').submit(handleAddTask);
    $(document).on("click", ".delete-task", handleDeleteTask);
    $(".lane").droppable({
        drop: handleDrop
    });
    $("#newDueDate").datepicker({
        dateFormat: "yy-mm-dd"
    });
});
