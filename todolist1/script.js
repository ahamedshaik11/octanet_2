var tasks = [];

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var task = {
        text: taskInput.value,
        completed: false
    };

    tasks.push(task);
    updateTaskList();
    taskInput.value = "";
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function filterTasks(filter) {
    var filteredTasks = [];

    switch (filter) {
        case 'all':
            filteredTasks = tasks;
            break;
        case 'active':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
    }

    displayTasks(filteredTasks);
}

function updateTaskList() {
    var taskList = document.getElementById("taskList");
    displayTasks(tasks);
}

function displayTasks(taskArray) {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    taskArray.forEach(function (task, index) {
        var li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTaskStatus(${index})"><i class="fas fa-check"></i></button>
            <button onclick="removeTask(${index})"><i class="far fa-trash-alt"></i></button>
        `;
        taskList.appendChild(li);
    });
}
