const button = document.querySelector('.game__content-buttom');
button.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log('Случайное число: ' + randomNumber);
  console.log('Кнопка нажата!');
});