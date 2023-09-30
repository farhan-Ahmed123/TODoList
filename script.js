document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Attach event listener to the delete button
            const deleteButton = taskItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });
        }
    });
});
