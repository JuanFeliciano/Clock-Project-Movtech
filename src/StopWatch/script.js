const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const containerTime = document.querySelector(".container-time");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let counts = document.getElementById("count");
let hours = document.getElementById("hr");
document.querySelector(".href").innerHTML = '<i class="uil uil-clock"></i>';
document.querySelector(".hrefTwo").innerHTML =
  '<i class="uil uil-stopwatch"></i>';
let hour = 0o0;
let min = 0o0;
let sec = 0o0;
let count = 0o0;

class TimeTotal {
  constructor(hour, min, sec, count) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
    this.count = count;
  }
}

let listTimes = [];

startBtn.addEventListener("click", function () {
  timer = true;
  StopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  const newTime = new TimeTotal(hour, min, sec, count);
  listTimes.push(newTime);
  li.textContent = `${hour}Hr ${min} Min ${sec} Sec ${count} ml`;
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  count = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  counts.innerHTML = "00";

  containerTime.appendChild(li);
});

function StopWatch() {
  if (timer) {
    count++;

    if (count == 99) {
      sec++;
      count = 0;
    }
    if (min == 59) {
      hour++;
      min = 0;
    }
    if (sec == 59) {
      min++;
      sec = 0;
    }

    hour = hour.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");
    count = count.toString().padStart(2, "0");

    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    counts.innerHTML = count;

    setTimeout(StopWatch, 10);
  }
}
