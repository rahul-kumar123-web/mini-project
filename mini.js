let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");

const compScorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame=()=>{
   
    msg.innerText="game was draw.play again.";
     msg.style.backgroundColor="black";

};
const showWinner=(userWin ,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
       
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
         msg.style.backgroundColor="red";
    }
}; 


const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice)

    if(userchoice===compchoice){
        drawgame();

    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin= compScore==="paper"?false:true;
        }else if(userchoice==="paper"){
            user=compchoice==="scissors"?false:true;
        }else{
            userWin=compchoice==="rock"?false:true;

        }
        showWinner(userWin,userchoice,compchoice);


    

    }

}

choices.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const userchoice=choices.getAttribute("id");
        
        playgame(userchoice)
    });
});