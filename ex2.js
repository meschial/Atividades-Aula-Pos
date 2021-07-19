function media(...distancia) {
 var total = 0;
 for (var i = 0; i<distancia.length; i++) {
    total+=distancia[i];
 }
console.log('A média do Jerônimo é ' + total/distancia.length);
}

 media(10,8); 

