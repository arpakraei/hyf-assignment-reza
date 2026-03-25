const startBut=document.getElementById('startBut');
const gameSeconds=document.getElementById('gameRound');
const presser1=document.getElementById('presser1');
const presser2=document.getElementById('presser2');
const winmessage=document.getElementById('winmessage');
let gameState={
    countLKey:0,
    countSKey:0,
    game:false,

}

document.addEventListener('keydown',(event)=>{
    if (gameState.game===true){
        if (event.key.toLowerCase()==='l'){
            
            gameState.countLKey++;
            presser1.textContent=gameState.countLKey;
        }
        else if (event.key.toLowerCase()==='s'){
            gameState.countSKey++;
            presser2.textContent=gameState.countSKey;
        }
    }
    
});

startBut.addEventListener('click',()=>{
    
    if (!gameSeconds) return;
    gameState.game=true;
    gameState.countLKey=0;
    gameState.countSKey=0;
    startBut.disabled=true;
    winmessage.textContent="";
    presser1.textContent="";
    presser2.textContent="";
    setTimeout(()=>{
    gameState.game=false;
    startBut.disabled=false;
    gameSeconds.value="";
    checkWinner();
},Number(gameSeconds.value)*1000);
    
    
});


function checkWinner(){
    if (gameState.countLKey>gameState.countSKey)
    winmessage.textContent=` L Player is winner with:${gameState.countLKey} times`;
    else if (gameState.countLKey<gameState.countSKey)
        winmessage.textContent=`S Player is winner with:${gameState.countSKey}`;
    else {
        winmessage.textContent=`Both S , L Player is winner with:${gameState.countSKey}`;
    }
}