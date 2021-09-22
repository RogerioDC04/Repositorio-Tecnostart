import Botao from "../botao/Botao"
import { useState } from "react";

export default function IncluirCadastro(props) {
    const [input, setInput] = useState('')

    function handleOnClickCadastro() {

        if (input.length > 0) {
            props.adicionarCadastro(input)
            setInput('')
        }
    }

    function handleOnChageInput(event) {
        setInput(event.target.value)
    }


    return (
        <div className="incluirCadastro">
            <input type="text" onChange={handleOnChageInput} value={input} />
            <Botao onclick={handleOnClickCadastro}>Cadastro</Botao>
        </div>
    )
    }