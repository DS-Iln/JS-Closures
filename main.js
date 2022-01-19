const min = 1,
      max = 100;
      
let attempts,
    randomNum,
    userNum,
    continuation;

// Функция объявления переменных
function variablesDeclaration() {
    return attempts = 10, 
           randomNum = Math.floor(Math.random() * (max - min)) + min, 
           userNum = +prompt('Угадайте число от 1 до 100.'), 
           continuation = true;
}

let guessMain = () => { 

    variablesDeclaration();

    // Функция проверки дальнейшей работы программы
    function result () {

        if (isNaN(userNum)) {
            variablesDeclaration();
        }

        if (attempts === 0) {
            confirm('Попытки закончились. Игра окончена. Начать заново ?') ? guessNumber() : continuation = false; 
        }

        if (!continuation) {
            alert('Игра завершена.');
            return;
        }

        if (userNum === 0) {
            alert('Ноль не принимается.');
            userNum = +prompt('Угадайте число от 1 до 100.');
        }

        attempts--;

        if (userNum == randomNum) {
            confirm('Поздравляем - вы выиграли! Начать игру заново ?') ? guessNumber() : continuation = false; 

        } else if (userNum < randomNum) {
            userNum = +prompt('Загаданное число больше. Попыток осталось: ' + attempts);

        } else if (userNum > randomNum) {
            userNum = +prompt('Загаданное число меньше. Попыток осталось: ' + attempts);    

        }
        
        result();
    }

    return result;
}

let guessNumber = guessMain();

guessNumber();