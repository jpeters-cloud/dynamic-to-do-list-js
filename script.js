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

                // Create a new list item element
                const li = document.createElement('li');
                li.textContent = taskText;

                // Create a remove button for the task
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.className = 'remove-btn';
                
                // Add click event to remove button to delete the task
                removeButton.onclick = function() {
                    taskList.removeChild(li);
                };

                // Append the remove button to the list item
                li.appendChild(removeButton);
                
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