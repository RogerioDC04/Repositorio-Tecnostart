import Atributo from '../atributo/Atributo.jsx'
import Titulo from '../titulo/Titulo.jsx'
import Conteudo from '../conteudo/Conteudo';
import './card.css'
// import alunos from '../../alunos.js';

function Card(props) {
    return (
        <div className="card">
            <div className="cardImage">
                <img src="../../img/001.png"></img>
            </div>
            <div className="cardConteudo">
                <Conteudo>001</Conteudo>
                <Titulo>Bulbasaur</Titulo>
                <ul>
                    <li><Atributo nome='planta' /></li>
                    <li><Atributo nome='veneno' /></li>
                </ul>
            </div>
        
        </div>
    )

}

function card02(props) {
    
}

    

export default Card