//Gets task from the user input
function get_todos() {
    //Create array
    var todos = new Array;
    //Pulls the task saved in the browser memory
    var todos_str = localStorage.getItem("todo");

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//Adds the inputed task to the "get_todos" function array

function add() {

    //Takes the inputed task and assigns it to variable "task"
    var task = document.getElementById("task").value;

    var todos = get_todos();

    //Adds the task to the end of the array
    todos.push(task);

    //Converts the task input into a JSON string
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;

}

//Removes tasks

function remove() {

    var id = this.getAttribute("id");
    var todos = get_todos();
    todos.splice(id, 1);
    //Converts the task input into a JSON string
    localStorage.setItem("todo", JSON.stringify(todos));

    show();

    return false;
}






//Keeps tasks displayed on the screen
function show() {
    var todos = get_todos();

    //Sets up each task as an unordered list

    var html = "<ul>";

    //Displays tasks in the list in the order in which they were inputed
    for (var i = 0; i < todos.length; i++) {
        //Also displays the task as a list and creates the delete button
        html += "<li>" + (i + 1) + ". " + todos[i] + "<button class='remove' id=" + i + ">&#10005;</button></li>";


    };
    html += "</ul>";
    //Displays the task as a list
    document.getElementById("todos").innerHTML = html;


    var buttons = document.getElementsByClassName("remove");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", remove);
    };

}

//Displays inputed task when "Add Item" button is clicked
document.getElementById("add").addEventListener("click", add);
//This will keep the inputs displayed on the screen
show();