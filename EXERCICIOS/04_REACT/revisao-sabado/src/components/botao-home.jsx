import { useHistory } from "react-router";

function BotaoHome() {
  const history = useHistory()
  const goHome = () => history.push('/home')

  return (
    <button type="button" onClick={goHome}>Home</button>
  )
}

export default BotaoHome