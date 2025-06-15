 <script>
        // Wait for the DOM to be fully loaded before executing the script
        document.addEventListener('DOMContentLoaded', function() {
            
            // Select DOM elements and store them in constants
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            // Function to add a new task to the list
            function addTask() {
                // Get the task text from input and trim whitespace
                const taskText = taskInput.value.trim();
                
                // Check if the task text is not empty
                if (taskText === "") {
                    alert("Please enter a task!");
                    return;
                }

                // Create a new list item element and set its textContent to taskText
                const li = document.createElement('li');
                li.textContent = taskText;

                // Create a new button element for removing the task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className = 'remove-btn';
                
                // Assign an onclick event to the remove button that removes the li element from taskList
                removeButton.onclick = function() {
                    taskList.removeChild(li);
                };

                // Append the remove button to the li element, then append the li to taskList
                li.appendChild(removeButton);
                taskList.appendChild(li);

                // Clear the task input field
                taskInput.value = '';
                
                // Append the list item to the task list
                taskList.appendChild(li);

                // Clear the input field
                taskInput.value = '';
            }

            // Add event listener to the add button
            addButton.addEventListener('click', addTask);

            // Add event listener to the input field for Enter key press
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
        });
    </script>