// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = []

for (let i = 0; i < 10; i++) {
    arr.push(new User(i,'Alex','Bielow','bielow.alex@gmail.com',"0663206971"));
}
console.log(arr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let filter = arr.filter((e)=>{
   return e.id%2===0;
});
console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// ПОСКІЛЬКИ В МЕНЕ ВОНА ПО СТАНДАРТУ АЙДІ ЗРОСТАЮЧЕ ЗРОБЛЮ СПАДАЮЧЕ.

let arrSort = arr.sort((a,b)=>{
   return b.id-a.id;
});
console.log(arrSort);

// - створити класс для об'єктів Client з полями id, name, surname ,
// email, phone, order (поле є масивом зі списком товарів)створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrClient = [];
for (let i = 0; i < 10; i++) {
    arrClient.push(new Client(i,'Alex','Bielow','bielow.alex@gmail.com',"0663206971",[]));
    for (let j = 0; j < (Math.floor(Math.random()*(10-1))+1); j++) {
        arrClient[i].order.push("pen");
    }
}
console.log(arrClient);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ClientSort = arrClient.sort((a,b)=>{
   return a.order.length-b.order.length;
});
console.log(ClientSort);