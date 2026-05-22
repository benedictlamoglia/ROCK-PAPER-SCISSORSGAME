
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
   alert(` Result:  ${computerChoice} ang pinili ng computer`);


   let Result = '';

   if (computerChoice === 'Rock') {
         Result = 'Tie';
   } else if (computerChoice ==='Paper') {
         Result = 'Lose'
   } else if (computerChoice === 'Scissors') {
        Result = 'Win';
   }

   alert(`You Pick ${userChoice} and the computer pick ${computerChoice} and the result is you ${Result}`);
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
   alert(` Result:  ${computerChoice} ang pinili ng computer`);


   let Result = '';

   if (computerChoice === 'Paper') {
         Result = 'Tie';
   } else if (computerChoice ==='Scissors') {
         Result = 'Lose'
   } else if (computerChoice === 'Rock') {
        Result = 'Win';
   }
   alert(`You Pick ${userChoice} and the computer pick ${computerChoice} and the result is you${Result}`);
}


function random3() {
 const randomNumber = Math.random();

    let userchoice = 'Scissors';

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
   alert(` Result:  ${computerChoice} ang pinili ng computer`);


   let Result = '';

   if (computerChoice === 'Scissors') {
         Result = 'Tie';
   } else if (computerChoice ==='Rock') {
         Result = 'Lose'
   } else if (computerChoice === 'Paper') {
        Result = 'Win';
   }
   alert(`You ${userchoice} and the computer pick ${computerChoice} and the result is you ${Result}`);
}
