const decBtn = document.getElementById("decreseBtn");
const incBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("count");

let count = 0;

incBtn.onclick = function() {
    count++;
    countLabel.textContent=count;
}

decBtn.onclick = function() {
    count--;
    countLabel.textContent=count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent=count;
}