var carta1 = {
  nome: "Bulbasaur",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 3
  }
};
var carta2 = {
  nome: "Beedrill",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
  atributos: {
    ataque: 10,
    defesa: 7,
    magia: 9
  }
};
var carta3 = {
  nome: "Pidgey",
  imagem: "hhttps://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 7
  }
};
var carta4 = {
  nome: "Rattata",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",
  atributos: {
    ataque: 7,
    defesa: 9,
    magia: 2
  }
};
var carta5 = {
  nome: "Zubat",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 5
  }
};
var carta6 = {
  nome: "Electrode",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/101.png",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 7
  }
};
var carta7 = {
  nome: "Cubone",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/104.png",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 5
  }
};
var carta8 = {
  nome: "Mr.Mime",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/122.png",
  atributos: {
    ataque: 9,
    defesa: 6,
    magia: 10
  }
};
var carta9 = {
  nome: "Eevee",
  imagem: "hhttps://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 3
  }
};
var carta10 = {
  nome: "Snorlex",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png",
  atributos: {
    ataque: 4,
    defesa: 8,
    magia: 3
  }
};
var carta11 = {
  nome: "Psyduck",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 3
  }
};
var carta12 = {
  nome: "Dragonite",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png",
  atributos: {
    ataque: 8,
    defesa: 6,
    magia: 4
  }
};
var carta13 = {
  nome: "MewTwo",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/150.png",
  atributos: {
    ataque: 10,
    defesa: 5,
    magia: 10
  }
};
var carta14 = {
  nome: "Pichu",
  imagem: "hhttps://assets.pokemon.com/assets/cms2/img/pokedex/detail/172.png",
  atributos: {
    ataque: 7,
    defesa: 6,
    magia: 5
  }
};
var carta15 = {
  nome: "IgglyBuff",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/174.png",
  atributos: {
    ataque: 9,
    defesa: 9,
    magia: 6
  }
};
var carta16 = {
  nome: "Espeon",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/196.png",
  atributos: {
    ataque: 6,
    defesa: 9,
    magia: 2
  }
};
var carta17 = {
  nome: "Chikorita",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/152.png",
  atributos: {
    ataque: 6,
    defesa: 5,
    magia: 4
  }
};
var carta18 = {
  nome: "Togepi",
  imagem: "hhttps://assets.pokemon.com/assets/cms2/img/pokedex/detail/175.png",
  atributos: {
    ataque: 2,
    defesa: 8,
    magia: 2
  }
};
var carta19 = {
  nome: "Pidove",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/519.png",
  atributos: {
    ataque: 3,
    defesa: 5,
    magia: 6
  }
};
var carta20 = {
  nome: "Fletchling",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/661.png",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 3
  }
};
var carta21 = {
  nome: "SUPER TRUNFO - Arceus",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/493.png",
  atributos: {
    ataque: 10,
    defesa: 10,
    magia: 10
  }
};
var cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,carta11,carta12,carta13,carta14,carta15,carta16,carta17,carta18,carta19,carta20,carta21];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 21);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 21);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }

  //Atribui a carta sorteada para o jogador
  cartaJogador = cartas[numeroCartaJogador];

  //Desabilitar/habilitar botões
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //Aciona a função
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radiosAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radiosAtributos.length; i++) {
    if (radiosAtributos[i].checked == true) {
      return radiosAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      "<p class='resultado-final'>Parabéns, Você Venceu!</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Infelizmente Você Perdeu.</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Você Empatou!</p>";
  }

  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();

  
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`; //Jeito novo
  // Jeito antigo - divCartaJogador.style.backgroundImage= "url("+ cartaJogador.imagem+")"

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; heigth: inherit; position: absolute;">';
  var tagHTML = "<div id = 'opcoes' class = 'carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function reload() {
  history.go(0);
}