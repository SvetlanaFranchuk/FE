// Допишите функцию таким образом, чтобы генерируемое значение находилось в диапазоне от 40 до 80:

// изменяет размер объекта
function changeobjectsize() {
    let object = document.querySelector('.square');
    const size = Math.trunc(40 + Math.random() * 40);
    object.style.width = `${size}px`;
    object.innerText = size;
  }
  
  