// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let trim = (str)=>{
    return str.replaceAll('-',' ').replaceAll('.',' ').replaceAll('_',' ');
};
console.log(trim(n1));
console.log(trim(n2));
console.log(trim(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let arr = [];

let rand = (arr)=>{
  let i = 0;
  while(i<10){
      arr[i]= Math.floor(Math.random()*100);
      i++;
  }
  return arr;
};

console.log(rand(arr));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

arr.sort((a,b)=>{
   return a-b;
});

console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа/

let filter = arr.filter((arr)=>{
    return arr%2===0;
})
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції)
// . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let map = arr.map((arr)=>{
    return arr.toString();
});
console.log(map);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (direction,arr)=>{
    if(direction === 'ascending'){
        arr.sort((a,b)=>{
            return a-b;
        })
        return arr;
    }else if(direction === 'descending'){
        arr.sort((a,b)=>{
            return b-a;
        })
        return arr;
    }
}

console.log(sortNums('ascending', arr));
console.log(sortNums('descending', arr));


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a,b)=>{
    return b.monthDuration - a.monthDuration;
});

console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter1 = coursesAndDurationArray.filter((a)=>{
    return a.monthDuration>5;
})
console.log(filter1);
