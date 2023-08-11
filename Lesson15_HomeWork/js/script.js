//1. Написать скрипт, который находит параграфы и четным параграфам меняет текст на 'Я четный', a нечетным на 'Я нечетный'.
let paragraphs = document.querySelectorAll('p');
for (let i=0; i<paragraphs.length; i++){
    if (i%2==0){
        paragraphs[i].innerText = 'Я нечетный';
    }
    else{
        paragraphs[i].innerText = 'Я четный';
    }
}

//2. Написать скрипт, который находит параграфы, которые находятся внутри div-ов и первым 2 параграфам текст меняет на указанные пользователем значения.
let paragraphs2 = document.querySelectorAll('div > p');
for (let i=0; i<2; i++){
        paragraphs2[i].innerText = prompt(`Введите текст ${i+1} для задания 2`);
   
}


//3. Написать скрипт, который находит параграфы с классом 'p1' и выводит (console) общее содержимое параграфов.
let paragraphs3 = document.querySelectorAll('.p1');
for (let key of paragraphs3){
       console.log(key.innerHTML + " это из задания 3");    
}

//4. Написать скрипт, который находит параграфы и последним 2 четным параграфам меняет текст на указанные пользователем значения.
let paragraphs4 = document.querySelectorAll('.task4');
for (let i=paragraphs4.length-1; i>paragraphs4.length-5; i--){
    if (i%2 == 1){   
    paragraphs4[i].innerText = prompt(`Введите текст для задания 4`)};
}


//5. Написать скрипт, который находит параграфы и выводит (console) текстовое содержимое начная с 3 параграфа до 6.
let paragraphs5 = document.querySelectorAll('p');
 for (let i=2; i<6; i++){
        console.log(paragraphs5[i].innerText + " это из задания 5");    
 }