/*eslint-env browser*/

let $ = function(id) {
  "use strict";
  return window.document.getElementById(id);
};

function loadEmployees(employees) {
  "use strict";
  //   let storage = localStorage.getItem("employees") || "";
  //   let employee;
  //   let arrayStorage;
  //   if (storage.length > 0) {
  //     arrayStorage = storage.split("|");
  //     for (employee in arrayStorage) {
  //       employees[employee] = arrayStorage[employee].split(",");
  //     }
  //   } else {
  //If no localStorage then set initial data
  employees[0] = ["Sally Smith", "Quality Assurance", "3423"];
  employees[1] = ["Mark Martin", "VP Sales", "3346"];
  employees[2] = ["John Johnson", "Marketing", "3232"];
  employees[3] = ["Michael Jackson", "Team Member", "3188"];
  employees[4] = ["Donald Trump", "Chief Janitor", "3054"];
  //   }
}

function updateList(employees) {
  "use strict";
  let i, employee;
  let html = "";
  for (i in employees) {
    employee = employees[i];
    html = html + "<tr>";
    html = html + "<td>" + employee[0] + "</td>"; //Name
    html = html + "<td>" + employee[1] + "</td>"; //Title
    html = html + "<td>" + employee[2] + "</td>"; //Extension
    html =
      html +
      '<td><button type="button" class="btn btn-primary" id="btnEmp' +
      i +
      '">Delete</button></td>';
    html = html + "</tr>";
  }
  $("tblEmployeeList").innerHTML = html;
  $("tagEmployees").innerHTML = employees.length;
}

function checkInputs() {
  "use strict";
  let updateOk = true;
  let name = $("frmName").value;
  let title = $("frmTitle").value;
  let extension = $("frmExtension").value;

  $("frmMsgName").innerHTML = "";
  $("frmMsgTitle").innerHTML = "";
  $("frmMsgExtension").innerHTML = "";

  if (name === "") {
    updateOk = false;
    $("frmMsgName").innerHTML = "Please enter a name";
  }
  if (title === "") {
    updateOk = false;
    $("frmMsgTitle").innerHTML = "Please enter a title";
  }
  if (extension === "" || isNaN(Number(extension))) {
    updateOk = false;
    $("frmMsgExtension").innerHTML = "Please enter a valid extension";
  }
  return updateOk;
}

function addList(employees) {
  "use strict";
  employees.push([
    $("frmName").value,
    $("frmTitle").value,
    $("frmExtension").value
  ]);
  //Clear input boxes
  $("frmName").value = "";
  $("frmTitle").value = "";
  $("frmExtension").value = "";
}

function addButton(employees) {
  "use strict";
  let updateOK = checkInputs();
  if (updateOK) {
    addList(employees);
    updateList(employees);
  }
}

function deleteList(employees, event) {
  "use strict";
  let btnId = event.target.id;
  let pos = Number(btnId.substring(6, btnId.length));
  employees.splice(pos, 1);
  updateList(employees);
}

window.addEventListener("load", () => {
  "use strict";
  let employees = [];
  loadEmployees(employees);
  updateList(employees);

  $("btnAdd").addEventListener("click", () => {
    addButton(employees);
  });

  $("tblEmployeeList").addEventListener("click", event => {
    const isButton = event.target.nodeName === "BUTTON";
    if (isButton) {
      deleteList(employees, event);
    }
  });
});
