"use strict";

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let AppData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



/*for (let i = 0; i < 2; i++) {

    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {   
    console.log('done');
    AppData.expenses[a] = b;    
    } else {

    }
}; */

 /*let i = 0;

 while (i<2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {   
    console.log('done'),
    AppData.expenses[a] = b;
    i++;     }
}; */
 let i = 0;
 do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {   
    console.log('done'),
    AppData.expenses[a] = b};
    i++;     
} while (i<2); 

AppData.moneyPerDay = AppData.budget / 30;

alert('Ежедневный бюджет: ' + AppData.moneyPerDay);

if (AppData.moneyPerDay<100) {
    console.log('Минимальный уровень достатка');
} else if (AppData.moneyPerDay>100 && AppData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (AppData.moneyPerDay > 2000) {
    console.log ('Высокий уровень достатка');
} else {
    console.log('Ошибка')
};