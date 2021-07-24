function calcImc(alt, peso) {
   var imc = peso / (alt*alt);

   switch (true) {
      case (imc <= 18.5): return console.log(`Seu IMC é:${imc} sua classificação é: Magreza`);
      case (imc <= 24.9): return console.log(`Seu IMC é:${imc} sua classificação é: Normal!`);
      case (imc <= 29.9): return console.log(`Seu IMC é:${imc} sua classificação é: Sobrepeso 1`);
      case (imc <= 39.9): return console.log(`Seu IMC é:${imc} sua classificação é: Obesidade 2`);
      case (imc >= 40): return console.log(`Seu IMC é:${imc} sua classificação é: Obesidade Grave 3`);
      default: return console.log('Não foi possível calcular seu IMC.');
    }
}

calcImc(1.85, 65);