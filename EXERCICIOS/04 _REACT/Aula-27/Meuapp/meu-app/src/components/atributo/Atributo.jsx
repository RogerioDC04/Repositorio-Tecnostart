import './atributo.css'

function Atributo({nome}) {
    let atributo;
    switch (nome) {
        case "fogo":
            atributo = {"backgroundColor": "red", "color": " white"}
            break;
        
        case "agua":
            atributo = {"backgroundColor":" blue", "color": "white"}
            break;
        
        default:
            atributo = {"backgroundColor": "gray", "color": "black"}
            break;
      }
    
    return (
        <div style = {atributo}>
        {nome}
        </div>
    )
}

export default Atributo