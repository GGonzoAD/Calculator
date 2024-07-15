var Num1;
var Num2;
var Operator;  
function Add(Num1, Num2, Operator){
 Answer = Num1 + Num2;
 Operator = "+";
 console.log(Answer);
}

function Subtract(Num1, Num2, Operator){
    Answer = Num1 - Num2;
    Operator = "-";
    console.log(Answer);
}

function Multiply(Num1, Num2, Operator){
    Answer = Num1 * Num2;
    Operator = "*";
    console.log(Answer);
}

function Divide(Num1, Num2, Operator){
    Answer = Num1 / Num2;
    Operator = "/";
    console.log(Answer);
}



function Operate(Num1, Num2, Operator){
    Add(Num1, Num2, Operator);

    Subtract(Num1, Num2, Operator);

    Multiply(Num1, Num2, Operator);

    Divide(Num1, Num2, Operator);
}