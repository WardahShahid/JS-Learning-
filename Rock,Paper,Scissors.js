let Score = JSON.parse(localStorage.getItem('score'));

if(Score === null){
   Score={
   Wins :0,
   Losses:0,
   Ties:0
   };
}
updateScoreElement();

updateResultElement();

   function playGame(playerMove){
      const computerMove= pickComputerMove();
   
   let result = '';

if(playerMove=== 'Scissors'){
   if (computerMove === 'Rock'){
   result = "You lose.";

}else if(computerMove==='Paper'){
   result = "You win.";

}else if(computerMove ==='Scissors'){
   result = "It's a Tie.";
}

}else if(playerMove ==='Paper'){

   if(computerMove==='Rock'){
   result = "You win.";

}else if(computerMove==='Paper'){
   result ="It's a Tie.";
}else if(computerMove==='Scissors'){
   result ="You lose.";
}

}else if(playerMove==='Rock'){

   if(computerMove==='Rock'){
   result = "It's a Tie.";
}else if(computerMove==='Paper'){
   result ="You lose.";
}else if(computerMove==='Scissors'){
   result ="You win.";
}

}

if (result ==="You win."){
   Score.Wins+=1;

}else if(result ==="You lose."){
   Score.Losses+=1;

}else if(result ==="It's a Tie."){
   Score.Ties+=1;

}

localStorage.setItem('score',JSON.stringify(Score));

updateScoreElement();

document.querySelector('.Js-result')
.innerHTML=`${result}`;

document.querySelector('.Js-moves')
.innerHTML=`You <img src="Images/${playerMove}-emoji.png" class="move-icon"> ,<img src="Images/${computerMove}-emoji.png" class="move-icon"> Computer`;

   }

   function updateScoreElement() {
   document.querySelector('.Js-Score-element')
.innerHTML =`Wins: ${Score.Wins}, Losses: ${Score.Losses}, Ties: ${Score.Ties} .`;
}


   function pickComputerMove() {

      const randomNumber=Math.random();
      let computerMove= '';
      
   if (randomNumber>=0 && randomNumber<1/3){
      computerMove='Rock';

}else if(randomNumber>=1/3 && randomNumber<2/3){
   computerMove='Paper';

}else if(randomNumber>=2/3 && randomNumber<1) {
     computerMove='Scissors';
} 
return computerMove;
   }