let time= new Date();
    
let money=+prompt('Ваш бюджет:' ,'20000'),
    s_time=time.getDate()+'-'+time.getMonth()+'-'+time.getFullYear(),
    day_summ=0;

time=prompt('Ведите дату', s_time); 

let appdata = {
    budget: 0,
    time: '',
    expenses: {},
    optoonslExpenses: {},
    income: [],
    savings: false };

for (let i=1; i<3; i++) {
   let st='', sum=0; 
   while (st =='')  {  st = prompt ('Введите обязательную статью № ' + i);
         if (st=='') {alert('вы ввели пустую строку повторите ввод'); }} 
           
         if (st==null) {alert('ввод параметра №' + i + 'прерван'); continue; } 
  
  
   while (sum==0)  { sum = +prompt ('Во сколько обойдется '+ st);
     if (sum==0 || isNaN(sum)) {
        alert('Повторите ввод! Введите число отличное от 0!'); 
        sum=0;}}
         
        if (sum==null) {alert('ввод параметра №' + i + 'прерван'); continue; }

   appdata.expenses[st]=sum;
alert (st+' '+ sum);
}

appdata.budget= money;
appdata.time= time;

day_summ= (appdata.budget) / 30;
alert (day_summ);