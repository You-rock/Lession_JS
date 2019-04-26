function input_str(str_msg,s_init) {
   let i_st='';
   while (i_st =='')  {  i_st = prompt (str_msg, s_init);
         if (i_st=='') {alert('вы ввели пустую строку повторите ввод'); }} 
   return (i_st);
}

function input_numb(str_msg,s_init) {
   let i_st=0;
   while (i_st == 0)  {  i_st = +prompt (str_msg, s_init);
           if (i_st==0||isNaN(i_st)) {alert('Повторите ввод! Введите число отличное от 0!'); i_st=0;}}
   return (i_st);
}

function input_rashod(opisanie) {
   let i=0,
   rashod ={};

   while (true) { //Бесконечный цикл
      i=++i;
      let st='', sum=0; 
   
      st=input_str(opisanie +'№' +i, '');
      if (st==null) {alert('ввод параметра №' + i + 'прерван'); break; } 
     
      sum=input_numb('Во сколько обойдется '+ st, 0);  
      if (sum==null) {alert('ввод параметра №' + i + 'прерван'); break; }

      rashod[st] = sum;
   }
   return (rashod);
}



let appdata = {
    budget: 0,
    day_summ: 0,
    time: '',
    osn_rashod: {},
    dop_rashod: {},
    income: [],
    savings: false };

    appdata.budget=input_numb('Ваш бюджет:' ,'20000');
    if (appdata.budget==null) {appdata.buget=20000;}


    let obj_time= new Date();
    let s_time=obj_time.getDate()+':'+obj_time.getMonth()+':'+obj_time.getFullYear();
    
    appdata.time=input_str('Ведите дату', s_time); 
    if (appdata.time==null) {appdata.time=s_time;}

appdata.osn_rashod=input_rashod ('Введите обязательную статью расхода ' ); 
appdata.dop_rashod=input_rashod ('Введите дополнительную статью расхода ' );

let osn_rashod=0,
    dop_rashod=0

for(let key in appdata.osn_rashod) {osn_rashod=osn_rashod+appdata.osn_rashod[key];}
for(let key1 in appdata.dop_rashod) {dop_rashod=dop_rashod+appdata.dop_rashod[key1];}

alert('Основной расход '+osn_rashod+ " Дополнительный расход " + dop_rashod);

appdata.day_summ=  (appdata.budget-osn_rashod-dop_rashod) / 30;
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
