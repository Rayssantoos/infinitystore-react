import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import Botao from './Botao';
import { Link } from "react-router-dom";

const card = {
    width: "320px",
    height: "550px",
    margin: "60px 20px",
    border: "1px solid black",
    borderRadius: "15px",
    padding: "10px",
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "center",
    alignItems: "center"
}

const img = {
    width: "400x",
    height: "300px",
    borderRadius: "5px"
}

const tudo = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "center"
}

const preco = {
    fontSize: "20px",
    color: "rgb(80, 75, 75)"
}


class Produtos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            produtos: [

            ]
        };
    }

    componentDidMount() {
        const url = "https://63069afec0d0f2b8011f9944.mockapi.io/produtos?loja=Infinity"
        fetch(url).then(res => res.json().then(dados => {
            this.setState({ produtos: dados });
        }))
    }

    render() {

        return (
            <section style={tudo}>
                {this.state.produtos.map((produto) => (
                    <div style={card} key={produto.id}>
                        <img src={produto.imagem} style={img} alt={produto.nome}></img>
                        <Link to={`/detalhes/${produto.id}`} style={{ textDecoration: "none" }}>
                            <h1 style={{ fontSize: "17px" }}>{produto.nome}</h1></Link>
                        <p>{produto.descricao}</p>
                        <h2 style={preco}>{produto.preco}</h2>
                        <div>
                            <Botao>Comprar agora</Botao>
                            <Botao cinza>Adicionar ao carrinho<FaCartArrowDown /></Botao>
                        </div>
                    </div>

                ))}
            </section>
        )
    }
}

export default Produtos;
