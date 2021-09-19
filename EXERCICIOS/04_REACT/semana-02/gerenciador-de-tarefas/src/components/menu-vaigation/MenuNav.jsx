import { Link } from 'react-router-dom'
import { CADASTRO, HOME, NOT_FOUND } from '../../router/rotas'
import './menunav.css'

export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link ></li>
                <li><button onClick={() => {
                    sessionStorage.removeItem("usuario")
                    window.location.reload()
                }}>Logout</button></li>
                <li><Link to={CADASTRO}>Cadastrar</Link></li>
            </ul>
        </nav>
    )
}