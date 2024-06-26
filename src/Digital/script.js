const hourElement = document.querySelector(".hour");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const periodElement = document.querySelector(".period");
const formatSwitchBtn = document.querySelector(".format-switch-btn");
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
document.querySelector(".href").innerHTML = '<i class="uil uil-clock"></i>';
document.querySelector(".hrefTwo").innerHTML =
  '<i class="uil uil-stopwatch"></i>';

let formatValue = localStorage.getItem("formatValue") || 24;
formatSwitchBtn.setAttribute("data-format", formatValue);
formatSwitchBtn.classList.toggle("active", formatValue === "24");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");
  formatValue = formatSwitchBtn.getAttribute("data-format");

  formatValue = formatValue === "24" ? "12" : "24";
  formatSwitchBtn.setAttribute("data-format", formatValue);

  localStorage.setItem("formatValue", formatValue);
});

function Clock() {
  let today = new Date();

  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let period = "AM";

  if (hour >= 12) {
    period = "PM";
  }

  formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hour = hour > 12 ? hour % 12 : hour;
  }

  hour = hour.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  hourElement.textContent = hour;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
  periodElement.textContent = period;

  requestAnimationFrame(Clock);
}

dotMenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});

Clock();
