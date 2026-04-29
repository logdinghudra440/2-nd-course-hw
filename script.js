let password = 'пароль';
    const user = prompt("Введите пароль");
    if (user === 'пароль') {
        alert("Пароль введен верно")
    } else {
        alert("Пароль введен неверно")
    }
    let c = 5;
    if (c >= 0 && c <= 10) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }
    let d = 55;
    let e = 101;
    if (d >= 100 || e >= 100) {
        console.log('Правильно');
    } else {
        console.log('Неправильно');
    }
    let a = '2';
    let b = '3';
    alert(Number(a) + Number(b));

    const monthNumber = prompt("Введите номер месяца")
    switch (monthNumber) {
        case '1':
        case '2':
            console.log('зима');
            break;
        case '3':
        case '4':
        case '5':
            console.log('весна');
            break;
        case '6':
        case '7':
        case '8':
            console.log('лето');
            break;
        case '9':
        case '10':
        case '11':
            console.log('осень');
            break;
        case '12':
            console.log('зима');
            break;
        default: if (monthNumber >= 12 || monthNumber <= 1) {
            console.log('ввели что-то не то')
        };
    }
