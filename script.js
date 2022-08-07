const secondsEl = document.getElementById("seconds");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let s = new Date().getSeconds();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let ampm = "AM";
  if(h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  s = s < 10 ? "0" + s : s;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  secondsEl.innerText = s;
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  ampmEl.innerText = ampm;

  setTimeout(function(){
    updateClock();
  },1000);

}

updateClock();


// **************** Dark Mode Toggle **************


const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundImage = "url('Images/Dark-mode.avif')"
  }
  else {
    bodyEl.style.backgroundImage = "url('Images/Light-mode.avif')"
  }

}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});


function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
