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
           <Botao onclick ={()=>{
              const user = document.querySelector('#Usuario').value
              sessionStorage.setItem("usuario", user)
              window.location.reload()    
           }}>Cadastrar</Botao>
        </form>
    )
}
