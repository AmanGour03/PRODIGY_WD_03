let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let messagecontainer=document.querySelector(".message-container");
let message=document.querySelector(".message")
let newBtn =document.querySelector(".new");
let turnX = true;
const wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    if (turnX) {
      boxes.innerText = "X";
      turnX = false;
    } else {
      boxes.innerText = "O";
      turnX = true;
    }
    boxes.disabled = true;
    Winner();
  });
});
const disabledBtn=()=>{
 for(let box of boxes){
    box.disabled=true;
 }
}
const enabledBtn=()=>{
 for(let box of boxes){
    box.disabled=false;
    box.innerText="";
 }
}
const showWinner=(Winner)=>{
message.innerText=`Congrats, Winner is ${Winner}`;
messagecontainer.classList.remove("hide");
disabledBtn();
}
const Winner = () => {
  for (let win of wins) {
    let pos0=boxes[win[0]].innerText;
    let pos1=boxes[win[1]].innerText;
    let pos2=boxes[win[2]].innerText;
    if(pos0!="" && pos1!="" && pos2!=""){
        if(pos0==pos1 && pos1==pos2 && pos2==pos0){
            showWinner(pos0);
        }
    }
  }
};
const resetGame=()=>{
turnX=true;
enabledBtn();
messagecontainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);