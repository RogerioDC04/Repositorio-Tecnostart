import { createContext, useContext, useState } from 'react';

const UsuarioContext = createContext({})

function UsuarioProvider(props) {
    const [usuario, setUsuario] = useState({ nome: '' })
    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }} >
            { props.children }
        </UsuarioContext.Provider>
    )
}
function meuUsuario(){
    return useContext(UsuarioContext)
}

export {UsuarioContext, UsuarioProvider, meuUsuario}