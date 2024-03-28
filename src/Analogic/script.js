setInterval(() => {
  const time = new Date();
  const hourHand = document.querySelector(".hr-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".sec-hand");

  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let hourDefined = 30 * hour + minutes / 2;
  let minDefined = 6 * minutes;
  let secDefined = 6 * seconds;
  hourHand.style.transform = `rotate(${hourDefined}deg)`;
  minHand.style.transform = `rotate(${minDefined}deg)`;
  secHand.style.transform = `rotate(${secDefined}deg)`;
}, 1000);

const href = document.querySelector(".href");
href.innerHTML = '<i class="uil uil-clock"></i>';
