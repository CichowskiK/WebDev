const result= document.getElementById("Result");

function newCalc() {
    let firstValue="";
    let secoundValue="";
    let Operator="";

    function number(value) {
        firstValue += value;
        result.textContent=firstValue;
    }

    function operator(operator) {
        secoundValue=firstValue;
        firstValue="";
        Operator=operator;
        result.textContent=firstValue;
    }

    function eval() {
        first=Number(firstValue);
        secound=Number(secoundValue);

        /*console.log(`first: ${first}`);
        console.log(`secound: ${secound}`);
        console.log(`first: ${firstValue}`);
        console.log(`secound: ${secoundValue}`);*/


        switch(Operator) {
            case "+":
                secoundValue=first+secound;
                break;
            case "-":
                secoundValue=first-secound;
                break;
            case "*":
                secoundValue=first*secound;
                break;
            case "/":
                try {
                    secoundValue=secound/first;
                    if (secoundValue== Infinity) {
                        throw error;
                    }
                } catch(error) {
                    secoundValue="You can't divide by 0";
                }
                break;
        }
        result.textContent=secoundValue;
        firstValue="";
    }

    return {number, operator, eval};
}

const Calc= newCalc();

