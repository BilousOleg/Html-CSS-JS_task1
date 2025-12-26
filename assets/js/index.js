// Завдання на введення/виведення

// Завдання 1: Запитати число у користувача, піднести його до квадрату і вивести результат.

let numberToPow = Number(
  prompt('Введіть число для піднесення його до квадрату:')
);
numberToPow **= 2;
alert(numberToPow);

// Завдання 2: Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

const numberForAverage1 = Number(
  prompt('Введіть перше число для середнього арифметичного')
);
const numberForAverage2 = Number(
  prompt('Введіть друге число для середнього арифметичного')
);
const average = (numberForAverage1 + numberForAverage2) / 2;
alert(average);

// Завдання 3: Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.

const minutesCount = Number(
  prompt('Введіть кількість хвилин для переведення на секунди')
);
const secondsCount = minutesCount * 60;
alert(secondsCount);

// Завдання 4: Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName.
// Запитайте ім'я користувача та внесіть це значення у змінну userName.
// Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' (згадайте про конкатенацію)

const greeting = 'Hello,';
let userName;
userName = prompt("Введіть своє ім'я");
alert(greeting + ' ' + userName + '!');
