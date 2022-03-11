function ConverterBitcoin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmBitcoinNumerico = parseFloat(valor);

  var valorEmReal = valorEmBitcoinNumerico * 196564.76;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em rel é: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.09;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em rel é: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmReal = valorEmEuroNumerico * 5.54;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em rel é: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmLibraNumerico = parseFloat(valor);

  var valorEmReal = valorEmLibraNumerico * 6.67;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em rel é: R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

//Desafio:
//Criar mais botões de conversão para outras moedas e bitcoin;ok
//Criar novo convesor,quantos anos luz demoraria para chegar a estrela sirus black, conversosr de km para anos luz;