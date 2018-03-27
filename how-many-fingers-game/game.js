   
    // defining the function for the on click "guess btn" event
    document.getElementById("guess-btn").onclick = function() {
      // creating a 'fingers' variable defined by a random number
      var fingers = Math.floor(Math.random() * 5) + 1;
      console.log(fingers + " this is comp fingers");

      // create a variable to hold the users guess defined by the user imput doc element
      var userGuess = document.querySelector('input[name=radio]:checked').value;
      console.log(userGuess + " this is user guess")

      // if the finger number generated at random is the same as the users guess imput
      if (fingers == userGuess) {
          // then write a message to the doc confirm message container
          document.getElementById("confirm").innerHTML = "You got it! I am holding up " + fingers + " finger!"
          if (fingers === 1){
            document.getElementById("disp-img").src = 'icons-collection/png/005-hand-1.png'
          } else if (fingers === 2){
            document.getElementById("disp-img").src = 'icons-collection/png/004-two-fingers.png'
          } else if (fingers === 3){
            document.getElementById("disp-img").src = 'icons-collection/png/006-three-fingers.png'
          } else if (fingers === 4){
            document.getElementById("disp-img").src = 'icons-collection/png/007-hand.png'
          } else {
            document.getElementById("disp-img").src = 'icons-collection/png/003-hand-2.png'
          }
      }
      // otherwise write a message saying otherwise
      else {
          document.getElementById("confirm").innerHTML = "Nope, I'm holding up " + fingers + " fingers, but you guessed " + userGuess + "."
          if (fingers === 1){
            document.getElementById("disp-img").src = 'icons-collection/png/005-hand-1.png'
          } else if (fingers === 2){
            document.getElementById("disp-img").src = 'icons-collection/png/004-two-fingers.png'
          } else if (fingers === 3){
            document.getElementById("disp-img").src = 'icons-collection/png/006-three-fingers.png'
          } else if (fingers === 4){
            document.getElementById("disp-img").src = 'icons-collection/png/007-hand.png'
          } else {
            document.getElementById("disp-img").src = 'icons-collection/png/003-hand-2.png'
          }
      }
  }