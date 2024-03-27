const html = document.querySelector("html");
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");
  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "24") {
    formatSwitchBtn.setAttribute("data-format", "12");
  } else {
    formatSwitchBtn.setAttribute("data-format", "24");
  }
});

function clock() {
  let today = new Date();

  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let period = "AM";

  if (hour >= 12) {
    period = "PM";
  }

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hour = hour > 12 ? hour % 12 : hour;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  document.querySelector(".hour").innerHTML = hour;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;

  saveData();
}

const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

dotMenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});

let updateClock = setInterval(clock, 1000);

function saveData() {
  localStorage.setItem("data").html;
}
function showData() {
  localStorage.getItem("data");
}

showData();
