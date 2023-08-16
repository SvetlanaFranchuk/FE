//Уровень 1
let div_block1 = document.createElement('div');
document.body.append(div_block1);
div_block1.style.height = '250px';
div_block1.style.width = '100%';
div_block1.style.border='1px solid black';
div_block1.style.display='flex';
div_block1.style.flexDirection = 'column';
div_block1.className = 'Level1';


//1. Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”
let block1 = document.querySelector('.Level1');
let button = document.createElement('button');
block1.append(button);
button.innerText = 'Task 1: Hello world';
button.style.height = '30px';
button.addEventListener('click', function(){console.log('Hello world')})

//2. Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// сделала новую кнопку, чтоб не портить задание 1
let div_2 = document.createElement('div');
let p = document.createElement('p');
let button2 = document.createElement('button');
block1.append(div_2);
div_2.style.boxSizing='border-box';
div_2.style.height = '50px';
div_2.style.width = '100%';
div_2.style.border='1px solid black';
div_2.style.display='flex';
div_2.className = 'task2';
let task_2 = document.querySelector('.task2');
task_2.append(button2);
task_2.append(p);

button2.innerText = 'Task 2: Increase paragraph';
button2.style.height = '30px';
button2.style.width = '200px';
button2.style.margin = '10px 0';

p.innerText = '1';
p.style.lineHeight = '30px';
p.style.margin = '10px';
button2.addEventListener('click', increaseP);

function increaseP(){
let n=p.innerText;
n++;
p.innerText = n;
}
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.

//3. Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет , а при покидании поменять обратно на белый (все шаги  сделать с помощью JS).
let div_3 = document.createElement('div');
block1.append(div_3);
div_3.style.height = '50px';
div_3.style.width = '50px';
div_3.style.border = '1px  solid black';
div_3.addEventListener('mouseover', changeColorTask3);
div_3.addEventListener('mouseout', function() {div_3.style.backgroundColor = 'white'});

function changeColorTask3() {
    div_3.style.backgroundColor = prompt('Enter color');
}


//4. Задание1: Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.
// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.
// Задание3: Попробовать так же изменить значение параграфа

let num = 0;
let button3 = document.createElement('button');
block1.append(button3);
button3.innerText = '-';
button3.style.height = '30px';
button3.style.width = '50px';
button3.style.margin = '10px 0';
button3.addEventListener('click', minus);

let button4 = document.createElement('button');
block1.append(button4);
button4.innerText = '+';
button4.style.height = '30px';
button4.style.width = '50px';
button4.style.margin = '10px 0';
button4.addEventListener('click', plus);

let p1 = document.createElement('p');
block1.append(p1);
p1.innerText = num;
p1.style.margin = '5px';

function plus (){
    console.log('плюс');
    num++;
    console.log(num); 
    p1.innerText = num;
}
function minus (){
    console.log('минус');
    num--;
    console.log(num); 
    p1.innerText = num;
}

// Уровень 2
//1. Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.

let arrayString = ["Текст ниже - это элементы массива", "Задание 1. Написать программу", "которая формирует на основе массива строк" , "множество параграфов и выводит их в интерфейс", "При клике на параграф текст должен меняться на звездочки.", "На данном этапе делать процесс обратимым при повторном клике необязательно", "9символов"]

for (i in arrayString){
let paragraph = document.createElement('p');
document.body.append(paragraph);
paragraph.innerText = arrayString[i];
paragraph.addEventListener("click", function(){replaseTextToSymbol(paragraph)});
}

function replaseTextToSymbol(p) {
    let newStr = "";
    let pLength = p.innerText.length;
     for (let k=0; k<pLength; k++ ){
         newStr = newStr + '*';
     }
    p.innerText = newStr;
}

//2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.

// Доработать этот скрипт таким образом, чтобы при повторном нажатии класс active удалялся.

let main = document.createElement('main');
document.body.append(main);
main.className = 'mainBlock';
main.style.width = '700px';
main.style.height = '75px';
main.style.border = '1px solid black';
main.style.display = 'flex';


let currentPosition = document.querySelector('.mainBlock');
for (let j=0; j<10 ; j++){
    let divCard = document.createElement('div');
    currentPosition.append(divCard);
    divCard.innerText = j;
    divCard.className  ='div_mainstyle';
    divCard.classList.add('active'); 
    divCard.addEventListener('click', function(){changeClass(divCard)});
}

function changeClass(card){
    card.classList.toggle("active");
    card.classList.toggle("nonActive");
}

