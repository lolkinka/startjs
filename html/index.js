let n =  Math.floor(Math.random() * 999);
alert (n)
let guess = prompt('Введи число: ');
if (isNaN(guess)) {
    alert('Вы ввели некорректное значение');
}  if (guess == n) {
    alert('Вы угадали');
} else {
    alert ('Вы не угадали. Правильный ответ');
}