let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let Started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(Started==false){
    console.log("game is started");
    Started=true;
  levelUp();


    }
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
   // console.log(randColor);
   // console.log(randIdx);
  //  console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
    gameFlash(randBtn);

}
function checkAns(idx){
    console.log("currlevel:",level);
    
    if(userSeq[idx]==gameSeq[idx]){
       console.log("same value");
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
        
       }

    }
    else{
        h2.innerHTML=`game Over! your score was <b>${level}<b> <br>presh any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style="white";

        },150);
       reset();

    }
}
function btnPresh(){
 let btn=this;
 userflash(btn);
 userColor=btn.getAttribute("id");
 userSeq.push(userColor);
 console.log(userColor);
 checkAns(userSeq.length-1);

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPresh);

}
function reset(){
    Started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
