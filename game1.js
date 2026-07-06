const button = document.querySelector('.game__content-buttom');
button.addEventListener('click', function() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log('Случайное число: ' + randomNumber);
  console.log('Кнопка нажата!');
});

const quiz = [
     {
       question: "Какой цвет небо?",
       options: ["1. Красный", "2. Синий", "3. Зеленый"],
       correctAnswer: 2 
     },
     {
       question: "Сколько дней в неделе?",
       options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
     },
     {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
     }
 ];

 let correctCounter = 0;
 for (let i = 0; i < quiz.length; i++) {
  const questionText = quiz[i].question + "\n" + quiz[i].options.join("\n");
  const userAnswer = prompt(questionText);
  if (userAnswer !== null && !isNaN(userAnswer)) {
        const answerNumber = parseInt(userAnswer);
        if (answerNumber === quiz[i].correctAnswer) {
            correctCounter++;
            alert("Правильно!");
        } else {
            alert("Неправильно. Правильный ответ: " + quiz[i].correctAnswer);
        }
    } else {
        alert("Вы ввели некорректный ответ. Пропускаем вопрос.");
    }
}

alert(`Количество правильных ответов: ${correctCounter}`);

 