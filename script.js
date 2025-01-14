"use strict";

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == null || money == "") {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let AppData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = +prompt("Во сколько обойдется?", '');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {   
        console.log('done');
        AppData.expenses[a] = b;    
        } else {
            i--;
        }
    }  
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++){
        let questionOptionalExpenses = prompt('Статья необязательных расходов')
        
        console.log('done');
        AppData.optionalExpenses[i] = questionOptionalExpenses;
        console.log(AppData.optionalExpenses);
    }
}
chooseOptExpenses();

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
 /*let i = 0;
 do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt("Во сколько обойдется?", '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {   
    console.log('done'),
    AppData.expenses[a] = b}
    else {
        i--;
    };
    i++;     
} while (i<2); */

function detectDayBudget() {
    AppData.moneyPerDay = (AppData.budget / 30).toFixed();

    alert('Ежедневный бюджет: ' + AppData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (AppData.moneyPerDay<100) {
        console.log('Минимальный уровень достатка');
    } else if (AppData.moneyPerDay>100 && AppData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (AppData.moneyPerDay > 2000) {
        console.log ('Высокий уровень достатка');
    } else {
        console.log('Ошибка');
    }
    
}
detectLevel();

function checkSavings() {
    if (AppData.savings == true) {
        let save = +prompt('Какова сумма накоплений'),
            percent = +prompt('Под какой процент?');
        
        AppData.monthIncome = (save/100/12*percent).toFixed();
        alert('Доход в месяц с вашего депозита: ' + AppData.monthIncome)   ;
    }
}
checkSavings();