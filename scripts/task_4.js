/*
Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.
*/

//вывод через switch
var a = +prompt('Введите число от 1 до 15');

switch (a) {
    case 1: console.log(a++);
    case 2: console.log(a++);
    case 3: console.log(a++);
    case 4: console.log(a++);
    case 5: console.log(a++);
    case 6: console.log(a++);
    case 7: console.log(a++);
    case 8: console.log(a++);
    case 9: console.log(a++);
    case 10: console.log(a++);
    case 11: console.log(a++);
    case 12: console.log(a++);
    case 13: console.log(a++);
    case 14: console.log(a++);
    case 15: console.log(a++);
}

//вывод через цикл
var a = +prompt('Введите число от 1 до 15');

for (var i = a - 1; i < 15; i++) {
    a = i + 1;
    console.log(a);
}
