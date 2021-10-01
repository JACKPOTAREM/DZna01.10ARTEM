let numOne = Math.ceil(1.005 * 100) / 100;
console.log(numOne); /// Задача 1 Иващенко Артём
{
    let value = "135.58px";
    console.log(parseFloat(value)); /// Задача 2
}
let value2 = 58 - "Фрилансер";
if (isNaN(value2)) {
    console.log("Результат выражения NaN"); /// Задача 3 (Немного не понял что нужно сделать)
}



{
    console.log(Math.max(10,58,39,-150,0)); //// Задача 4
}

{
    let numTwo = Math.floor(58.858); //// Задача 5
    console.log(numTwo) ////
}

{
    let fls = "фрилансер";
    let text = `Привет! Я ${fls}`; /// Задача 1 (скрин 2)
    console.log(text);
}

{
    let text1 = 'фрилансер';
    console.log(text1.indexOf('н'));
    console.log(text1[5]); /// Задача 2 (скрин 2)
}

{
    let text = 123 + +"456"
    console.log(text); //// Задача 3(скрин 2)
}

{
    let text4 = 'фрилансер';
    console.log(text4.toUpperCase()); //// Задача 4(скрин 2)
}

{
    let text7777 = 'фрилансер';
    console.log(text7777.indexOf('лан'));
    console.log(text7777.slice(3,6)); //// Задача 5 (скрин 2) Если правильно всё понял, то вроде так.
}

{
    let text0101 = 'фрилансер';
    console.log(text0101.includes('лан', 4)); //// false
    console.log(text0101.indexOf('лан'));
    console.log(text0101.includes('лан', 3)); //// true Задача 6 (скрин 2)
}