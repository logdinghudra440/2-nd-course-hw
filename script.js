
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] == 10) break;
}


const numbs2 = [1, 5, 4, 10, 0, 3];
let position = numbs2.indexOf(4);
console.log(position);


const numbs3 = [1, 3, 5, 10, 20].join(' ');
console.log(numbs3);


const array = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    array.push(row);
}
console.log(array);

const numbs4 = [1, 1, 1];
numbs4.push(2, 2, 2);
console.log(numbs4);


const numbs5 = [9, 8, 7, 'a', 6, 5];
numbs5.sort();
const numbersOnly = numbs5.filter(item => typeof item === 'number');
console.log(numbersOnly);


const numbs6 = [9, 8, 7, 6, 5];
const question = prompt("Угадай число до 10");
if (question !== null && !isNaN(question)) {
    const answer = parseInt(question);
    if (numbs6.includes(answer)) {
        alert("Угадал");
    } else {
        alert("Не угадал");
    }
} else {
    alert("Вы ввели некорректное число!");
}


let text = 'abcdef';
let textArray = text.split('');
textArray.reverse();
let joinedText = textArray.join('');
console.log(joinedText);


const arr = [[1, 2, 3], [4, 5, 6]];
const result = [...arr[0], ...arr[1]];
console.log(result);


const numbs7 = [5, 7, 4, 8, 2];
for (let i = 0; i < numbs7.length - 1; i++) {
    const sum = numbs7[i] + numbs7[i + 1];
    console.log(sum);
}


const numbs8 = [6, 3, 4, 5];
const squareNumbs = numbs8.map(numbs8 => numbs8 ** 2);
console.log(squareNumbs);


const words = ['table', 'cake', 'road'];
const wordsLength = words.map(words => words.length);
console.log(wordsLength);


const numbs9 = [5, -7, 8, 2, -4, -6];
const filterNumbs = numbs9.filter(i => i < 0);
console.log(filterNumbs);


const array1 = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = (Math.floor(Math.random() * 10));
    array1.push(randomNumber);
}

const filterArray = array1.filter(i => i % 2 === 0);

console.log('Исходный массив:', array1);
console.log('Массив с четными значениями:', filterArray)


const array2 = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.random() * 10;
    array2.push(randomNumber);
}
const sumArray = array2.reduce((total, i) => total + i, 0);
const resultArray = sumArray / 10;
console.log('Исходный массив:', array2);
console.log('Среднее арифметическое:', resultArray);

//Игра "Угадай число"
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

//Игра "Простая арифметика"
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

//Игра «Переверни текст»

const textFromUser = prompt(`Введите любой текст`);
const arrayForGame = textFromUser.split("");
const arrayInverted = arrayForGame.reverse();
const textInverted = arrayInverted.join("");
alert(`Смотри! Мы перевернули твой текст: ${textInverted}`);

//задание 1
let justText = 'js';
let changeJustText = justText.toUpperCase();

//задание 2
const products = ['Конфеты Птичка','Леденцы Цитрусовые','Конфеты Суфле','Пироженое Наполеон'];
const search = 'конфеты';
products.forEach((product)=>{
    if (product.toLowerCase().startsWith(search.toLowerCase())) {
      console.log(product);
   }
});

//задание 3
const average = 32.58884;
console.log(Math.floor(average));
console.log(Math.ceil(average));
console.log(Math.round(average));

//задание 4
const min = Math.min(52, 53, 49, 77, 21, 32);
console.log(min);
const max = Math.max(52, 53, 49, 77, 21, 32);
console.log(max);

//задание 5

const randomNumber = (Math.floor(Math.random() * 10));
console.log(randomNumber);

//задание 6

function randomArray(num){
    const length = Math.floor(num / 2);
    const result = [];
       for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (num + 1)));
    }
    return result; 
}

//задание 7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//задание 8

let myDate = new Date();
console.log(myDate);

//задание 9

let currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);
console.log(futureDate);

//задание 10

function formatDate(date) {
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}.\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


