import './card.css'

import Atributo from '../atributo/Atributo.jsx'
import Titulo from '../titulo/Titulo'
import Conteudo from '../conteudo/Conteudo';


const Card = ({nome, numero, atributos}) => {
    const img = `../../img/${numero}.png`
    const alt = `Imagem do personagem ${nome}`

    return (
        <div className="card">
            <div className="cardImage">
                <img src={img} alt={alt}/>
            </div>
            <div className="cardConteudo">
                <Conteudo>Nº{numero}</Conteudo>
                <Titulo>{nome}</Titulo>
                <ul className="cardListAtributo">
                    {atributoFromList(atributos)}
                </ul>
            </div>
        </div>
    )
}

function corrigirAtibutos(atributos) {
    if (atributos !== undefined && atributos !== null && atributos.length > 0) {
        return atributos.filter((atributo, index) => index < 2)
    } else {
        return ["normal"]
    }
}

function atributoFromList(atributos) {
    const atributosFiltrados = corrigirAtibutos(atributos)
    return atributosFiltrados.map(atributo => {
        return (
            <li>
                <Atributo nome={atributo}/>
            </li>
        )
    })
}

export default Card