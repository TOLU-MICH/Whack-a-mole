		WHACK A MOLE GAME
 Whack-A-Mole is an arcade game, originally known as Mogura Taiji or Mogura Tataki in Japan. Hit as many moles as you can before the timer runs out. You have 60 seconds to whack as many moles as you can.  


#### HTML Structure

- div.menu
 - div.menu-content
   - h1
   - p
   - img
   - buttton.cancel	
- span.score_board
- span.seconds_board
- img.sign_board
  - div.result
- div.grid



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

- It add an event listener to each hole so that anytime its clicked on an hammer appeared
- It also delet the hammer after every 200 milliseconds

### randomSquare
randomSquare()
- makes the mole to appear in a random hole every 1 seconds 
- It also delete the mole every 800 milliseconds 

### countDown
countDown()
- It decreases the time every 1 seconds 
- once it's 60 Seconds it stops every activity in the game
