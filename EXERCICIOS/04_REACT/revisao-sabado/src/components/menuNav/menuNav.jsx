import { Link } from 'react-router-dom'



export default function MenuNav() {
    return (
        <nav>
            <ul>
                <li><Link to={HOME}>Home</Link></li>
                <li><Link to={TELACARTOESDEVISITA}>Cartoes</Link></li>
            </ul>
        </nav>
    )
}