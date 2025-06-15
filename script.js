// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const add-task-btn = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Task Creation and Removal
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task on button click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button and list item to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }

  // Add task when clicking the Add button
  addButton.addEventListener('click', addTask);

  // Add task when pressing Enter
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});