function media(qtd) {
   var soma = 0;
   var count = 0;

   while (count < qtd) {
      soma += getRandomInt(1, 10);
      count++;
   }

   var total = soma/qtd;
   console.log('A média do Jerônimo é ' + total);
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
 }
 
 media(10, 8); 

