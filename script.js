
let num1 = '';
let num2 = 0;
let result = 0;
console.log('num2 = '+num2+' '+'result = '+result);
var limit = 0;

class Stack{
    
    constructor()
    {
        this.array = [];
        this.count = 0;
    }

    isEmpty(){
        return this.count == 0;
    }
    push(data)
    {
        this.count++;
        this.array.push(data);
    }
    pop()
    {
        this.count--;
        return this.array.pop();
    }
}



const StacktoHoldNumbers = new Stack();
const StacktoHoldAos = new Stack();
function calculateBtnPressed(ArithmeticSign)
{
    num2 = parseInt(document.getElementById('txtscreen').value);
    document.getElementById('txtscreen').textContent = '';
    if(StacktoHoldNumbers.isEmpty())
    {
        StacktoHoldAos.push(ArithmeticSign);
        StacktoHoldNumbers.push(num2);
    }
    else{
        let tempcharholder = StacktoHoldAos.pop();
        console.log(tempcharholder)
        result = StacktoHoldNumbers.pop();
        if(tempcharholder ==='=')
            document.getElementById('txtscreen').textContent = result;

        else if(tempcharholder ==='+')
            {result = result+num2;console.log('plus btn pressed');}

        else if(tempcharholder ==='-')
            {result = result - num2;console.log('plus btn pressed');}

        else if(tempcharholder ==='/')
            {result = result/num2;console.log('plus btn pressed');}

        else if(tempcharholder === '*')
            result = result*num2;

        StacktoHoldAos.push(ArithmeticSign);
        StacktoHoldNumbers.push(result);
        document.getElementById('txtscreen').textContent = result;
        console.log(result);
    }
    num1 = '';
}


function displayOnScreen(number)
{
    num1=num1+number;
    document.getElementById('txtscreen').textContent = num1;

}

function numberEqual()
{
    calculateBtnPressed('=');
}
function numberDiv()
{
    calculateBtnPressed('/');
}
function numberMulti()
{
    calculateBtnPressed('*');
}
function numberMinus()
{
    calculateBtnPressed('-');
}

function numberPlus()
{
    calculateBtnPressed('+');
}


function numberOne()
{
    displayOnScreen(1);
}

function numberTwo()
{
    displayOnScreen(2);
}

function numberThree()
{
    displayOnScreen(3);
}

function numberFour()
{
    displayOnScreen(4);
}

function numberFive()
{
    displayOnScreen(5);
}

function numberSix()
{
    displayOnScreen(6);
}
function numberSeven()
{
    displayOnScreen(7);
}

function numberEight()
{
    displayOnScreen(8);
}

function numberNine()
{
    displayOnScreen(9);
}

function numberZero()
{
    displayOnScreen(0);
}