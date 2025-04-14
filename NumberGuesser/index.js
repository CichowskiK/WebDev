const Guess= document.getElementById("Guess");
const Check= document.getElementById("Check");
const HowClose= document.getElementById("HowClose");
const Result= document.getElementById("Result");
const Replay= document.getElementById("Replay");

let number= Math.floor(10*Math.random() + 1);
let atempts=0;

Check.onclick = function() {
    let value=Guess.value;
    if(value > number) {
        atempts++;
        HowClose.textContent = "Number is lower";
    } else if(value < number) {
        atempts++;
        HowClose.textContent = "Number is higher";
    } else {
        HowClose.textContent = "";
        Result.textContent = `Good job, the number was ${number},\nyou guessed it after ${atempts} atempts`;
        Replay.style.display = "inline";
        Check.style.display = "none";
    }
}

Replay.onclick = function() {
    number= Math.floor(10*Math.random() + 1);
    atempts=0;
    Replay.style.display = "none";
    Result.textContent = "";
    Check.style.display = "inline";
}