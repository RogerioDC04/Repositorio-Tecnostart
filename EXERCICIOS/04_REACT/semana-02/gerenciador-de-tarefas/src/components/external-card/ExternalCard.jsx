import './externalcard.css'

export default function ExternalCard(props) {
    return (
        <div className="externalCard">

            <div className="externalCardContent">
                <div className="tituloContador">
                    <h1>
                        {props.title}
                    </h1>

                    <div>
                        {props.finilizadas?props.finalizado:0}/{props.total?props.total:0}
                    </div>
                    </div>
                    {props.children}
                </div>

            </div>
            )
}