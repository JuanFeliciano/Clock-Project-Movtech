const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const saveBtn = document.getElementById("save");
const containerTime = document.querySelector(".container-time");
const time = document.getElementById("time");
const deleteAllBtn = document.getElementById("delete");
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

let listTimes = JSON.parse(localStorage.getItem("listTimes")) || [];

class TimeTotal {
  constructor(hour, min, sec, count, id) {
    this.hour = hour;
    this.min = min;
    this.sec = sec;
    this.count = count;
    this.id = id;
  }
}

let timer = false;

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
    li.id = nextId;
    nextId++;
    li.textContent = `${hour} Hr ${min} Min ${sec} Sec ${(count % 100)
      .toString()
      .padStart(2, "0")} ml`;

    const delBtn = document.createElement("button");
    delBtn.classList.add("delUnic");
    delBtn.innerHTML = "Delete";
    delBtn.addEventListener("click", function () {
      deleteTime(newTime.id);
    });
    li.appendChild(delBtn);

    containerTime.appendChild(li);
    localStorage.setItem("listTimes", JSON.stringify(listTimes));
  }
}

function deleteTime(id) {
  const confirmation = confirm("Are you sure about this?");
  if (confirmation) {
    const liElement = document.getElementById(id);
    if (liElement) {
      const index = listTimes.findIndex((time) => time.id === id);
      listTimes.splice(index, 1);
      containerTime.removeChild(liElement);
      localStorage.setItem("listTimes", JSON.stringify(listTimes));
    }
  }
}

function deleteAllTimes() {
  listTimes = [];
  containerTime.innerHTML = "";
  nextId = 0;
  localStorage.removeItem("listTimes");
}

let startTime;

function startWatch() {
  timer = true;
  startTime = performance.now();
  StopWatch();
}

function StopWatch() {
  if (timer) {
    const elapsedTime = performance.now() - startTime;
    count = Math.floor(elapsedTime);

    const totalSeconds = Math.floor(count / 1000);
    hour = Math.floor(totalSeconds / 3600);
    min = Math.floor((totalSeconds % 3600) / 60);
    sec = totalSeconds % 60;

    hour = hour.toString().padStart(2, "0");
    min = min.toString().padStart(2, "0");
    sec = sec.toString().padStart(2, "0");

    hours.innerHTML = hour;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    counts.innerHTML = (count % 100).toString().padStart(2, "0");

    requestAnimationFrame(StopWatch);
  }
}

listTimes.forEach((time) => {
  const li = document.createElement("li");
  li.id = time.id;
  li.textContent = `${time.hour} Hr ${time.min} Min ${time.sec} Sec ${(
    time.count % 100
  )
    .toString()
    .padStart(2, "0")}ml`;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delUnic");
  delBtn.innerHTML = "Delete";
  delBtn.addEventListener("click", function () {
    deleteTime(time.id);
  });
  li.appendChild(delBtn);
  containerTime.appendChild(li);
});

startBtn.addEventListener("click", startWatch);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", resetWatch);
saveBtn.addEventListener("click", saveWatch);
deleteAllBtn.addEventListener("click", () => {
  const confirmation = confirm("Are you sure about this?");
  if (confirmation) {
    deleteAllTimes();
  }
});
