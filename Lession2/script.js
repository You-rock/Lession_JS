let time= new Date();
    
let money=+prompt('Ваш бюджет:' ,'20000'),
    s_time=time.getDate()+'-'+time.getMonth()+'-'+time.getFullYear(),
    day_summ=0;

time=prompt('Ведите дату', s_time); 

let appdata = {
    budget: 0,
    day_summ: 0,
    time: '',
    expenses: {},
    optoonslExpenses: {},
    income: [],
    savings: false };


let i=0;
while (true) { //Бесконечный цикл
   i=++i;
   let st='', sum=0; 
   while (st =='')  {  st = prompt ('Введите обязательную статью № ' + i);
         if (st=='') {alert('вы ввели пустую строку повторите ввод'); }} 
           
         if (st==null) {alert('ввод параметра №' + i + 'прерван'); break; } 
  
  
   while (sum==0)  { sum = +prompt ('Во сколько обойдется '+ st);
     if (sum==0 || isNaN(sum)) {
        alert('Повторите ввод! Введите число отличное от 0!'); 
        sum=0;}}
         
        if (sum==null) {alert('ввод параметра №' + i + 'прерван'); break; }

   appdata.expenses[st]=sum; }


appdata.budget= money;
appdata.time= time;

appdata.day_summ=  (appdata.budget) / 30;
alert (appdata.day_summ);

if (appdata.day_summ < 0) {alert('Дневонй Бюджет>'+ appdata.day_summ +' Бюджет не сходитя!');}
else if (appdata.day_summ>0 && appdata.day_summ< 600) {
   alert('Дневонй Бюджет>'+ appdata.day_summ +' Вы за чертой бедности');}
else if (appdata.day_summ>600 && appdata.day_summ < 1000) {
   alert('Дневонй Бюджет>'+ appdata.day_summ +' Худо-бедно жить можно');}
else if (appdata.day_summ>1000 && appdata.day_summ < 3000) {
   alert('Дневонй Бюджет>'+ appdata.day_summ +' Хорошо жить не запретишь');}
else if (appdata.day_summ > 3000) {
   alert('Дневонй Бюджет>'+ appdata.day_summ +' Да вы батенька никак олигарх');}
