import Geral from "./Geral"
import Regressiva from "./Regressiva"

function Inicio() {
    return (
        <Geral>
            <div>
                <h1>Seja bem vindo a sua nova loja favorita.</h1>
                <h1>Com apenas um estalo seu, metade dos preços somem!</h1>
            </div>
            <h2>Fim das ofertas em: </h2>
            <Regressiva></Regressiva>

        </Geral>
    )
}

export default Inicio;