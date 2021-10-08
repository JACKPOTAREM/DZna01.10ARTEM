function kvadrat(num) {
    return num * num;
}
console.log(kvadrat(75)); //// Задача 1 Иващенко Артём








{
    function callSum(num1, num2, num3) {
        return (num1 - num2)/num3;
    }

    console.log(callSum(23, 42, 52)); /// Задача 2
}





{

     function callDayString(day) {
         switch (day) {
             case 1: return 'Понедельник';
             case 2: return 'Вторник';
             case 3: return 'Среда';
             case 4: return 'Четверг';
             case 5: return 'Пятница';
             case 6: return 'Суббота';
             case 7: return 'Воскресенье';
             default: return 'НЕВЕРНОЕ ЗНАЧЕНИЕ';
         }
     }
    console.log(callDayString(4)); //// Задача 3
}










{
    ///let arr = ['Ваня', 'Иштван', 'Оля',];
    ///let newArr = arr;
    ///newArr.push('Петя'); /// push добавляет новый элемент в конец массива, поэтому 4
    ///console.log(arr.length); /// Задача 1 со скрина, не понимаю что от меня хотят, но длина масива 4

}




{
    let users = ["Ваня","Иштван"];
    users.push('Оля');
    console.log(users);
    users.splice(1,1,'Петя');
    console.log(users);
    console.log(users.shift());
    console.log(users);
    users.unshift('Маша','Паша');
    console.log(users); /// Задача 2 со скрина

}


let arr5 = ['Ваня', 'Иштван', 'Оля'];
    let a = arr5[1];
arr5.splice(1,1,);
console.log(arr5);
console.log(a); /// Задача 3 со скрина, скорее всего неправильно




{
    let str = 'Ваня,Иштван,Оля';
    let arr1 = str.split(',' )
    console.log(arr1) //// Задача 4 со скрина
}




{
    let arr6 = [4, 5, 6, 7];
    let newArr6 = []
    arr6.forEach(function (num) {
        newArr6.push(num * num);
});
    console.log(newArr6) //// Задача 1 из последнего сообщения способ 1

    let newArr1 = arr6.map(function (num) {
        return num * num;
    });
    console.log(newArr1); //// Задача 1 из последнего сообщения способ 2
}

{
    let arr25 = [2, 53, 63, 43, 432];
    let sum = 0;
    let newArr25 = []
    arr25.forEach(function (num) {
        newArr25.push(num * num);
        sum += num * num;
    })
    console.log(newArr25);
    console.log(sum); /// Последняя задача
}







