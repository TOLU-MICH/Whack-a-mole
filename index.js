const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const grid = document.querySelector(".grid");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition;

for (let i = 1; i < 9; i++) {
  grid.innerHTML += `<div class="square " id=${i}><img src="./dirt.png" alt="hole" class="dirt"></div>`;
}
const square = document.querySelectorAll(".square");

// let molePosition = setInterval(randomSquare, 1000);
randomSquare()
function randomSquare() {
    // setTimeout(() => {
    //   document.querySelector(".mole").remove();
    // }, 800);

  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.innerHTML += `<img src="./mole.png" alt="mole" class="mole">`;

  // assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("click", () => {
    if (id.id === hitPosition) {
      result++;
      score.textContent = result;
    }
    id.innerHTML +=`<img src="./Hammer Clipart 25510.png" alt="hammer" class="hammer">`;
    // setTimeout(()=>{document.querySelector(".hammer").remove()}, 400)
  });
});


// let timerId = setInterval(countDown, 1000);
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert("GAME OVER! your final score is" + result);
  }
}
