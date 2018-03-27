   
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
      }
      // otherwise write a message saying otherwise
      else {
          document.getElementById("confirm").innerHTML = "Nope, I'm holding up " + fingers + " fingers, but you guessed " + userGuess + "."
      }
  }