import { useState } from "react"
import "./tarefa.css"
export default function Tarefa({ tarefa, deletar, visualizar, editar, alterarStatus }) {

    const [classe, setClasse] = useState("tarefa")

    function handleOnClick() {
        if (tarefa.concluida) {
        setClasse("tarefa")
        }else{
            setClasse("tarefa concluida")
        }
        alterarStatus(tarefa.id)
    }
    return (
        <div className={classe}>
            <h1 onClick={handleOnClick}>{tarefa.titulo}</h1>
            <div className="botoes">
                <button className="ediatr">E</button>
                <button className="deletar" onClick={() => deletar(tarefa.id)}>X</button>
                <button className="vizualizar">V</button>
            </div>
        </div>
    )
}
