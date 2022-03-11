function ConverterFahrenheit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmgrausCelsius = parseFloat(valor);
  var valorEmFahrenheit = (1.8 * valorEmgrausCelsius) + 32;
  
  console.log(valorConvertidoFahrenheit);
  
 var elementoValorConvertido = document.getElementById("valorConvertidoFahrenheit");
  
  var valorConvertido = ("O valor em Fahrenheit é " + valorEmFahrenheit );
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKelvin() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmgrausCelsius = parseFloat(valor);
  var valorEmKelvin = valorEmgrausCelsius + 273;
  
  console.log(valorConvertidoFahrenheit);
  
 var elementoValorConvertido = document.getElementById("valorConvertidoKelvin");
  
  var valorConvertido = ("O valor em Kelvin é " + valorEmKelvin );
  elementoValorConvertido.innerHTML = valorConvertido ;
  
}