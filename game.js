
let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
}

function resetScore() { 
    score = {
       wins: 0,
      losses: 0,
      ties: 0
    }
    localStorage.removeItem('score');

    
    showPopup(
        "🔄 Score Reset",
        
        `Wins: ${score.wins}<br>
         Losses: ${score.losses}<br>
         Ties: ${score.ties}`

      );
}


function random1 () {
 const randomNumber = Math.random();

         
    let userChoice = 'Rock';
    let computerChoice = ''; 
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
    console.log('Ang random number ay mas mababa sa 1/3');
    computerChoice = 'Rock';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    console.log('Ang random number ay mas mababa sa 2/3 pero mas mataas sa 1/3');
    computerChoice = 'Paper';
 } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    console.log('Ang random number ay mas mataas sa 2/3');
    computerChoice = 'Scissors';
 }

   let Result = '';

   if (computerChoice === 'Rock') {
         Result = 'Tie';
   } else if (computerChoice ==='Paper') {
         Result = 'Lose'
   } else if (computerChoice === 'Scissors') {
        Result = 'Win';
   }

      if (Result === 'Win') {
    score.wins += 1;
} else if (Result === 'Lose') {
      score.losses += 1;
} else if (Result === 'Tie') { 
      score.ties += 1;
}
   localStorage.setItem('score', JSON.stringify(score));
showPopup(
    "🎮 Game Result",
    
    `You picked ${userChoice}<br>
     Computer picked ${computerChoice}<br><br>

     Result: ${Result}<br><br>

     Wins: ${score.wins}<br>
     Losses: ${score.losses}<br>
     Ties: ${score.ties}`
);
 }

function random2 () {
 const randomNumber = Math.random();
    let userChoice = 'Paper';
    let computerChoice = ''; 
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
    console.log('Ang random number ay mas mababa sa 1/3');
    computerChoice = 'Rock';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    console.log('Ang random number ay mas mababa sa 2/3 pero mas mataas sa 1/3');
    computerChoice = 'Paper';
 } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    console.log('Ang random number ay mas mataas sa 2/3');
    computerChoice = 'Scissors';
 }

   let Result = '';

   if (computerChoice === 'Paper') {
         Result = 'Tie';
   } else if (computerChoice ==='Scissors') {
         Result = 'Lose'
   } else if (computerChoice === 'Rock') {
        Result = 'Win';
   }
  

      if (Result === 'Win') {
    score.wins += 1;
} else if (Result === 'Lose') {
      score.losses += 1;
} else if (Result === 'Tie') { 
      score.ties += 1;
}
   localStorage.setItem('score', JSON.stringify(score));
showPopup(
    "🎮 Game Result",
    
    `You picked ${userChoice}<br>
     Computer picked ${computerChoice}<br><br>

     Result: ${Result}<br><br>

     Wins: ${score.wins}<br>
     Losses: ${score.losses}<br>
     Ties: ${score.ties}`
);
}


function random3() {
 const randomNumber = Math.random();

    let userChoice = 'Scissors';

    let computerChoice = ''; 
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
    console.log('Ang random number ay mas mababa sa 1/3');
    computerChoice = 'Rock';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    console.log('Ang random number ay mas mababa sa 2/3 pero mas mataas sa 1/3');
    computerChoice = 'Paper';
 } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    console.log('Ang random number ay mas mataas sa 2/3');
    computerChoice = 'Scissors';
 }


   let Result = '';

   if (computerChoice === 'Scissors') {
         Result = 'Tie';
   } else if (computerChoice ==='Rock') {
         Result = 'Lose'
   } else if (computerChoice === 'Paper') {
        Result = 'Win';
   }
   
   
 if (Result === 'Win') {
    score.wins += 1;
} else if (Result === 'Lose') {
      score.losses += 1;
} else if (Result === 'Tie') { 
      score.ties += 1;
}

showPopup(
    "🎮 Game Result",
    
    `You picked ${userChoice}<br>
     Computer picked ${computerChoice}<br><br>

     Result: ${Result}<br><br>

     Wins: ${score.wins}<br>
     Losses: ${score.losses}<br>
     Ties: ${score.ties}`
);


}


function showPopup(title, message) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-title").innerHTML = title;

    document.getElementById("popup-message").innerHTML = message;
}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}

 