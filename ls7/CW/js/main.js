// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,graduationYear,maxSpeed,engineCapacity){
    this.model = model;
    this.producer = producer;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info =function (){
        console.log(
            `Model - ${model} 
             Producer - ${producer}
             Graduation year - ${graduationYear}
             Max Speed - ${maxSpeed}
             Engine capacity - ${engineCapacity}`
        );
    }
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.graduationYear = newValue
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

let Porsche = new Car('porsche','XZ','2015',300,50);
Porsche.info();
Porsche.drive();
Porsche.increaseMaxSpeed(320);
Porsche.changeYear(2020);
Porsche.addDriver({
    name:'Alex',
    surname:'Below'
});
console.log(Porsche.driver);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2{
    constructor(model,producer,graduationYear,maxSpeed,engineCapacity) {

        this.model = model;
        this.producer = producer;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info (){
        console.log(
            `Model - ${this.model} 
             Producer - ${this.producer}
             Graduation year - ${this.graduationYear}
             Max Speed - ${this.maxSpeed}
             Engine capacity - ${this.engineCapacity}`
        );
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue){
        this.graduationYear = newValue
    }
    addDriver (driver){
        this.driver = driver;
    }
}
let Porsche2 = new Car2('porsche','XZ','2015',300,50);
Porsche2.info();
Porsche2.drive();
Porsche2.increaseMaxSpeed(320);
Porsche2.changeYear(2020);
Porsche2.addDriver({
    name:'Alex',
    surname:'Below'
});
console.log(Porsche2.driver);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Popelyushka{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let arrPopelyushka = [
    new Popelyushka('Tania',20,36),
    new Popelyushka('Ania',20,38),
    new Popelyushka('Oksana',19,35),
    new Popelyushka('Mia',16,39),
    new Popelyushka('Chloe',23,38),
    new Popelyushka('Nastya',16,37),
    new Popelyushka('Zlata',17,39),
    new Popelyushka('Dora',18,39),
    new Popelyushka('Marta',18,41),
    new Popelyushka('Katia',18,40),
];
let king = new Popelyushka('Alex',20,36);
for (const e of arrPopelyushka) {
    if(e.footSize===king.footSize){
        console.log(`${king.name} your princes is ${e.name}`);
    }
}

console.log(arrPopelyushka.find((a) => {
    return a.footSize === king.footSize;
}));