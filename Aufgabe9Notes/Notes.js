//Zählt Anzahl an ToDos
var numberoftasks = 0;
window.addEventListener("load", function () {
    document.querySelector(".addTaskButton").addEventListener("click", ApplyNewTask);
    document.querySelector(".counter").addEventListener("click", ApplyNewTask);
});
function ApplyNewTask() {
    var addtask = document.querySelector(".addtask").value;
    PushTaskIntoList(addtask);
    //Anzahl der angegebenen ToDos wird gezählt
    var element = document.querySelector(".TaskBox");
    var taskcount = element.children.length;
    numberoftasks = taskcount;
    document.querySelector(".counter").innerHTML = taskcount + " task/s in total";
}
function PushTaskIntoList(UpdatedTaskCount) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + numberoftasks);
    var TaskBoxLayout = "";
    TaskBoxLayout += "<button onclick=\"CheckmarkButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + numberoftasks + "\"></button>";
    TaskBoxLayout += "<input class=\"TaskNumberOne\" id=\"TaskNumberOne" + numberoftasks + "\" value=\"" + UpdatedTaskCount + "\" ></input>";
    TaskBoxLayout += "<button onclick=\"RemoveTask(this)\" class=\"far fa-trash-alt trash\" id=\"remove" + numberoftasks + "\"></button>";
    addElement.innerHTML = TaskBoxLayout;
    document.querySelector(".TaskBox").appendChild(addElement);
}
function CheckmarkButton(checkmarkedbutton) {
    //Wenn der Checkmark Kreis geclickt wurde, soll die Icon Font von dem Kreis zu dem Kreis mit dem Haken wechseln
    if (checkmarkedbutton.classList.contains("fa-circle")) {
        checkmarkedbutton.classList.remove("fa-circle");
        checkmarkedbutton.classList.add("fa-check-circle");
    }
    //Wenn Checkmark Kreis wieder geclickt/deaktiviert wurde, soll die Icon Font wieder auf den Kreis ohne Haken wechseln
    else {
        checkmarkedbutton.classList.remove("fa-check-circle");
        checkmarkedbutton.classList.add("fa-circle");
    }
}
function RemoveTask(RemovedTask) {
    //ToDo wird beim Clicken auf das Mülleimer Icon entfernt
    RemovedTask.parentElement.remove();
    //da ein ToDo jetzt entfernt ist, muss auch Counter um 1 verringert werden
    numberoftasks--;
    var element = document.querySelector(".TaskBox");
    var taskcount = element.children.length;
    document.querySelector(".counter").innerHTML = taskcount + " task/s in total";
}
//# sourceMappingURL=Notes.js.map