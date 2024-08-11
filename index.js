
function addTask() {
    
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();
  
    if (taskValue !== "") {
   
      const li = document.createElement('li');
  
   
      const textNode = document.createTextNode(taskValue);
      li.appendChild(textNode);
  
     
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        this.parentElement.remove();
      };
      li.appendChild(deleteButton);
  
      li.onclick = function() {
        this.classList.toggle('completed');
      };
  
  
      document.getElementById('taskList').appendChild(li);
  
      taskInput.value = '';
    } else {
      alert('Please enter a task.');
    }
}

  