const hourHand = document.querySelector(".hr-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");
document.querySelector(".href").innerHTML = '<i class="uil uil-clock"></i>';

function Clock() {
  const time = new Date();
  let hour = time.getHours() * 30 + time.getMinutes() / 2;
  let minutes = time.getMinutes() * 6;
  let seconds = time.getSeconds() * 6;

  hourHand.style.transform = `rotate(${hour}deg)`;
  minHand.style.transform = `rotate(${minutes}deg)`;
  secHand.style.transform = `rotate(${seconds}deg)`;
  requestAnimationFrame(Clock);
}

Clock();
