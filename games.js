// Игра "Генерация случайного числа"
const button = document.querySelector('.game__content-buttom');
button.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Случайное число: ' + randomNumber);
    console.log('Кнопка нажата!');
});


//Игра "Простая викторина"

function playQuiz() {
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

    if (userAnswer === null) {
        alert("Игра прервана пользователем.");
        break;
    }
    if (userAnswer.trim() === "") {
        alert("Вы ничего не ввели. Игра прервана.");
        break;
    }
    if (isNaN(userAnswer)) {
        alert("Некорректный ввод. Пожалуйста, введите номер ответа.");
        i--;
        continue;
    }
    const answerNumber = parseInt(userAnswer);
    if (answerNumber < 1 || answerNumber > quiz[i].options.length) {
        alert(`Некорректный номер ответа. Введите число от 1 до ${quiz[i].options.length}`);
        i--;
        continue;
    }
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
}

//Игра "Угадай число"
function playRandomNumber() {
const randomNumberForUser = (Math.floor(Math.random() * 100) + 1);
console.log(randomNumberForUser);

while (true) {
    const answerUser = prompt("Отгадай число от 1 до 100");

    if (answerUser === null) {
        alert(`Вы ничего не ввели, игра прервана`);
        break;
    }
    const answerUserNumber = Number(answerUser);

    if (isNaN(answerUserNumber) || !Number.isInteger(answerUserNumber)) {
        alert(`Вы ввели некорректное значение, попробуйте ещё раз`);
        continue;
    }
    if (answerUserNumber < 1 || answerUserNumber > 100) {
        alert(`Значение должно быть в диапазоне от 1 до 100, попробуйте ещё раз`);
        continue;
    }
    if (answerUserNumber < randomNumberForUser) {
        alert(`Число ${answerUserNumber} - меньше загаданного`);
    }
    else if (answerUserNumber > randomNumberForUser) {
        alert(`Число ${answerUserNumber} - больше загаданного`);
    }
    else {
        alert(`Поздравляю! Ты угадал число`);
        break;
    }
}
}

//Игра "Простая арифметика"

function simpleArithmetic() {
let correct = 0;
let wrong = 0;
let tasksCount = 0;

while (tasksCount < 5) {
    const numeric1 = Math.floor(Math.random() * 10) + 1;
    const numeric2 = Math.floor(Math.random() * 10) + 1;
    const randomOp = Math.floor(Math.random() * 4);

    let operator = '';
    let answerOp = 0;

    if (randomOp === 0) {
        operator = '+';
        answerOp = numeric1 + numeric2;
    } else if (randomOp === 1) {
        operator = '-';
        answerOp = numeric1 - numeric2;
    } else if (randomOp === 2) {
        operator = '*';
        answerOp = numeric1 * numeric2;
    } else if (randomOp === 3) {
        operator = '/';
        answerOp = Math.round(numeric1 / numeric2);
    }
    const questionForUser = prompt(`${numeric1}${operator}${numeric2} = ?`);
    if (questionForUser === null) {

        break;
    }
    const answerThoseUser = Number(questionForUser);
    if (answerThoseUser === answerOp) {
        alert(`Отлично!`);
        correct++;
    } else {
        alert(`Неправильно`);
        wrong++;
    }
    tasksCount++;
}
alert(`Игра завершена! Правильно: ${correct}, Неправильно: ${wrong}`);
}

//Игра «Переверни текст»

function FlipTheText() {
const textFromUser = prompt(`Введите любой текст`);
const arrayForGame = textFromUser.split("");
const arrayInverted = arrayForGame.reverse();
const textInverted = arrayInverted.join("");
alert(`Смотри! Мы перевернули твой текст: ${textInverted}`);
}


//Игра "Камень, ножницы, бумага"

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function rockPaperScissors() {
    const gameElements = ["камень", "ножницы", "бумага"];
    const userChoice = prompt("Введите: камень, ножницы или бумага").toLowerCase().trim();
    
    if (!gameElements.includes(userChoice)) {
        alert("Ошибка! Введите: камень, ножницы или бумага");
        return;
    }

    const randomIndex = getRandomIndex(gameElements);
    const computerChoice = gameElements[randomIndex];
    
    let result = '';
    if (userChoice === computerChoice) {
        result = 'Ничья!';
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Вы победили!';
    } else {
        result = 'Компьютер победил!';
    }
    console.log(`Ваш выбор: ${userChoice}`);
    console.log(`Выбор компьютера: ${computerChoice}`);
    console.log(`Результат: ${result}`);
    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n\n${result}`);
}
rockPaperScissors();

//Игра "Генерация случайного цвета"
function randomColor() {
const symbols = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    color = color + symbols[randomIndex];
}
return color;
}
 document.getElementById('buttonClik').onclick = function() {
            document.body.style.background = randomColor();
        };
    