//1. Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// Високосный год.
// Год, номер которого кратен 400, — високосный;
// Остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
// Остальные годы, номер которых кратен 4, — високосные [5].
// Все остальные годы — невисокосные.
function changeLeapYear(year){
    if (year%4==0){
        if (year%100 !=0){
            return true;
        }
        else if(year%400==0){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false
    }
}

console.log(changeLeapYear(prompt("enter year")));


//2. Дан массив с числами:
let array= [1, 2, 3, 4, 5];
// Выведите в консоль элементы этого массива в обратном порядке.

for  (let i=array.length-1; i>=0; i--){
    console.log(array[i]);
}

//3. Дан массив:
let array3= [1, '', 2, 3, '', 5];
// Удалите из массива все пустые строки.

for(i of array3){
    if (array3[i]==''){
        array3.splice(i,1);
    } 
}

console.log(array3);

//4-----. Дан массив. Удалите из него каждый пятый элемент.
let array4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
                      
for (let i=4; i<array4.length; i+=5){
     array4[i]= "*"; 
 }
 for(i of array4){
     if (array4[i] == "*"){
        array4.splice(i,1);
    } 
 }
console.log(array4);


//5-----. Дан следующий объект:
let obj = {
1: {
    1: 11,
    2: 12,
    3: 13,
},
2: {
    1: 21,
    2: 22,
    3: 23,
},
3: {
    1: 24,
    2: 25,
    3: 26,
},
}
// Найдите сумму элементов этого объекта.
let sum=0;
 for (let key in obj){
    for (let key2 in obj[key]){
     sum = sum + obj[key][key2]; 
}
 }
console.log(sum); 


//6. Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
let array6=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 for(let i=array6.length-1; i>=0; i--){
    if (array6[i]%5 !=0){
         array6.splice(i,1);
     } 
  }
console.log(array6);

//7. Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
function conversSecondToDays(second){
//    return(Math.trunc(second/(24*60*60))); 
// или не используя Math
return second/(24*60*60) - second/(24*60*60)%1;
} 

console.log(conversSecondToDays(Number(prompt('Enter seconds'))));

//8. Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр
function sumDigitOfNumber(num){
    let sum = 0;
    for (let i=0; i<num.length; i++){
        sum = sum + Number(num[i]);
    }
    return sum;
}

console.log(sumDigitOfNumber(prompt('Enter number for task 8')));

//9. Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
function changeSimilarNumber(num){
 if ((num%2 == 0 && num !=2) || (num%3 == 0 && num !=3) || (num%5 == 0 && num !=5) || (num%7 == 0 && num !=7)) {
return false;
 }   
 else {
    return true;
 }
}

console.log(changeSimilarNumber(Number(prompt('Enter number for task 9'))));

//10. Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.
function exponentiale_2(){
    let p = document.querySelector('.task10');
    let num = Number(p.innerText);
    p.innerText = num**2;
}

//11. Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
function sum_numbers(){
    let array11 = document.querySelectorAll('.task11_number');
    let p=document.querySelector('.task11_result')
    let array_number = [];
    for (let i=0; i<array11.length; i++){
        array_number[i] = Number(array11[i].innerText);
    }
    let sum = 0;
    for (let i=0; i<array_number.length; i++){
         sum += array_number[i];
     }
    p.innerText = `sum=${sum}`;
}

//12. Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
function sumFrom_0_To_100(){
    let p = document.querySelector('.task12');
    let sum = 0;
    for (let i=0; i<=100; i++){
        sum += i;
    }
    p.innerText += sum; 
}

//13. Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.
function count_pharagraf(){
    let array_pharagraf = document.querySelectorAll('.task13');
    let div = document.querySelector('.task13_result');
    div.innerText += array_pharagraf.length;
}

//14. Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
function number_pharagraf(){
    let array14 = document.querySelectorAll('.task14');
    for (let i=0; i<array14.length; i++){
        array14[i].innerText = i+1;
    }
}

//15. Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.
function arrayOfhref(){
    let array15 = document.querySelectorAll('.task15');
    let array_href =[];
    for (let i=0; i<array15.length; i++){
        array_href[i] = array15[i].href;
    }
    console.log(array_href);
}

//16. Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.
function getlink(){
    let link_a = document.querySelector("a.task16");
    let p = document.querySelector("p.task16");
    p.innerText = link_a.href;
}

//17. Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.
function changeOfSizeDiv(){
    let div_task17 = document.querySelector(".task17");
    new_width = parseInt(getComputedStyle(div_task17).width)*2;
    new_height = parseInt(getComputedStyle(div_task17).height)*2;

    div_task17.style.setProperty('width', `${new_width}px`);
    div_task17.style.setProperty('height', `${new_height}px`);
}

//18. Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.
function showLinks1(){
    let object = document.querySelector('.task18_link1');
    let div   = document.querySelector('.task18_div1');
    div.classList.remove('nonactive_div');
    div.classList.add('active_div');   
    div.innerText = object.href;
} 

function outShowLinks1(){
    let object = document.querySelector('.task18_link1');
    let div   = document.querySelector('.task18_div1');
    div.classList.remove('active_div');
    div.classList.add('nonactive_div'); 
    div.innerText = "";
} 

function showLinks2(){
    let object = document.querySelector('.task18_link2');
    let div   = document.querySelector('.task18_div2');
    console.log(div);
    div.classList.remove('nonactive_div');
    div.classList.add('active_div');  
    div.innerText = object.href;
} 

function outShowLinks2(){
    let object = document.querySelector('.task18_link2');
    let div   = document.querySelector('.task18_div2');
    div.classList.remove('active_div');
    div.classList.add('nonactive_div');
    div.innerText = "";
} 

function showLinks3(){
    let object = document.querySelector('.task18_link3');
    let div   = document.querySelector('.task18_div3');
    div.classList.remove('nonactive_div');
    div.classList.add('active_div');  
    div.innerText = object.href;
} 

function outShowLinks3(){
    let object = document.querySelector('.task18_link3');
    let div   = document.querySelector('.task18_div3');
    div.classList.remove('active_div');
    div.classList.add('nonactive_div');
    div.innerText = "";
} 