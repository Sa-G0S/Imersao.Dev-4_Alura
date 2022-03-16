var jogadores = [
  {
    nome: "Rafa",
    imagem:
      "https://scontent.fvcp7-1.fna.fbcdn.net/v/t39.30808-6/275807530_10221121070405239_2648618873456530869_n.jpg?stp=cp0_dst-jpg&_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=fXSNi6Go0fUAX8jII5t&_nc_ht=scontent.fvcp7-1.fna&oh=00_AT92nN5wEwcNzgMqJP33Ig1b7VfMxVlZ66CFttdCOfuYYw&oe=6233B5B7",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  },
  {
    nome: "Paulo",
    imagem:
      "https://scontent.fvcp7-1.fna.fbcdn.net/v/t39.30808-6/275773480_10221121070325237_3914551527298401745_n.jpg?stp=cp0_dst-jpg&_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=0iH0hQR_HHQAX9UVdY8&tn=9kGIXWDlLoI2TuAO&_nc_ht=scontent.fvcp7-1.fna&oh=00_AT8dPqir6PXUFp0DzuRnUoIDwQ_T_R0rJqXg7GkSYLmXew&oe=623552F7",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  },
  {
    nome: "Gui",
    imagem:
      "https://scontent.fvcp7-1.fna.fbcdn.net/v/t39.30808-6/275957299_10221121070365238_1822998712412266941_n.jpg?stp=cp0_dst-jpg&_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=mhamTBe5LeEAX_4QX5X&tn=9kGIXWDlLoI2TuAO&_nc_ht=scontent.fvcp7-1.fna&oh=00_AT-i-EggiK-pu_QJtRqlolrYZSRSL6haL-EZY2lmYDI38w&oe=62343EB1",
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  }
];

function novoJogador() {
  var novoJogador = document.getElementById("novoJogador").value;
  var imagemJogador = document.getElementById("imagemJogador").value;
  jogadores.push({
    nome: novoJogador,
    imagem: imagemJogador,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  });
  exibeJogadoresNaTela(jogadores);
  document.getElementById("novoJogador").value = "";
  document.getElementById("imagemJogador").value = "";
}

function zerarPontos() {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].empates = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  jogador.pontos = pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td><img src=" + jogadores[i].imagem + "></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  document.querySelector("#tabelaJogadores").innerHTML = elemento;
}

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  calculaPontos(jogadores[i]);
  for (y = 0; y < jogadores.length; y++) {
    if (jogadores[y].nome !== jogadores[i].nome) {
      jogadores[y].derrotas++;
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].empates++;
    calculaPontos(jogadores[i]);
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  for (y = 0; y < jogadores.length; y++) {
    if (jogadores[y].nome !== jogadores[i].nome) {
      jogadores[y].vitorias++;
      calculaPontos(jogadores[y]);
    }
  }
  exibeJogadoresNaTela(jogadores);
}

//desafio: logica de derrota e empate nos jogadores que compatiram  (soma das vitorias e derrtotas)ok; por trofeu no que está vencendo; por imagem do jogador; botão de zerar placar-ok; adicionar novo jogador por botão no input-push; associar ao jogo-ok.