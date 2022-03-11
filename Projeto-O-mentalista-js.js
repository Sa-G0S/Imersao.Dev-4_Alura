var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
document.getElementById("tentativas").innerHTML =
  "Você ainda tem " + tentativas + " tentativas!";

function Chutar() {
  var Chutar = parseInt(document.getElementById("valor").value);

  while (tentativas > 0) {
    if (Chutar == numeroSecreto) {
      document.getElementById("resultado").innerHTML =
        "Parabéns você acertou o número!";
    } else if (Chutar < 0 || Chutar > 10) {
      alert("Não se esqueça, você deve digitar um número entre 0 e 10.");
    } else if (Chutar > numeroSecreto) {
      document.getElementById("resultado").innerHTML =
        "Infelizemnte Você errou, o número sorteado é menor. Tente novamente!";
      tentativas = tentativas - 1;
      document.getElementById("tentativas").innerHTML =
        "Você tem " + tentativas + " tentativas!";
      break;
    } else if (Chutar < numeroSecreto) {
      document.getElementById("resultado").innerHTML =
        "Infelizmente você errou, o número sorteado é maior. Tente novamente!";
      tentativas = tentativas - 1;
      document.getElementById("tentativas").innerHTML =
        "Você tem " + tentativas + " tentativas!";
    }
  }
  if (tentativas == 0) {
    document.getElementById("resultado").innerHTML =
      "Infelizemnte suas tentativas acabaram, o número era " + numeroSecreto;
  }
}