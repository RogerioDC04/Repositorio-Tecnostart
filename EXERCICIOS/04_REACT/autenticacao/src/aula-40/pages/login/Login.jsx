import { useHistory, Redirect } from 'react-router-dom'
import { isLogged, login } from '../../auth/auth'
import { HOME } from '../../routes/routes'

export default function PageLogin() {
    const history = useHistory()

    function start() {
        return isLogged() ? <Redirect to={HOME} /> : undefined
    }

    start()

    return (
        <>
            <h1>Login</h1>
            <button onClick={() => { login("token que veio do back"); history.push(HOME) }}>Sign in</button>
        </>
    )
}
