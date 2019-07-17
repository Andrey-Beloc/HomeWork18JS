"use strict";

//Задание 1

let a = prompt('Задание №1, введите 1');
if(a === '1'){
    alert('Верно');
} else{
    alert('Не верно');
}

// Задания №2

//короткая запись
let item = prompt('Задания №2. Введите любые символи кроме 0');
if(item != true){
    alert('Верно');
}else{
    alert('Не верно'); 
}

//длинная

if(item != true){
    alert('Верно');
}
else if(item == 0){
    alert('Верно');
}

else if(item == ''){
    alert('Верно');
}

else if(item == null){
    alert('Верно');
}

else if(item == undefined){
    alert('Верно');
}

else if(item == NaN){
    alert('Верно');
}
else{
    alert('Не верно'); 
}

//Задания №3

let a3 = +prompt('Задания №3. Введите цифру от 0 до 3');
let chek3 = ( a3 > 0 && a3 < 4 ) ? 'Верно' : 'Не верно';

alert(chek3);

//Задания №4

let a4 = 2;
let b4 = 18;
let massege = (( a4 > 3 && a4 < 12) || (b4 >= 7 && b4 < 15) ) ? 'Верно' : 'Не верно';

console.log(massege)

//Задания №5

let month = +prompt('Задание №5. Введите порядковый номер месяца цифрой') ;
if(month >=3 && month <= 5){
    alert('Это месяц весны');
}
else if(month >=6 && month <= 8){
    alert('Это месяц лета');
}
else if(month >=9 && month <= 11){
    alert('Это месяц осени');
}
else if(month == 12 || month ==1 || month == 2 ){
    alert('Это месяц зимы');
}
else{
    alert('Такого месяца не существует');
}

//Задания №6

let i = 0;
do{
    if(i % 2 == 0){
        console.log( i ); 
    };     
    i++;    
}while( i < 100 );
