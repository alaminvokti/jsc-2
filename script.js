"use strick";

const secondsHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDgress = (seconds / 60) * 360 + 90;
  secondsHand.style.transform = `rotate(${secondsDgress}deg)`;

  const min = now.getMinutes();
  const minDgrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDgrees}deg`;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg`;
}

setInterval(setDate, 1000);
