/* 
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
*/
const cube = (number)=>number**3;
let userNumber = +prompt('Введите число');
console.log(`Куб числа ${userNumber} равен ${cube(userNumber)}`)

/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/
const Salary = (number) => number*0.87;
userNumber = Number(prompt('Введите зарплату'));

if (isNaN(userNumber)){
    alert('Введено неверно!')
} else{
    console.log(`Размер заработной платы за вычетом налогов равен ${Salary(userNumber)}`);
}

/**
 * Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
 */
function maxNumber(array){
    let max = array[0]
    for (let i = 0; i < array.length; i++){
        if(max<array[i]){
            max = array[i];
        }
    }
    return max;
}
let arr = new Array();
for (let i = 0; i < 3; i++) { 
    arr[i] = Number(prompt(`Ведите ${i+1} число`));
  }
console.log(`Максимальное число ${maxNumber(arr)}`);

/**
 * Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
 */
const sum = (number1, number2) => number1+number2;
const division = (number1, number2) => number1/number2;
const multiple = (number1, number2) => number1*number2;
function difference(number1,number2){
    if (number1<number2){
        let prom = number1;
        number1 = number2;
        number2 = prom;
    }
    return number1 - number2;
}

let number1 = Number(prompt(`Ведите 1-e число`));
let number2 = Number(prompt(`Ведите 2-e число`));

console.log(`Сумма чисел = ${sum(number1,number2)}`);
console.log(`Разность чисел = ${difference(number1,number2)}`);
console.log(`Произведение чисел = ${multiple(number1,number2)}`);
console.log(`Частное чисел = ${division(number1,number2)}`);


