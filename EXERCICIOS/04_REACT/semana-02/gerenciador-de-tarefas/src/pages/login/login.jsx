import "./login.css"

import { Botao } from "../../components/components";

export default function PageLogin(){


    return (

        <form>
            <label>
                Nome do Usuário:
                <input id='Usuario'/>
            </label>
            <label>
                Senha:
                <input id='Senha'/>
            </label>

            <Botao onclick={()=>{
                const user = document.querySelector('#Usuario').value
                sessionStorage.setItem("usuario", user) 
                window.location.reload()
            }}>Confirmar</Botao>
        </form>
    )
}
