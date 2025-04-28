//Игра "Угадай число"
function gameHiddenNumber() {
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    alert('Попробуйте угадать число от 1 до 100.');
    while(true) {
        let userNumber = Number(prompt('Ваш вариант?'));
        if (userNumber === hiddenNumber) {
            alert(`Вы угадали число ${hiddenNumber}!`);
            break;
        } else if (userNumber < hiddenNumber) {
            alert('Загаданное число больше. Попробуйте еще раз.')
        } else {
            alert('Загаданное число меньше. Попробуйте еще раз.')
        }
    }
}

//Игра "Простая арифметика"
function gameSimpleMath() {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    const mathActions = ['+', '-', '*', '/'];
    const mathAction = mathActions[Math.floor(Math.random() * mathActions.length)];
    let result;

    switch (mathAction) {
        case '+':
            userAnswer = +prompt(`Найдите сумму ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = firstNumber + secondNumber;
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '-':
            userAnswer = +prompt(`Найдите разность ${firstNumber} и ${secondNumber}. Отнимите от большего числа меньшее. Ваш ответ?`);
            result = Math.abs(firstNumber - secondNumber);
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '*':
            userAnswer = +prompt(`Найдите произведение ${firstNumber} и ${secondNumber}. Ваш ответ?`);
            result = firstNumber * secondNumber;
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        case '/':
            userAnswer = +prompt(`Найдите частное ${firstNumber} и ${secondNumber}. Разделите большее число на меньшее. Ответ округлите до целых. Ваш ответ?`);
            if (firstNumber > secondNumber) {
                result = Math.round(firstNumber / secondNumber);
            } else {
                result = Math.round(secondNumber / firstNumber);
            }
            if (userAnswer === result) {
                alert('Верно!');
                break;
            } else {
                alert('Ошибка!');
                break;
            }
        }
    }

//Игра "Переверни текст"
function gameTextFlipOver() {
    let str = prompt('Введите текст, а я переверну его!');
    alert(str.split('').reverse().join(''));
}

//Игра "Викторина"
function gameQuiz() {
    const quiz = [
        {
            question: `Зимой и летом - одним цветом?`,
            options: [`1. Ель`, `2. Береза`, `3. Дуб`],
            correctAnswer: 1
        },
        {
            question: `Висит груша - нельзя скушать?`,
            options: [`1. Яблоко`, `2. Лампочка`, `3. Авокадо`],
            correctAnswer: 2
        },
        {
            question: `Сто одёжек и все без застежек?`,
            options: [`1. Лук`, `2. Манекен`, `3. Капуста`],
            correctAnswer: 3
        }
    ];

    let answer = 0;

    for (let i = 0; i < quiz.length; i++) {
        let qiuzQuestion = +prompt(`${quiz[i].question}\nВыберите правильный ответ.\n${quiz[i].options}`);
        if (qiuzQuestion == quiz[i].correctAnswer) {
            answer++;
            alert('Вы ответили верно!');
        } else {
            alert('Вы ошиблись!');
        }
    }

    if (answer === 0 || answer === 1) {
        alert(`Вы ответили верно ${answer} раз.`)
    } else {
        alert(`Вы ответили верно ${answer} раза.`)
    }
}

//Игра "Камень, ножницы, бумага"
function gameStoneScissorsPaper() {
    alert('Сыграем в "камень, ножницы, бумага"?');
    let userChoice = prompt('Ваш выбор?');
    const choice = ['камень', 'ножницы', 'бумага'];
    const compChoice = Math.floor(Math.random() * choice.length + 1);

    if (userChoice.toLowerCase() === 'камень' && compChoice === 1) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Ничья!`);
    }
    else if (userChoice.toLowerCase() === 'камень' && compChoice === 2) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы победили!`);
    }
    else if (userChoice.toLowerCase() === 'камень' && compChoice === 3) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы проиграли!`);
    }
    else if (userChoice.toLowerCase() === 'ножницы' && compChoice === 1) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы проиграли!`);
    }
    else if (userChoice.toLowerCase() === 'ножницы' && compChoice === 2) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Ничья!`);
    }
    else if (userChoice.toLowerCase() === 'ножницы' && compChoice === 3) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы выиграли!`);
    }
    else if (userChoice.toLowerCase() === 'бумага' && compChoice === 1) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы выиграли!`);
    }
    else if (userChoice.toLowerCase() === 'бумага' && compChoice === 2) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Вы проиграли!`);
    }
    else if (userChoice.toLowerCase() === 'бумага' && compChoice === 3) {
        alert(`Ваш выбор - ${userChoice}. Выбор компьютера - ${choice[compChoice - 1]}. Ничья!`);
    }
    else {
        alert('Введен некорректный вариант.')
    }
}

//Игра "Генератор случайных цветов"
function gameRandomColorGenerator() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(randomColor);

    const blockElGames = document.querySelector('.games');
    const blockElMiniGames = document.querySelector('.minigames');
                        
    blockElGames.style.backgroundColor = randomColor;
    blockElMiniGames.style.backgroundColor = randomColor;
}