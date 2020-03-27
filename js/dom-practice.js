/*eslint-env browser*/

//STEP 1
function step1() {
  "use strict";
  window.alert("I have been clicked");
}

//STEP 2
function step2() {
  "use strict";
  let elem = window.document.getElementById("step2");
  elem.onclick = function() {
    window.alert("I have been clicked");
  };
}
step2();

//STEP 3
function step3() {
  "use strict";
  window.alert("I have been clicked");
}
let elem3 = window.document.getElementById("step3");
elem3.addEventListener("click", step3);

//STEP 4
let elem4 = window.document.getElementById("step4");
elem4.addEventListener("click", () => {
  "use strict";
  window.alert("I have been clicked");
});

//STEP 5
//Script in practice.html header

//STEP 6
let elem6 = window.document.getElementById("redirect");
elem6.addEventListener("click", () => {
  "use strict";
  event.preventDefault();
  window.alert("You clicked a link to visit Google");
});

//STEP 7
let elem7 = window.document.getElementById("step7");
elem7.addEventListener("click", () => {
  "use strict";
  elem7.disabled = true;
  window.alert(window.document.getElementById("txtBox").value);
});

//STEP 8
let elem8 = window.document.getElementById("step8");
elem8.addEventListener("click", () => {
  "use strict";
  window.open("newpage.html", "new", "width=300,height=300");
});

//STEP 9
let btnStart = window.document.getElementById("btnStart");
let btnStop = window.document.getElementById("btnStop");
let msgTimer;
function displayMsg() {
  window.console.log("Learning JavaScript is fun!");
}
btnStart.addEventListener("click", () => {
  "use strict";
  msgTimer = window.setInterval(displayMsg, 2000);
});
btnStop.addEventListener("click", () => {
  "use strict";
  window.clearInterval(msgTimer);
});

//STEP 10
let elem10 = window.document.getElementById("step10");
elem10.addEventListener("click", () => {
  "use strict";
  let list = window.document.getElementById("listItems");
  alert(
    "Don't go there!!!\n" +
      list.options[list.selectedIndex].text +
      " is full of COVID-19!!!"
  );
});
