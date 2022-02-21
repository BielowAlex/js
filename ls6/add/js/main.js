// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str,n)=>{
//     let strArr = [];
//     let word = '';
//     let id = 0;
//     for (let i = 0; i < str.length; i++) {
//         id++;
//         word += str[i];
//         if(id===n){
//             strArr.push(word);
//             word='';
//             id=0;
//         }else if(i===str.length-1){
//             strArr.push(word);
//         }
//     }
//     return strArr;
// };
// document.writeln(cutString('наслаждение',3));
//

// - Створити функцію-валідатор для адрес електронної пошти.Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
// Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.



function validator(mail){
    let id = false;
    let wordBefore = '';
    let wordAfter = '';
    for (let i = 0; i < mail.length; i++) {
        if(mail[i]==="@"){
            id = true
        }else if(id!==true){
            id = false
            wordBefore +=mail[i];
        }else if(id===true){
            wordAfter += mail[i]
        }
    }
    console.log(mail);
    console.log(wordBefore);
    console.log(wordAfter);


    for (let i = 0; i < wordAfter.length; i++) {
        if(wordAfter[i]==='.'){
            if( i === 0 || i === 1 ){
                return false;
            }
        }else if(id===false){
            return false;
        }
    }

    return id;
}

console.log(validator('someemail@gmail.com'));
console.log(validator('someeMAIL@gmail.com'));
console.log(validator('someeMAIL@i.ua'));
console.log(validator('some.email@gmail.com'));






// - є масив:
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let sortArr = coursesArray.sort((a,b)=>{
    return b.modules.length-a.modules.length;
})

console.log(sortArr);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

function count(str,stringSearch){
    let nums = 0;
    for (const strElement of str) {
        if(strElement===stringSearch){
            nums++
        }
    }
    return nums;
}

console.log(count("Астрономия это наука о небесных объектах","о"));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str = 'Сила тяжести приложена к центру масс тела'

function cutString(str, n){
    let arr = str.split(' ');
    arr.splice(n,arr.length-n);
    return arr;
}

console.log(cutString(str, 5));