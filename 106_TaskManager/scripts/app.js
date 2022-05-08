// Task:
// id - num
// title - str
// description - str
// important - boolean
// dueDate - date/time
// location - str
// invites - str (comma separated)
// color - string (rgb)
// frequency - string (list)
// status - number (list)
//     1 - pending
//     2 - in progress
//     3 - pause
//     4 - completed
//     5 - abandoned

const iconImportant = "iImportant fas fa-star";
const iconNotImportant = "iImportant far fa-star";
var important = false;

function saveTask() {
  let title = $("#txtTitle").val();
  //let important= $("#txtTitle").val();
  let descript = $("#txtDescription").val();
  let date = $("#txtDate").val();
  let location = $("#txtLocation").val();
  let invites = $("#txtInvites").val();
  let color = $("#txtColor").val();
  let frequency = $("#sFrequency").val();
  let status = $("#sStatus").val();

  console.log(
    title,
    descript,
    date,
    location,
    invites,
    color,
    frequency,
    status
  );
}
function toggleImportant() {
  if (important) {
    $("#iImportant").removeClass(iconImportant).addClass(iconNotImportant);
    important = false;
  } else {
    $("#iImportant").removeClass(iconNotImportant).addClass(iconImportant);
    important = true;
  }
  console.log("clicked");
}
var hide = true;
function clickHide() {
  if (hide) {
    $("#form").fadeOut("3000");
    hide = false;
  } else {
    $("#form").fadeIn("3000");
    hide = true;
  }
}
function init() {
  console.log("Welcome to my task manager");

  //assign events
  $("#iImportant").click(toggleImportant);

  $("#btnClick").click(clickHide);
  $("#btnSaveTask").click(saveTask);
}

window.onload = init;
