const task = [];
function renderListReversed(){
    let taskList = document.getElementById("todo-list");
    let reversedListHTML = "";
    for (let i=task.length - 1; i >= 0; i--) {
        reversedListHTML += `
        <div class="todo-element">
            <input type="checkbox" id="task-${i}" name="task${i}"
            <label for="task-${i}">${task[i]}</label>
        </div>
        `;
    }
    taskList.innerHTML = reversedListHTML;
}
function addTask(){
    let currentTask = document.getElementById("task");
    task.push(currentTask.value);
    console.log(task);
    renderListReversed();
    currentTask.value = "";
}
//console.log the task array and clear the input fields=complete//