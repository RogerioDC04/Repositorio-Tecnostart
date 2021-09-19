import { Botao } from "../../components/components"
import './cadastro.css'

export default function PageCadastro() {

    return (
        <form>
            <label>
                Nome do Usuario:
                <input id='Usuario' />
            </label>
            <label>
                Sugerir uma senha:
                <input id='Senha' />
            </label>
            <Botao>Cadastrar</Botao>
        </form>
    )
}
