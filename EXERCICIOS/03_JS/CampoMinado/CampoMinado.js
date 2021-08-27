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
        })
    })
})