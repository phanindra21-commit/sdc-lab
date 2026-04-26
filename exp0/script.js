function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }
    //Implemented CSS styling for To-Do app layout and components

    let li = document.createElement("li");
    li.innerHTML = task;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.classList.add("delete");
//Implemented functionality to add tasks dynamically using JavaScript
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
//Added validation to prevent empty task entries
    input.value = "";
}