let valorDolar = parseFloat(prompt("Digite o valor em dólares:"));
let taxaCambio = 5.30; // taxa de câmbio fixa
let valorReal = valorDolar * taxaCambio;
alert("O valor em reais é " + valorReal.toFixed(2) + ".");