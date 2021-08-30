const Tabuleiro = document.querySelector("#Tabuleiro")
const Linhas = document.querySelectorAll("tr")

Linhas.forEach((linha, indiceL) => {
    const colunas = linha.querySelectorAll("td")

    colunas.forEach((td, indiceC) => {
        const campo = td.querySelectorAll(".Campo")[0]

        campo.addEventListener("click", () => {
            alert("Cliquei com o botao esquerdo")
        })

        campo.addEventListener("contextmenu", () => {
            alert("Cliquei com o botao direito")     
               
            if (!campo.className.includes("aberto")) {
                if (campo.className.includes("marcado")) {
                    campo.className = "campo"
                    campo.innerText = ""
                } else {
                    campo.className = "campo marcado"
                    campo.innerText = "M"
                }
            }
        })
    })
}) 
let numeroPronto = getRandom()
console.log(numeroPronto)

function atribuirBombasAosCampos(indiceL, indiceC){
    Math.random();

    if (Math.random() > 0.5) {
        campo.innerText = ""
    } else {
        campo.innerText = "B"
    }
          
}