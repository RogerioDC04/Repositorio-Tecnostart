import { useParams } from "react-router"
import BotaoHome from "../components/botao-home"
import BotaoVoltar from "../components/botao-voltar"
import CartaoVisitaDetalhe from "../components/cartao-de-visita-detalhe"

function CartaoVisitaDetalheScreen() {

  const { id } = useParams()

  return (
    <div>
      <BotaoVoltar />
      <BotaoHome />
      <h1>CartaoVisitaDetalhe</h1>

      <CartaoVisitaDetalhe id={id} />
    </div>
  )
}

export default CartaoVisitaDetalheScreen