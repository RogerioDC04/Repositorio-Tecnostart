
import { useHistory } from "react-router";

function BotaoVoltar() {
  const history = useHistory()
  const voltar = () => history.goBack()

  return (
    <button type="button" onClick={voltar}>Voltar</button>
  )
}

export default BotaoVoltar