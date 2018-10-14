function power(val, pow) { //объявляем функцию с переменными числа и степени
    if (pow === 0) { // услвоие на степень 0
        return 1;
    }
    else if (pow > 0){ // услвоие на положительную степень
        return val * power( val, pow - 1);
    } else if (pow < 0){ // условия на отрицательную степень
        return 1/(val * 1/power(val, pow + 1));
    }
}

//вызываем функцию
console.log(power(5, -1));