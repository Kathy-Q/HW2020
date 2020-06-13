let tasks = [];//{title:"ddddd", done:fasle}
function renderEditor() {
    let inputE1 = document.querySelector("#default-todo-panel .todo-editor > input");
    let addTask = () => {
        let newTask = {
            title: inputE1.value,
            done: false,
        };
        inputE1.value = "";

        tasks.push(newTask);

        console.log("tasks: ", tasks);

        renderTasksItems();
    };


    inputE1.onkeypress = (e) => {

        if (e.key === "Enter") {
            addTask();
        }
    };
    let addE1 = document.querySelector("#default-todo-panel .todo-editor > button");

    addE1.onclick = (e) => {
             addTask();
    };
}
    function renderTasksItems() {
        console.log("render items");

        let itemsE1 = document.querySelector("#default-todo-panel .todo-items");

        itemsE1.querySelectorAll("div").forEach((node) => node.remove())


        for (let i = 0; i < tasks.length; i++) {
            let task = tasks[i];
            let itemE1 = document.createElement("div");

            let doneE1 = document.createElement("input");
            doneE1.type = "checkbox";
            itemE1.append(doneE1);

            let titleE1 = document.createElement("label");
            titleE1.innerText = task.title;
            itemE1.append(titleE1);

            let cancelE1 = document.createElement("button");
            cancelE1.innerText = "X";
            itemE1.append(cancelE1);
            itemsE1.append(itemE1);



        }
    }
    renderEditor();
    renderTasksItems();