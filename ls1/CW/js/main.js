// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let arr = [getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10),
    getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10), getRandomNumber(1, 10)];
let i = 0;

function getSum() {
    let res = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        res += arr[i];
        i++;
    }
    return res;
}

let result = getSum();
console.log(result)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book ={
//     bookName : 'Harry Potter',
//     pagesSum : 230,
//     genre : 'adventure'
// };
// console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book ={
    bookName: 'Harry Potter',
    pagesSum: 230,
    genre: 'adventure',
    authors: 'J.K. Rowling'
};
console.log(book);
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let array = [{ bookName: 'Harry Potter', pagesSum: 230, genre: 'adventure', authors: 'J.K. Rowling'},
            {bookName: 'Самый богатый человек в Вавилоне', pagesSum: 150, genre: 'Литература по саморазвитию', authors: 'Джордж С. Клейсон'}];
console.log(array[1]);
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

function square(height,width){
    return height * width;
}
let s = square(23,10);

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

function volume(heightC, dC){
    return 3.14 * Math.pow(dC,2) * heightC;
}

let v = volume(10,4);
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
function pythagorean(n,m){
    let sum = Math.pow(n,2) + Math.pow(m,2);
    return Math.sqrt(sum);
}
let k = pythagorean(3,4);
console.log(k);
