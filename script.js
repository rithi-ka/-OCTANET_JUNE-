let tasks = [];

function renderTasks() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        if (task.prioritize) {
            li.classList.add("prioritize");
        }
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.complete;
        checkbox.onchange = () => markComplete(index);
        
        const label = document.createElement("label");
        label.textContent = task.name;
        if (task.complete) {
            label.classList.add("complete");
        }
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("button");
        deleteButton.onclick = () => deleteTask(index);
        
        const prioritizeButton = document.createElement("button");
        prioritizeButton.textContent = task.prioritize ? "!" : "!";
        prioritizeButton.classList.add("button");
        prioritizeButton.onclick = () => togglePrioritize(index);
        
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        li.appendChild(prioritizeButton);
        todoList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        tasks.push({ name: taskName, complete: false, prioritize: false });
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

function markComplete(index) {
    tasks[index].complete = !tasks[index].complete;
    renderTasks();
}

function togglePrioritize(index) {
    tasks[index].prioritize = !tasks[index].prioritize;
    renderTasks();
}
