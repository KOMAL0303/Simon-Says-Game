 let gameSeq = []; //initializing an empty array
 let userSeq = [];

 let btns = ["red","blue","green","yellow"];

let started = false; //creating a variable which game has not started yet
let level = 0; // shows level as 0
 let h2 =document.querySelector("h2");

 document.addEventListener("keypress",function() {
if(started == false){
    console.log("Game started");// displaying game started if and only if the game is not started yet.
    started = true;//and after that updating the value of started to true
    levelUp();
}
});
function gameFlash(btn){//to flash the button when we press any key to start the game
     btn.classList.add("flash");
     setTimeout(function(){//this flash the button for 1 sec and then removes it after 1 sec
        btn.classList.remove("flash");
     },250);
}

function userFlash(btn){//when user flash the button
    btn.classList.add("userFlash");
    setTimeout(function(){//this flash the button for 1 sec and then removes it after 1 sec
       btn.classList.remove("userFlash");
    },250);
}

 function levelUp(){
 userSeq =[];
level++;
h2.innerText =`Level ${level}`;
 
let randomIdx=Math.floor(Math.random()*3);//to choose the random number between 0-3
let randColor = btns[randomIdx];
let randbtn = document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randbtn);//calling randombtn


}

function checkAns(idx) {
    
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn  = this;
    userFlash(btn); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
 function reset() {
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
 }

