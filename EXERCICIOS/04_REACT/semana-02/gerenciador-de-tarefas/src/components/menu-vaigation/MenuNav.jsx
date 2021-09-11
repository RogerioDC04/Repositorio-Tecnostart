import { Link } from 'react-router-dom'


export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link ></li>
                <li><Link to="/sobre">Sobre</Link ></li>
                <li><Link to="/cotato">Contato</Link ></li>
            </ul>
        </nav>
    )
}