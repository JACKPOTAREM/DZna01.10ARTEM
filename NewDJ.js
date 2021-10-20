const userInfo = {
    name: "Вася",
    age: 30
}

Object.entries(userInfo).forEach((entry) => console.log(entry)); /// Задача 1, в прочем трудно сказать верна ли запись, когда запись со скрина ничего не выводит, если дописать данный код, то считаю его верным.
/// Так же нашел ошибку, то что после "Вася" на скрине не стоит ЗАПЯТАЯ которая обязательная.  Иващенко Артём


let userInfo1 = {
    name: "Вася",
    age: 30,
    "58": 'Значение свойства'
}

console.log(userInfo1[58]); //// Задача 2. Нам выводит 'Значение свойства', потому-что мы обращаемся к ключу "58" и получаем его значение.


// let userInfo2 = {
//     name: "Вася",
//     age: 30
// }
// let user = userInfo2;
// user.age = 45;
// console.log(userInfo2.age); //// Задача 3. Нам выводит 45, потому-что как вы нам и объясняли, если мы перезадаем значение, то в консоль выводит последнее значение.


let userInfo3 = {
    name: "Вася",
    age: 30,
    showInfo() {
        console.log(`${this.name}`);
    }
}
let user1 = userInfo3;
userInfo3 = null;
user1.showInfo() //// Задача 4. Нам выводит Вася, потому-что this.name указывается на обертку name. Получается this будет равен userInfo3 и т.к мы обратились к name, нам выводит его значение.






let userInfo4 = {
    name: "Вася",
    age: 30,
}
for (const key in userInfo4) {
    const value = userInfo4[key];
    console.log(value); //// Задача 5. Консоль выведет 2 сообщения, Вася и соответственно 30, потому что мы перебрали объект через for/in получили ключи и после чего вызвали значения этих ключей.
}


let userInfo5 = {
    name: "Вася",
    age: 30,
    address: {
        city: "Uzhhorod"
    }
}

for (const key in userInfo5.address) {
    console.log(userInfo5.address[key]);
} //// Задача 6, в консоли мы получаем Ужгород, т.к мы перебрали объект через for/in, далее получили ключи и вызвали единственное значение и получили Ужгород


let userInfo6 = {
    name: "Вася",
    age: 30,
    "likes js": true
}
console.log(userInfo6["likes js"]); //// Задача 7. Записано было неправильно, т.к отсутствовали [] при таком виде записи ключа.


// let userInfo7 = {
//     name: "Вася",
//     age: 30
// }
// let user7 = userInfo7;
// user7.name = "Лена";
// delete Object.propertyName
// console.log(userInfo7); //// Задача 8..


let infoUser = {
    name: "Артём",
    surname: "Иващенко",
    location: {
        city: "Kharkov",
        postIndex: "61001"
    }
}
function showAllkeys() {
    Object.getOwnPropertyNames(infoUser).forEach(key => {
        console.log(`${key}`);
    });
}
showAllkeys.call(infoUser);
function showAllinfo() {
    console.log(`NAME: ${this.name}, SURNAME: ${this.surname}`);
}
function showAllinfoCity() {
    console.log(`City: ${this.city}, PostIndex: ${this.postIndex}`);
}
showAllinfo.call(infoUser);
showAllinfoCity.call(infoUser.location); ///// Аналог Object.values() and Object.keys() maybe


///////////////////////////////////////////////////////////////////////
function Animal (name, food, country) {
    return {
        name,
        food,
        country,
    }
}
let cow = new Animal ("cow", "grass", "Ukraine");
let dog = new Animal ("dog","meat","Ukraine");
let tiger = new Animal ("Tiger","meat","Africa");
let lion = new Animal ("lion","meat","Africa");
let girafe = new Animal ("girafe","grass","Africa");
let farm = [cow, dog, tiger, lion, girafe];
let eats = farm.filter(function (Animals) {
    return Animals.food === "grass";
});
console.log(eats);
let eats2 = farm.filter(function (Animals) {
    return Animals.food === "meat";
});
console.log(eats2);
let live = farm.filter(function (Amimals) {
    return Amimals.country === "Africa";
});
console.log(live);
let live2 = farm.filter(function (Amimals) {
    return Amimals.country === "Ukraine";
});
console.log(live2);
//////////////////////////////////////////////// Задача ферма