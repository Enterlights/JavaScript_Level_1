/*
6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

var arg1 = +prompt('Введите первое число: '); //вводим arg1 переменную через клавиатуру
var arg2 = +prompt('Введите второе число: '); //вводим arg2 переменную через клавиатуру
var operation = prompt('Введите одну из операций (+  -  / *): '); //вводим операции через клавиатуру

function sum(arg1, arg2) { //фукнция Сложение
    return arg1 + arg2;
}

function dif(arg1, arg2) { //функция Вычитание
    return arg1 - arg2;
}

function div(arg1, arg2) { //функция Деление
    return arg1 / arg2;
}

function mult(arg1, arg2) { //функция Умножение
    return arg1 * arg2;
}

function mathOperation(arg1, arg2, operation) { //функция для перебора вариантов операций
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
            break;
        case '-':
            return dif(arg1, arg2);
            break;
        case '/':
            return div(arg1, arg2);
            break;
        case '*':
            return mult(arg1, arg2);
            break;
    }
}

//вызов функции
console.log(mathOperation(arg1, arg2, operation));