//1. Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
function checkEven (){
    let num1_1 = Number(prompt('Enter number for task1'));
    if (num1_1 % 2 == 0) {
        return "Yes";
    }
    else {
        return "No";
    }

}

console.log(checkEven());

//2. Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.
function seekMax (num2_1, num2_2){
    if (num2_1 > num2_2) {
        return num2_1;
    }
    else if (num2_1 < num2_2) {
        return num2_2;
    }
    else {return 'num1 equal num2'}
}

let num2_1 = Number(prompt('Enter num1 for task2'));
let num2_2 = Number(prompt('Enter num2 for task2'));
console.log(seekMax(num2_1,num2_2));

//3. Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае
function checkEven_2 (num3_1){
    if (num3_1 % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log(checkEven_2(Number(prompt('Enter number for task3'))));
    
//4. Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
var array1 = [];

function createArray(num4_1){
    for (let i=0; i<=num4_1; i++){
        array1[i] = i;
    }
    return array1;
}

let count = Number(prompt('Enter number for task4'));
createArray(count);
for (let i=0; i<=count; i++){
    console.log(array1[i]);
}

//5. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
var array2 = [];
function createArray2 (num1, num2){
    let start = 0;
    let finish = 0;
    if (num1 >= num2) {
        start = num2;
        finish = num1;
    }
    else {
        start = num1;
        finish = num2;
    }
    for (let i=start; i<=finish; i++){
        array2[i-start] = i;
    }
    return array2;
}
let num5_1 = Number(prompt('Enter number1 for task5'));
let num5_2 = Number(prompt('Enter number2 for task5'));
createArray2(num5_1, num5_2);
for (let i=0; i<=array2.length-1; i++){
    console.log(array2[i]);
}


//6. Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему. 
var array3 = [];
function createArray3 (num1, num2){
    let start = 0;
    let finish = 0;
    if (num1 >= num2) {
        start = num2;
        finish = num1;
    }
    else {
        start = num1;
        finish = num2;
    }
    for (let i=finish; i>=start; i--){
        array3[finish - i] = i;
    }
    return array3;
}
let num6_1 = Number(prompt('Enter number1 for task6'));
let num6_2 = Number(prompt('Enter number2 for task6'));
createArray3(num6_1, num6_2);
for (let i=0; i<=array3.length-1; i++){
    console.log(array3[i]);
}

//7. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
let list = [2,4,6,7,5];
let sum = 0;
for (let i of list){
    sum += i; 
}
console.log(sum);


//8. В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
let list1 = [2,-4,6,-7,5];
let sum1 = 0;
for (let i of list1){
    if (i > 0) {
    sum1 += i; }
}
console.log(sum1);

//9. В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
let list2 = [2,-4,6,-7,5];
let sumEven = 0;
let sumOdd = 0;
for (let i of list2){
    if (i%2 == 0) {
    sumEven += i; }
    else {sumOdd += i }
}
console.log(sumEven - sumOdd);

//10. Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
let array_10 = [1,-5,6,7,-10,2]
function calcMin (array_formin){
    min = Infinity;
    for (let i of array_formin){
        if (i < min){
            min = i
        }
    }
   return min;
}
function calcMax (array_formax){
    max = -Infinity;
    for (let i of array_formax){
        if (i > max){
            max = i
        }
    }
   return max;
}
function calcSum (array_Sum){
    sum = 0;
    for (let i of array_Sum){
       sum += i; 
    }
    
   return sum;
}

console.log(calcMin(array_10));
console.log(calcMax(array_10));
console.log(calcSum(array_10)/array_10.length);

//11. Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
let sum_11=0;
for (let i=0; i<=50; i += 5){
    if (i%5 == 0){
        sum_11 += i;
    }
}
console.log(sum_11);

//12. В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль
let list_12 = [5,7,1,0,false, 8,9];
let sum_12 = 0;
for (let i of list_12){
    if (i === true || i === false ){
        break;
    }
    else{
      sum_12 += i;
    }
}
console.log(sum_12);

//В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар. 
// Пример массива
let arr = [
            {
            id: 1,
            title: "bicycle",
            price: 45000,
            discount: 10
            },
            {
            id: 2,
            title: "roller-skates",
            price: 15000,
            discount: 5
            },
            {
            id: 3,
            title: "Kick scooter",
            price: 10000,
            discount: 30
            },
            {
            id: 4,
            title: "skis",
            price: 25000,
            discount: 20
            },
            {
            id: 5,
            title: "skate",
            price: 10000,
            discount: 0
        }
    ]


//13. Написать цикл, который выводит только названия товаров.
for (i of arr){
    console.log(i.title);
}

//14. Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
for (i of arr){
    console.log('"<'+i.title+'> ('+i.price+'>)"');
}

//15 Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
for (i of arr){
    console.log('"<'+i.title+'> ('+(i.price - i.price*i.discount/100)+'>)"');
}

//16 Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).
let maxPriece = 0;
let i_maxPrice=0;
for (i of arr){
    if (i.price > maxPriece){
        maxPriece = i.price;
        i_maxPrice = i;
    }
}
console.log(i_maxPrice);

//17 Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.
// Пример объекта:
let menu = {
    width: 200, 
    height: 300,
    title: "my menu"
};

// Результат:

for (let i in menu){
    if (typeof(menu[i]) === 'number'){
        menu[i] *=2;
    }
console.log(menu[i]);
}

// let menu = {
//     width: 400, 
//     height: 600,
//     title: "my menu"
// };

//18 Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
function compare (num18_1, num18_2){
    if (num18_1 > num18_2) {
        return 1;
    }
    else if (num18_1 < num18_2) {
        return -1;
    }
    else {return 0}
}

let num18_1 = Number(prompt('Enter num1 for task18'));
let num18_2 = Number(prompt('Enter num2 for task18'));
console.log(compare(num18_1,num18_2));


//19 Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
function compare2 (num19_1, num19_2){
    if (num19_1 %2 == 0 && num19_2 %2 == 0) {
        return num19_1*num19_2;
    }
    else if (num19_1 %2 != 0 && num19_2 %2 != 0) {
        return num19_1 + num19_2;
    }
    else {
        if (num19_1 %2 == 0 && num19_2 %2 != 0) {
            return num19_2;}
        else {num19_1}    
    }
}

let num19_1 = Number(prompt('Enter num1 for task19'));
let num19_2 = Number(prompt('Enter num2 for task19'));
console.log(compare2(num19_1,num19_2));