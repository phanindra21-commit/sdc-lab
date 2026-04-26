function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    let delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.classList.add("delete");

    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}