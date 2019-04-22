let time= new Date();
    
let money=+prompt('Ваш бюджет:' ,'20000'),
    s_time=time.getDate()+'-'+time.getMonth()+'-'+time.getFullYear(),
    day_summ=0;

time=prompt('Ведите дату', s_time); 

let st1 = prompt ('Введите обязательную статью 1'), 
    sum1 = +prompt ('Во сколько обойдется '+ st1),
    st2 = prompt ('Введите обязательную статью2'),
    sum2 = +prompt ('Во сколько обойдется '+ st2);

let appdata = {
    budget: 0,
    time: '',
    expenses: {},
    optoonslExpenses: {},
    income: [],
    savings: false };

appdata.budget= money;
appdata.time= time;
appdata.expenses.sum1=sum1;
appdata.expenses.sum2=sum2;
day_summ= (appdata.budget-appdata.expenses.sum1-appdata.expenses.sum2) / 30;
alert (day_summ);