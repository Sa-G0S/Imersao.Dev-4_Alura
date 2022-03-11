function Converter() {
  
  var valorElemento = document.getElementById("km");
  
  var valor = valorElemento.value;
  
  var valorEmKilometros = parseFloat(valor);

  var valorEmAnosLuz = valorEmKilometros * 9500000000000; 
  

  var elementoValorCovertido = document.getElementById("anosluz");
  
  var valorConvertido =
    valor + " é equivalente a aproximadamente " + valorEmAnosLuz + " Anos-luz" + " KM. " + "CURIOSIDADE: A estrela mais brilhante observado no céu, se chama Sirus, e a distância da terra até ela é de aproximadamente 8,5 anos-luz.";
  
  elementoValorCovertido.innerHTML = valorConvertido;
  

 
}