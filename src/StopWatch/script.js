const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const containerTime = document.querySelector(".container-time");
const deleteAllBtn = document.getElementById("deleteAll");
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
let nextId = 0;

class TimeTotal {
  constructor(hour, min, sec, count, id) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
    this.count = count;
    this.id = id;
  }
}

let listTimes = [];

function startWatch() {
  timer = true;
  StopWatch();
}

function stopWatch() {
  timer = false;
}

function resetWatch() {
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  count = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  counts.innerHTML = "00";
}

function saveWatch() {
  if ((hour, min, sec, count != 0)) {
    const li = document.createElement("li");
    const newTime = new TimeTotal(hour, min, sec, count, nextId);
    listTimes.push(newTime);
    li.id = "time" + nextId;
    nextId++;
    li.textContent = `${hour}Hr ${min} Min ${sec} Sec ${count} ml`;

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "Del";
    delBtn.addEventListener("click", function () {
      deleteTime(newTime.id);
    });
    li.appendChild(delBtn);

    containerTime.appendChild(li);
  }
}

function deleteTime(id) {
  const liElement = document.getElementById("time-" + id);
  if (liElement) {
    const index = listTimes.findIndex((time) => time.id === id);
    if (index !== -1) {
      listTimes.splice(index, 1);
    }
    containerTime.removeChild(liElement);
  }
}

function deleteAllTimes() {
  listTimes = [];
  containerTime.innerHTML = "";
  nextId = 0; // Resetar o próximo ID disponível
}

function StopWatch() {
  if (timer) {
    count++;

    if (count == 99) {
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

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
saveBtn.addEventListener("click", saveWatch);
deleteAllBtn.addEventListener("click", deleteAllTimes);
