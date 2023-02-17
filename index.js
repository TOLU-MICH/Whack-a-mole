const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const grid = document.querySelector(".grid");
let score = document.querySelector("#score");
let preLoader = document.getElementById("preloader");
let body = document.querySelector("body");

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition, molePosition, timerId;

// once the page is loaded it removes the preloader page
window.addEventListener("load", () => {
  preLoader.style.display= "none";
});

// For each hole container
for (let i = 1; i < 9; i++) {
  grid.innerHTML += `<div class="square " id=${i}><img src="images/dirt.png" alt="hole" class="dirt"></div>`;
}

document.querySelector(".cancel").onclick = () => {
  document.querySelector(".menu").style.display = "none";
  molePosition = setInterval(randomSquare, 1000);
  timerId = setInterval(countDown, 1000);
};

const square = document.querySelectorAll(".square");
// randomSquare()
function randomSquare() {
  // Tt removes the mole every 800 milliseconds
  setTimeout(() => {
    document.querySelector(".mole").remove();
  }, 800);

  // set a random position for the  mole
  let randomPosition = square[Math.floor(Math.random() * 8)];
  // Set the mole to the random position
  randomPosition.innerHTML += `<img src="images/mole.png" alt="mole" class="mole">`;

  // assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

// Iterate all dirt container
square.forEach((id) => {
  id.addEventListener("click", () => {
    // If the clicked id is the same as the mole id
    // the player recieves an addition of one point
    if (id.id === hitPosition) {
      result++;
      score.textContent = result;
    }
    id.innerHTML += `<img src="images/Hammer Clipart 25510.png" alt="hammer" class="hammer">`;
    // after 200 milliSeconds it removes the hammer
    setTimeout(() => {
      document.querySelector(".hammer").remove();
    }, 200);
  });
});

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  // If the time is 0 the game ends
  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(molePosition);
    // alert("GAME OVER! your final score is" + result);
    body.innerHTML += `<p class = "notify">GAME OVER!</p>`;
  }
}


