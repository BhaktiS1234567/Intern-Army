var categories = {};

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    var category = document.getElementById('categorySelect').value;
    
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = '<input type="checkbox" onchange="toggleTask(this)">' + taskText;
        taskList.appendChild(taskItem);
        
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(taskText);
        
        updateCategoryTable();
        
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}

function toggleTask(checkbox) {
    var taskText = checkbox.nextSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

function updateCategoryTable() {
    var categoryTable = document.getElementById('categoryTable');
    categoryTable.innerHTML = '<tr><th>Category</th><th>Tasks</th></tr>';
    
    for (var category in categories) {
        var tasks = categories[category];
        var tasksHtml = '';
        tasks.forEach(function(task) {
            tasksHtml += '<li>' + task + '</li>';
        });
        categoryTable.innerHTML += '<tr><td>' + category + '</td><td><ul>' + tasksHtml + '</ul></td></tr>';
    }
}

