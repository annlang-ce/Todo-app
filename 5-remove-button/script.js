let tasks = [];

const addTask = () => {
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();
    input.value = '';

    if (newTask === '')
        return;

    tasks.push({
        name: newTask,
    });
    
    refreshTasks();
}

const removeTask = (index) => {  // <----------
    tasks.splice(index, 1);
    refreshTasks();
}

const refreshTasks = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        
        li.innerHTML = `${task.name}
            <button class="remove-btn" onclick="removeTask(${i})">Remove</button>`;  // <----------
            
        todoList.appendChild(li);
    });
}