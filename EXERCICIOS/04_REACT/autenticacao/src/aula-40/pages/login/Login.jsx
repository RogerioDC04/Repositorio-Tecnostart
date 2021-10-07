import { useHistory, Redirect } from 'react-router-dom'
import { isLogged, login } from '../../auth/auth'
import { HOME } from '../../routes/routes'
import { useState } from 'react'

export default function PageLogin() {


    const history = useHistory()
    const [valorDoInput, setValorDoInput] = useState('')
    

    function start() {
        return isLogged() ? <Redirect to={HOME} /> : undefined
    }

    start()

    function handleOnChange(event){
       setValorDoInput(event.target.value)
    }
    function handleOnClick(){
        { login(valorDoInput); history.push(HOME) }
      
    }

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleOnClick}>Sign in</button>
            <input value={valorDoInput} onChange={handleOnChange} ></input>
        </>
    )
}
