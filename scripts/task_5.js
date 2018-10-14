/*
5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/

var a = +prompt('Введите число: '); //вводит переменную а с клавиатуры
var b = +prompt('Введите число: '); //вводит переменную b с клавиатуры

function sum ( a, b ) { //фукнция Сложение
    return a + b;
}

function difference ( a, b ) { //функция Вычитание
    return a - b;
}

function division ( a, b ) { //функция Деление
    return a / b;
}

function multiplication ( a, b ) { //функция Умножение
    return a * b;
}

//вызов функции
console.log(sum(a, b));
console.log(difference(a, b));
console.log(division(a, b));
console.log(multiplication(a, b));
