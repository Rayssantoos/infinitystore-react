import React from 'react';
import Botao from './Botao';
import Geral from './Geral';

const digitado = {
  borderRadius: "10px",
  width: "510px",
  height: "30px",
  display: "flex",
  margin: "10px 60px",
  fontSize: "17px"
}

function Novidades() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const manipulador = (e) => {
    e.preventDefault();
    const nomes = {
      nome,
      email,
      senha,
    }
    fetch("https://63069afec0d0f2b8011f9944.mockapi.io/loja-cadastro", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nomes)
    }).then(res => res.json())
      .then(res => {
       console.log(res)
      })
  }

  return (
    <Geral>
      <div>
        <h1> Quer receber as novidades e promoções do dia diretamente em seu email? Assine agora. </h1>
        <form method="post" action="#" onSubmit={manipulador}>
          <label>Digite seu nome:</label>
          <input type="text" value={nome} name="nome" placeholder="Nome" style={digitado} onChange={(e) => setNome(e.target.value)}></input>
          <label>Digite seu email:</label>
          <input type="email" value={email} name="email" placeholder="E-mail" style={digitado} onChange={(e) => setEmail(e.target.value)}></input>
          <label>Digite sua senha:</label>
          <input type="password" value={senha} name="senha" placeholder="Senha" style={digitado} onChange={(e) => setSenha(e.target.value)}></input>
        </form>
        <Botao maior type="submit">Enviar</Botao>
      </div>
      <div>
        <h2> - Na sua esquerda!</h2>
        <img src="https://i.postimg.cc/9FdvMVty/captain-america-infinity-war-png-by-335467742-de8k7bj-pre.png" alt="Capitão América" width="200px"></img>
      </div>
    </Geral>
  )
}

export default Novidades;