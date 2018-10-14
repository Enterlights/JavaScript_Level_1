/*
3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
* если a и b положительные, вывести их разность;
* если а и b отрицательные, вывести их произведение;
* если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
*/

let a; //ввели переменную а
let b; //ввели переменную b
let resultsOfOperation; //ввелли переменную куда будем записывать результаты операций с переменными a и b

function get(a, b) { //добавили функцию для расчета операций между а и b
    if (a >= 0 && b >= 0) { // если a и b положительные, вывести их разность;
        resultsOfOperation = a - b;
    } else if (a < 0 && b < 0) { //если а и b отрицательные, вывести их произведение;
        resultsOfOperation = a * b;
    } else { //если а и b разных знаков, вывести их сумму;
        resultsOfOperation = a + b;
    }
}

//вызываем функцию с разными значениями
get(2, 6)
console.log(resultsOfOperation);
get(-2, -6)
console.log(resultsOfOperation);
get(-2, 6)
console.log(resultsOfOperation);
get(2, -8)
console.log(resultsOfOperation);
