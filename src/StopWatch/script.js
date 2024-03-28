const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let counts = document.getElementById("count");
let hours = document.getElementById("hr");
let hour = 0o0;
let min = 0o0;
let sec = 0o0;
let count = 0o0;

startBtn.addEventListener("click", function () {
  timer = true;
  StopWatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  count = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  counts.innerHTML = "00";
});

function StopWatch() {
  if (timer) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }

    let countString = count;
    let hourString = hour;
    let minString = min;
    let secString = sec;

    if (hour < 10) {
      hourString = "0" + hourString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    hours.innerHTML = hourString;
    minutes.innerHTML = minString;
    seconds.innerHTML = secString;
    counts.innerHTML = countString;

    setTimeout(StopWatch, 10);
  }
}
