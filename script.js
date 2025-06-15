document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' prevents double-saving
    }

    // Save the current task list to Local Storage
    function saveTasks() {
        const tasks = [];
        const items = taskList.querySelectorAll('li');
        items.forEach(item => {
            // Get text without the 'Remove' button
            const text = item.firstChild.textContent.trim();
            tasks.push(text);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // If no text provided (manual add), fetch from input
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // Remove task from DOM and Local Storage
        removeButton.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        if (save) {
            saveTasks(); // Only save if user manually added
        }

        taskInput.value = ''; // Clear input
    }

    // Event listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks(); // Load tasks on page load
});
