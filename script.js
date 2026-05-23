for (let i = 1; i <= 2; i++) {
    console.log("Привет!");
}

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

for (let b = 0; b <= 22; b++) {
    if (b < 7) {
        continue;
    }
    console.log(b);
}

const obj = {
    "Коля": '200$',
    "Вася": '300$',
    "Петя": '400$'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

let n = 1000;
let num = 0;
for (; n >= 50; num++) {
    n /= 2;
}

console.log(`Результат: ${n}`);
console.log(`Количество итераций: ${num}`);

let firstFriday = 5;
const totalDays = 31;

for (let day = firstFriday; day <= totalDays; day += 7) {
    console.log(`Сегодня пятница, ${day} число. Необходимо подготовить отчет.`);
}