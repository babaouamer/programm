function performOperation(operator) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result;
  
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operator";
    }
  
    document.getElementById("result").value = result;
}
var A = 12;
var B = 15;
var C = A / B;
console.log(C)

function divide(n1,n2) {
    if (typeof n1 == "undefined" || typeof n2 == "undefined") {
        console.log("please enter n1 and n2");
        return;
    }
    if (typeof n1 == 'number' && typeof n2 == 'number') {
        var result = n1 / n2 ;
        console.log (result)
    }
}
var ERROR_NOT_FOUND = "please enter n1 && n2 operation"
var ERROR_NOT_FOUND = "please enter n1 && n2 as number with operation as str "

function calculate(n1,operation,n2){
    if (typeof n1 === "undefined" ||
     typeof operation === "undefined" ||
      typeof n2 === "undefined") {
        console.log(ERROR_NOT_FOUND);
        return;
    }
}
function power(number,power) {
    if(number == undefined || power == undefined){
        console.log("pls enter number & power" )
        return;

    }
    var result = number;
    for (var i = 1; i < power; i++){
        result = result * number;
    }
    console.log(result);
}
power(5,4);

























function greeting(name) {
    return "Hello, " + name + "!";
  }
  

      