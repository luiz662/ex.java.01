let valorReal = parseFloat(prompt("Digite o valor em reais:"));
let taxaCambio = 5.30; // taxa de câmbio fixa
let valorDolar = valorReal / taxaCambio;
alert("O valor em dólares é " + valorDolar.toFixed(2) + ".");''