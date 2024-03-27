function getClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector(".hr-hand");
  const minHand = documen.querySelector(".min-hand");
  const secHand = document.querySelector(".sec-hand");

  const hourDegree = (hours % 12) * 30 + minutes / 2;
  const minDegree = minutes * 6;
  const secDegree = seconds * 6;

  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  secHand.style.transform = `rotate${secDegree}deg`;
}

getClock();
setInterval(getClock, 1000);
