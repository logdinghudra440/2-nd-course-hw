
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
