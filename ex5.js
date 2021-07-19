let newImc = (peso, altura) => {
   imc = peso/(altura*altura);

   if (imc <= 18.5) console.log(`Seu IMC é:${imc} sua classificação é: Magreza`);
   else if (imc <= 24.9) console.log(`Seu IMC é:${imc} sua classificação é: Normal!`);
   else if (imc <= 29.9) console.log(`Seu IMC é:${imc} sua classificação é: Sobrepeso 1`);
   else if (imc <= 39.9) console.log(`Seu IMC é:${imc} sua classificação é: Obesidade 2`);
   else if (imc >= 40) console.log(`Seu IMC é:${imc} sua classificação é: Obesidade Grave 3`);
  
} 
newImc(85,1.83)