import React from "react";
import { useParams } from "react-router-dom";
import Botao from "./Botao";
import Geral from "./Geral";

const foto = {
    width: "400px",
    borderRadius: "50px",
    margin: "30px"
}

const card = {
    width: "450px",
    height: "620px",
    backgroundColor: "white",
    borderRadius: "5px",
    margin: "30px"
}

function Detalhes() {
    const params = useParams();
    const [produtos, setProdutos] = React.useState({});
    const detalhes = params.detalhes;

    React.useEffect(() => {
        const url = `https://63069afec0d0f2b8011f9944.mockapi.io/produtos/${detalhes}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProdutos(data));
    }, [detalhes]);


    return (
        <Geral>
            <div style={card}>
                <img src={produtos.imagem} alt={produtos.nome} style={foto}></img>
                <p style={{ color: "black" }}>
                    Tamanho: xx <br />
                    Cores disponíveis: xxx <br />
                    Personagem: xxx
                </p>
            </div>
            <div>
                <h1>{produtos.nome}</h1>
                <p style={{ display: "flex" }}>{produtos.descricao}</p>
                <p>Por apenas: {produtos.preco}</p>

                <Botao maior>Comprar agora</Botao>
            </div>
        </Geral>
    )

}

export default Detalhes;