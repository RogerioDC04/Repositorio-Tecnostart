function jogar(tabuleiro){

}

function gerarNumeroAleatorio(min, max){
   return Math.floor(Math.random() * max - min)
}

function definirTipoCasa() {
  var tiposCasa = ['avanca', 'recua', 'espera', 'dado', 'normal']
  var indiceAleatorio = gerarNumeroAleatorio(0, tiposCasa.length)
  return tiposCasa[indiceAleatorio]
}

function criarCasa(indice){
   var objetoCasa = {
      posicao: indice +1,
      tipo: definirTipoCasa()
   }
   
   return objetoCasa
}

function criarTabuleiro(numeroCasas) {
  if (numeroCasas < 10) {
     throw 'Numero de casas deve ser maior que 10'
  }

 console.log('Criando o Tabuleiro...')

 var tabuleiro = []

for (var i = 0; i < numeroCasas; i++) {
   var casa = criarCasa(i)
   tabuleiro.push(casa)
}


 return tabuleiro
}

var numeroCasas = 50
var tabuleiro = criarTabuleiro(numeroCasas)

console.log(tabuleiro)


