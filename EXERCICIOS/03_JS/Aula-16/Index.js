  var prompt = require('prompt-snyc')()

  
  while ()
    var prompt(" Digite uma opçao: (1- Jogar, 2- Sair do jogo")
    if (opçao == 1) {
        var numerosCasas = prompt(" Quantas Casas?")
        if (numerosCasas > 10){
            var quantasCasasAcoes = Math.round(0.4 * numerosCasas)
            var passoTabuleiro = Math.floor(numeroCasas / quantasCasasAcoes)
            var casaAssociada = 0
            var tabuleiro = {}
            var acoes = [acoes] = ["avançar_2", 'permanecer_2_rodaddas', "Rolar Dado"]
            var indiceAcao = 0
            for (i = 1; i < numerosCasas; i++){
                if (i % passoTabuleiro == 0 && casaAcaoAssociada < quantasCasasAssociadas)
                tabuleiro[i] = acoes[indiceAcao]
                casaAcaoAssociada++
                indiceAcao++
                if(indiceAcao > 3) {
                    indiceAcao = 0
                }
            }
        }
    }   
  
  
  
  
  
//   /*Funçao Dado*/
// function random(min, max) {
//     return Math.floor(Math.random() *(max - min))
// }
//     function gerarAleatorio(){
//     var nomes = ['Avança' , 'Recua' , 'Espera' , 'Dado' , 'Normal'];
//     var indice = random(0, nomes.length)
//     return nomes[indice]
// }

// for (var i = 0; i < 5; i++) {
//     var acaoEscolhida = gerarAleatorio()
//     console.log('A Jogada escolhida foi ' + acaoEscolhida)
//     if (acaoEscolhida === 'avanca') {
//         console.log('...Avançando algumas casas')
//     }    

//         if (acaoEscolhida === 'Recua') {
//             console.log('... Recuando algumas casas')
//         }
// }