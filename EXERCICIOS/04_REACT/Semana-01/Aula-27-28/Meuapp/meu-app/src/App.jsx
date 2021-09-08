import "./App.css"
import Card from './card/Card'
import { personagens } from "../models/personagens";

function App() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="pokedex">
                        <ul>
                            {cardFromList()}
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
}

function cardFromList() {
    return personagens.map(personagem => {
        return (
            <li>
                <Card nome={personagem.nome} numero={personagem.numero} atributos={personagem.atributos} />
            </li>
        )
    })
}

export default App;