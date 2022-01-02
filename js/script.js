let lastOperand = 0;
let operation = null;

const input_text = document.getElementById('inputWindow');
const output_text = document.getElementById('outputWindow');

function btn_0() { // кнопка 0
    input_text.textContent.length <= 1 && input_text.textContent[0] == '0' ? input_text.textContent += '' : input_text.textContent += '0'; // если первый символ '0', то второй '0' подряд ввести нельзя
}
function btn_1() { // кнопка 1
    input_text.textContent += '1';
}
function btn_2() { // кнопка 2
    input_text.textContent += '2';
}
function btn_3() { // кнопка 3
    input_text.textContent += '3';
}
function btn_4() { // кнопка 4
    input_text.textContent += '4';
}
function btn_5() { // кнопка 5
    input_text.textContent += '5';
}
function btn_6() { // кнопка 6
    input_text.textContent += '6';
}
function btn_7() { // кнопка 7
    input_text.textContent += '7';
}
function btn_8() { // кнопка 8
    input_text.textContent += '8';
}
function btn_9() { // кнопка 9
    input_text.textContent += '9';
}
function btn_znak() { // кнопка +/-
    input_text.textContent = -1*parseFloat(input_text.textContent);
}
function btn_point() { // кнопка .
    input_text.textContent += '.';
}
function btn_clr() {  // кнопка "сброс"
    lastOperand = 0;
    operation = null;
    input_text.textContent = '';
    output_text.textContent = '';
}
function btn_sum() { // кнопка "сумма"
    lastOperand = parseFloat(input_text.textContent);
    operation = 'sum';
    output_text.textContent += parseFloat(input_text.textContent);
    input_text.textContent = '';
    output_text.textContent += '+';
}
function btn_minus() { // кнопка "разность"
    lastOperand = parseFloat(input_text.textContent);
    operation = 'minus';
    output_text.textContent += parseFloat(input_text.textContent);
    input_text.textContent = '';
    output_text.textContent += '-';
}
function btn_multiply() { // кнопка "умножение"
    lastOperand = parseFloat(input_text.textContent);
    operation = 'multiply';
    output_text.textContent += parseFloat(input_text.textContent);
    input_text.textContent = '';
    output_text.textContent += '*';
}
function btn_divide() { // кнопка "деление""
    lastOperand = parseFloat(input_text.textContent);
    operation = 'divide';
    output_text.textContent += parseFloat(input_text.textContent);
    input_text.textContent = '';
    output_text.textContent += '/';
}

function btn_sqrt() { // кнопка и операция "корень квадратный"
    if (parseFloat(input_text.textContent) >= 0) {
        lastOperand = parseFloat(input_text.textContent);
        const result = Math.sqrt(lastOperand);
        operation = null;
        lastOperand = 0;
        input_text.textContent = result;
        output_text.textContent = '';
    } else {
        input_text.textContent = 'Недопустивая операция'; // выдача сообщения об ошибке при выполнении данной операции с отрицательным числом
        output_text.textContent = '';
    }
}
function btn_calc() { 
    if (operation === 'sum') { // операция "сумма"
        const result = lastOperand + parseFloat(input_text.textContent);
        operation = null;
        lastOperand = 0;
        input_text.textContent = result;
        output_text.textContent = ''; 
    } 
    if (operation === 'minus') { // операция "разность"
        const result = lastOperand - parseFloat(input_text.textContent);
        operation = null;
        lastOperand = 0;
        input_text.textContent = result;
        output_text.textContent = '';
    }  
    if (operation === 'multiply') { // операция "умножение"
        const result = lastOperand * parseFloat(input_text.textContent);
        operation = null;
        lastOperand = 0;
        input_text.textContent = result;
        output_text.textContent = '';
    }  
    if (operation === 'divide') { // операция "деление"    
        if (parseFloat(input_text.textContent) != 0) {
            let result = lastOperand / parseFloat(input_text.textContent);
            operation = null;
            outputWindow.value = '';
            lastOperand = 0;
            input_text.textContent = result;
            output_text.textContent = '';
        } else {
            input_text.textContent = 'Недопустивая операция'; // выдача сообщения об ошибке при делении на 0
            output_text.textContent = '';
        }
    }
}

document.getElementById('btn_0').addEventListener('click', btn_0); // обработка кликов по кнопкам
document.getElementById('btn_1').addEventListener('click', btn_1);
document.getElementById('btn_2').addEventListener('click', btn_2);
document.getElementById('btn_3').addEventListener('click', btn_3);
document.getElementById('btn_4').addEventListener('click', btn_4);
document.getElementById('btn_5').addEventListener('click', btn_5);
document.getElementById('btn_6').addEventListener('click', btn_6);
document.getElementById('btn_7').addEventListener('click', btn_7);
document.getElementById('btn_8').addEventListener('click', btn_8);
document.getElementById('btn_9').addEventListener('click', btn_9);
document.getElementById('btn_znak').addEventListener('click', btn_znak);
document.getElementById('btn_point').addEventListener('click', btn_point);
document.getElementById('btn_clr').addEventListener('click', btn_clr);
document.getElementById('btn_sum').addEventListener('click', btn_sum);
document.getElementById('btn_minus').addEventListener('click', btn_minus);
document.getElementById('btn_multiply').addEventListener('click', btn_multiply);
document.getElementById('btn_divide').addEventListener('click', btn_divide);
document.getElementById('btn_sqrt').addEventListener('click', btn_sqrt);
document.getElementById('btn_calc').addEventListener('click', btn_calc);

addEventListener('keydown', function(event) { // ввод цифр и выполнение математических операций с клавиатуры
    switch (event.key) {
        case '0': btn_0();
        break;
        case '1':  btn_1();
        break;
        case '2':  btn_2();
        break;
        case '3':  btn_3();
        break;
        case '4':  btn_4();
        break;
        case '5':  btn_5();
        break;
        case '6':  btn_6();
        break;
        case '7':  btn_7();
        break;
        case '8':  btn_8();
        break;
        case '9':  btn_9();
        break;
        case '.':  btn_point();
        break;
        case 'Escape':  btn_clr();
        break;
        case '+':  btn_sum();
        break;
        case '-':  btn_minus();
        break;
        case '*':  btn_multiply();
        break;
        case '/':  btn_divide();
        break;
        case 's':  btn_sqrt();
        break;
        case 'Enter':  btn_calc();
        break;
    }
});