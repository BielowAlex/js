// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let arr = ['hello world','lorem ipsum','javascript is cool'];
let i = 0;
while(i<3){
    console.log(arr[i].length);
    i++;
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

i=0;
while(i<3){
    console.log(arr[i].toUpperCase());
    i++;
}

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

i=0;
while(i<3){
    console.log(arr[i].toLowerCase());
    i++;
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str);
console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str1 = 'Каждый охотник желает знать';

let stringToArray = (str)=>{
    return str.split(" ");
}

let arr1 = stringToArray(str1);
console.log(arr1);
document.writeln(arr1);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let deleteCharacters = (str,length)=>{
  // let i = 0;
  // let string = '';
  // while(i<length){
  //     string += str[i];
  //     i++;
  // }
  // return string;

    return str.slice(0,length)

};
console.log(deleteCharacters(str1, 7));
document.writeln(deleteCharacters(str1,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

let insert_dash = (str)=>{
   return  str.replaceAll(" ","-").toUpperCase();
};
console.log(insert_dash(str2));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstLetterToUpper = (str)=>{
    return  str[0].toUpperCase() + str.substring(1);
};

console.log(firstLetterToUpper("sanya"));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери./

let capitalize = (str)=>{
    let arr = str.split(" ");
    let i = 0;
    while(i<arr.length) {
       arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
        i++;
    }
    return arr.toString();
};

console.log(capitalize(str1));

