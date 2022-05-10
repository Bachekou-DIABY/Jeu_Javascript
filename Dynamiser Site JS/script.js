let global_score_1 = document.getElementById('global_score_1')
let global_score_2 = document.getElementById('global_score_2')
let global_score_3 = null
let global_score_4 = null
let turn = 1

let round_score_1 = document.getElementById('round_score_1')
let round_score_2 = document.getElementById('round_score_2')

let new_game=document.getElementById('new_game')

let dice = document.getElementById('dice')
let hold = document.getElementById('hold')

function rollDice() {
  const value=Math.floor(Math.random() * (7 - 1) + 1);
  console.log(value);
  const score_1=parseInt(round_score_1.innerText);
  const score_2=parseInt(round_score_2.innerText);
  if(global_score_3 >=100 || global_score_4 >= 100){
    dice.disabled = true;
    hold.disabled = true;
    return;
  }
  else{
    if(turn == 1){
      document.getElementById('player_1').style.textDecoration = "underline"
      document.getElementById('player_2').style.textDecoration = "none"
      if(value==1){
        round_score_1.innerText=0;
        document.getElementById('player_1').style.textDecoration = "none"
        document.getElementById('player_2').style.textDecoration = "underline"
        turn=2;
      }
      else{
      round_score_1.innerText=score_1+value;
      }
    }
    else {
      document.getElementById('player_1').style.textDecoration = "none"
      document.getElementById('player_2').style.textDecoration = "underline"
      if(value==1){
        round_score_2.innerText=0;
        document.getElementById('player_1').style.textDecoration = "underline"
        document.getElementById('player_2').style.textDecoration = "none"
        turn=1;
      }
      else{
      round_score_2.innerText=score_2+value;
      }
    }
  }
}

function holdDice() {
  const score_1=parseInt(round_score_1.innerText);
  const score_2=parseInt(round_score_2.innerText);
  if(global_score_3 >=100 || global_score_4 >= 100){
    dice.disabled = true;
    hold.disabled = true;
    return;
  }
  else{
    if(turn==1){
      if(score_1!=0){
        global_score_3=global_score_3+score_1;
        if(global_score_3>=100){
          alert('Player 1 won');
        }
        global_score_1.innerHTML = global_score_3;
        round_score_1.innerText=0;
        turn=2;
        document.getElementById('player_1').style.textDecoration = "none"
        document.getElementById('player_2').style.textDecoration = "underline"
      }
    }
    else{
      if(score_2!=0){
        global_score_4=global_score_4+score_2;
        if(global_score_4>=100){
          alert('Player 2 won');
        }
        global_score_2.innerHTML = global_score_4;
        round_score_2.innerText=0;
        turn=1;
        document.getElementById('player_1').style.textDecoration = "underline"
        document.getElementById('player_2').style.textDecoration = "none"
      }
    }
  }
}

dice.addEventListener('click',function(){
  rollDice();
})

hold.addEventListener('click',function(){
  if(turn == 1){
    holdDice(round_score_1);
  }
  else{
    holdDice(round_score_2);
  }
})

new_game.addEventListener('click',function(){
  document.location.reload();
})
