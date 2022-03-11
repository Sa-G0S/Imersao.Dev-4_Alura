function calculaMedia() {
	
	var b1 = parseFloat(document.querySelector('#bimestre1').value);
    var b2 = parseFloat(document.querySelector('#bimestre2').value);
    var b3 = parseFloat(document.querySelector('#bimestre3').value);
    var b4 = parseFloat(document.querySelector('#bimestre4').value);

    var notaFinal = (b1 + b2 + b3 + b4) / 4;

	if (notaFinal < 6) {
		
		document.querySelector("#resultado").innerHTML = "Sua nota final é " + notaFinal + "<br> Infelizemnte você foi reprovado! "; 

	}
	else {

		document.querySelector("#resultado").innerHTML = "Sua nota final é " + notaFinal + "<br> Parabéns você foi aprovado! "; 

	}


}

var b1

var enviar = document.querySelector("#enviar");

enviar.onclick = calculaMedia;



//Revisão da aula 1: 
//Definição de Variáveis, string, console.log, .toFixed, operações matemáticas, concatenação, utilização do console.

//Desafio:
//Dizer se o aluno foi aprovado e reprovado; ok
//estilização da calculadora; ok
//tentar escrever na página ao invés do console; ok
//conversor de temperaturas.