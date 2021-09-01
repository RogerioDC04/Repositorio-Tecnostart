const tabuleiro = document.querySelector('#Tabuleiro')
const linhas = tabuleiro.querySelectorAll("tr")

document.querySelector('#Reset').addEventListener('click', resetar)
document.querySelector('#Reset').removeEventListener('click', resetar)
const bandeiras = document.querySelector('#Bandeiras')

let liastObjetoCampo = []

const CLASS_CAMPO = 'campo'
const CLASS_MARCADO = 'marcado'
const CLASS_ALERTA = 'alerta'
const CLASS_ABERTO = 'aberto'
const CLASS_SALVO = 'salvo'
const CLASS_EXPOLODIDO = 'explodidio'
const CLASS_BOMBA = 'bomba'

const MARCADO = "M"
const BOMBA = "B"

let dificuldade = 0.66
let quantidadeMarcadores = 168;

function jogo() {

    setListaObjetoCampo()

    liastObjetoCampo.forEach(elemento => {
        atribuirBombasAosCampos(elemento.indexL, elemento.indexC)

        elemento.campo.addEventListener('click', () => {
            iniciar(elemento)
        })

        elemento.campo.addEventListener('contextmenu', () => {
            marcar(elemento)
        })
    })
}

function setListaObjetoCampo() {

    linhas.forEach((linha, indexL) => {
        const colunas = linha.querySelectorAll("td")
        colunas.forEach((td, indexC) => {
            const campo = td.querySelectorAll(`.${CLASS_CAMPO}`)[0]

            liastObjetoCampo.push({
                indexL,
                indexC,
                campo
            })
        })
    })
    quantidadeMarcadores = Number.parseInt(liastObjetoCampo.length * (1 - dificuldade))
}

function atribuirBombasAosCampos(indexL, indexC) {
    const elemento = linhas[indexL].querySelectorAll("td")[indexC].querySelectorAll('.campo')[0]
    if (Math.random() > dificuldade) {
        elemento.className = `${CLASS_CAMPO} ${CLASS_BOMBA}`
    } else {
        elemento.className = `${CLASS_CAMPO}`
    }
}

function iniciar(elemento) {
    if (!elemento.campo.className.includes("perdeu")) {
        abrir(elemento)
    }
    document.querySelectorAll("inicio").forEach(e => e.className.replace(" inicio", ""))
}

function abrir(elemento) {
    elemento.campo.className += " inicio"
    if (elemento.campo.className.includes(CLASS_BOMBA)) {
        elemento.campo.className += ` ${CLASS_ABERTO} ${CLASS_EXPOLODIDO}`
        perdeu()
    } else {
        const perigoElemento = contarPerigo(elemento)
        abrindoCampo(elemento, perigoElemento)
        if (perigoElemento === 0) {
            const vizinhos = encontrarVizinhos(elemento)
            vizinhos.forEach(vizinho => {
                abrindoCampo(vizinho, contarPerigo(vizinho))
            })

            encontrarVizinhos(elemento).filter(vizinhoAFiltrar => !vizinhoAFiltrar.campo.className.includes(CLASS_MARCADO) &&
                !vizinhoAFiltrar.campo.className.includes(CLASS_BOMBA) &&
                !vizinhoAFiltrar.campo.className.includes(CLASS_ALERTA) &&
                !vizinhoAFiltrar.campo.className.includes("inicio"))
                .forEach(vizinhoFiltrado => abrir(vizinhoFiltrado))
        }

    }

}

function contarPerigo(elemento) {
    return encontrarVizinhos(elemento)
        .filter(vizinhodoVizinho => vizinhodoVizinho.campo.className.includes(CLASS_BOMBA)).length
}

function abrindoCampo(elemento, perigo) {
    if (!elemento.campo.className.includes(CLASS_BOMBA) &&
        !elemento.campo.className.includes(CLASS_MARCADO) &&
        !elemento.campo.className.includes(CLASS_ABERTO)) {

        elemento.campo.className += ` ${CLASS_ABERTO}`
        if (perigo > 0) {
            elemento.campo.className += ` ${CLASS_ALERTA} _${perigo}`
            elemento.campo.innerText = `${perigo}`
        }
    }
}

function vizinhos(elemento) {
    return [
        { linha: elemento.indexL - 1, coluna: elemento.indexC - 1 },
        { linha: elemento.indexL - 1, coluna: elemento.indexC + 0 },
        { linha: elemento.indexL - 1, coluna: elemento.indexC + 1 },
        { linha: elemento.indexL + 0, coluna: elemento.indexC - 1 },
        { linha: elemento.indexL + 0, coluna: elemento.indexC + 1 },
        { linha: elemento.indexL + 1, coluna: elemento.indexC - 1 },
        { linha: elemento.indexL + 1, coluna: elemento.indexC + 0 },
        { linha: elemento.indexL + 1, coluna: elemento.indexC + 1 },
    ]
}

function encontrarVizinhos(elemento) {
    let listaVizinhos = vizinhos(elemento)

    return listaVizinhos.filter(vizinho => vizinho.linha >= 0 && vizinho.linha <= 15 && vizinho.coluna >= 0 && vizinho.coluna <= 15)
        .map(vizinhoFiltrado => {
            const vizinho = buscarVizinho(vizinhoFiltrado.linha, vizinhoFiltrado.coluna)
            return {
                campo: vizinho,
                indexL: vizinhoFiltrado.linha,
                indexC: vizinhoFiltrado.coluna
            }
        })
}

function buscarVizinho(linha, coluna) {
    return linhas[linha].querySelectorAll("td")[coluna].querySelectorAll(`.${CLASS_CAMPO}`)[0]
}

function marcar(elemento) {
    if (quantidadeMarcadores > 0 && !elemento.campo.className.includes("perdeu")) {
        if (!elemento.campo.className.includes(CLASS_ABERTO)) {
            if (elemento.campo.className.includes(CLASS_MARCADO)) {
                elemento.campo.className = elemento.campo.className.replace(` ${CLASS_MARCADO}`, "")
                elemento.campo.innerText = ""
                quantidadeMarcadores++
            } else {
                elemento.campo.className += ` ${CLASS_MARCADO}`
                elemento.campo.innerText = MARCADO
                quantidadeMarcadores--
            }
        }
    }
    bandeiras.innerText = quantidadeMarcadores
}

function perdeu() {
    liastObjetoCampo.forEach(elemento => {
        if (elemento.campo.className.includes(CLASS_BOMBA)) {
            if (elemento.campo.className.includes(CLASS_MARCADO)) {
                elemento.campo.className += " " + CLASS_SALVO
            } else {
                elemento.campo.className += " " + CLASS_ABERTO
                elemento.campo.innerText = BOMBA
            }
        }
        elemento.campo.className += " perdeu"
    })
}

function resetar() {
    quantidadeMarcadores = 168
    bandeiras.innerText = quantidadeMarcadores
    liastObjetoCampo.forEach(e => {
        e.campo.className = CLASS_CAMPO
        e.campo.innerText = ""
    })
    liastObjetoCampo = []

    jogo()
}




jogo()