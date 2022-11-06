

const number = prompt('Введите число', '');
if (number > 0 && 100 > number){
    alert(number);
}
else{alert("Ошибка")}




let a = +prompt('a?', '');

switch(a){
    case 0 : prompt('0')
    break;

case 1 : prompt('1')
break;
case 2 && 3 : prompt('2,3')
break;
}



let num = 0
let sum = 0
while(num < 100) {
    num++;
    if(num % 2 == 0)
    sum =num + sum
     console.log(sum)
}



let i =0;
  while(i<3){
    
    alert( `number ${i}!` );
    i++;
  }







