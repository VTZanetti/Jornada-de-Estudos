// 2 params -> console.log(+)
// 2 params -> console.log(-
const num1 = 2;
const num2 = 4;
const num3 = 8;
const num4 = 16;
var sinal1 = "+"
var sinal2 = "-"
var sinal3 = "/"
var sinal4 = "*"

function conta(x, y, z) {
    if (z === "+") 
    {
        console.log(x + y);
    }
    else if (z === "-") 
    {
        console.log(x - y);
    }
    else if (z === "/") 
    {
        console.log(x / y);
    }
    else
    {
        console.log(x * y);
    }

}

conta(num1, num3, sinal1)
conta(num4, num2, sinal3)