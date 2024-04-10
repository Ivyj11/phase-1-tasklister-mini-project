document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
  
      const newTask = document.getElementById("new-task-description");
      const taskDescription = newTask.value;

    
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.addEventListener("click", function() {
      taskItem.remove();
    });
    taskItem.appendChild(removeButton);

         
      const taskList = document.getElementById("tasks");
      taskList.appendChild(taskItem);

      const prioritySelect = document.getElementById("priority");
    const priority = prioritySelect.value;
    if (priority === "high") {
      taskItem.style.color = "red";
      
    } else if (priority === "medium") {
      taskItem.style.color = "yellow";
    } else {
      taskItem.style.color = "green";
    }
  
    
      newTask.value = "";
    });
  });
