// DOM selection part
const ElmmiliSec = document.getElementById("miliSec");
const ElmSeconds = document.getElementById("seconds");
const ElmMinute = document.getElementById("minute");
const buttonStart = document.querySelector(".btnStart");
const buttonPause = document.querySelector(".btnPause");
const buttonClear = document.querySelector(".btnClear");

// declair some variable for set initial value
let Interval;
let seconds = 00;
let miliSec = 00;
let minute = 00;

// set start button and add event
buttonStart.addEventListener("click", () => {
  // clear counting time
  clearInterval(Interval);

  // set interval for repeatedly counting time  and receiving callback function
  Interval = setInterval(stopWatch, 10);
});

// set pause button and add event
buttonPause.addEventListener("click", () => {
  clearInterval(Interval);
});

// set clear button to reset all values
buttonClear.addEventListener("click", () => {
  clearInterval(Interval);
  miliSec = "00";
  seconds = "00";
  minute = "00";
  ElmmiliSec.innerHTML = miliSec;
  ElmSeconds.innerHTML = seconds;
  ElmMinute.innerHTML = minute;
});

//
function stopWatch() {
  // changing initial values from below code
  miliSec++;
  if (miliSec <= 9) {
    ElmmiliSec.textContent = "0" + miliSec;
  }

  if (miliSec > 99) {
    seconds++;
    ElmSeconds.textContent = "0" + seconds;
    miliSec = 0;
    ElmmiliSec.textContent = "0" + 0;
  }
  if (seconds > 60) {
    minute++;
    ElmMinute.textContent = "0" + minute;
    seconds = 0;
    ElmSeconds.textContent = "0" + 0;
  }

  // formatted the minute seconds and miliseconds
  if (miliSec > 9) {
    ElmmiliSec.textContent = miliSec;
  }
  if (seconds > 9) {
    ElmSeconds.textContent = seconds;
  }
  if (minute > 9) {
    ElmMinute.textContent = minute;
  }
}
