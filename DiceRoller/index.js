const Btn= document.getElementById("RollDice");
const Label= document.getElementById("Label");
const Submit= document.getElementById("mySubmit");
const numOfDices= document.getElementById("numOfDices");
const numOfSides= document.getElementById("numOfSides");

const min=1;
let max=6;
let dices=1;

let randNum;
let dice;
let text=``;
let i=0;

Submit.onclick = function() {
    dices=numOfDices.value;
    max= numOfSides.value;
}



Btn.onclick = function() {
    text=``;
    for(i=0; i<dices; i++) {
        randNum = Math.random();
        dice= Math.floor((max- min + 1)*randNum) +min;
        text += `${dice} `;
    }
    Label.textContent= text;
}