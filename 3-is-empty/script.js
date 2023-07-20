let tasks = [];

const addTask = () => {
    const input = document.getElementById('todo-input');
    const newTask = input.value;
    input.value = '';

    if (newTask === '')  // <----------
        return;

    tasks.push({
        name: newTask,
    });
    
    refreshTasks();
}

const refreshTasks = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        
        li.innerHTML = task.name;
            
        todoList.appendChild(li);
    });
}