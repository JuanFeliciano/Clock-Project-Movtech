const hourElement = document.querySelector(".hour");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const periodElement = document.querySelector(".period");
const formatSwitchBtn = document.querySelector(".format-switch-btn");
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
document.querySelector(".href").innerHTML = '<i class="uil uil-clock"></i>';

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");
  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "24") {
    formatSwitchBtn.setAttribute("data-format", "12");
  } else {
    formatSwitchBtn.setAttribute("data-format", "24");
  }
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

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hour = hour > 12 ? hour % 12 : hour;
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

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
