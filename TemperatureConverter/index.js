const MyInput = document.getElementById("MyInput");
const Fahr = document.getElementById("ToFahr");
const Celc = document.getElementById("ToCelc");
const Submit = document.getElementById("Submit");
const Result = document.getElementById("Result");

function convert () {
    let result;
    let degres= MyInput.value;

    if(Fahr.checked) {
        result= degres*1.8 + 32;
        Result.textContent= `${result.toFixed(1)}°F`
    } else if(Celc.checked) {
        result= (degres - 32)*5/9;
        Result.textContent= `${result.toFixed(1)}°C`
    } else {
        Result.textContent= `You did not specify the conversion`;
    }
}


