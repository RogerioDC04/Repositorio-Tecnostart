import './atributo.css'

function Atributo({ nome }) {
    let atributo = "atributo";

    switch (nome) {
        case 'fogo':
            atributo += " fogo"
            break

        case 'agua':
            atributo += " agua"
            break

        case 'planta':
            atributo += " planta"
            break

        case 'veneno':
            atributo += " veneno"
            break

        case 'ar':
            atributo += " ar"
            break

        case 'inseto':
            atributo += " veneno"
            break

        default:
            atributo += " normal"
            nome = "normal"
            break;
    }

    return (
        <div className={atributo}>
            {nome}
        </div>
    )
}

export default Atributo