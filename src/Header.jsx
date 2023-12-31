import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const estilo = {
  paddingTop: "30px",
  fontSize: "23px",
  display: "flex",
  justifyContent: "center",
  color: "white",
  textDecoration: "none",
  marginRight: "20px"
};

export default function Header() {
  return (
    <header>
      <div style={estilo}>
        <Link to="sobre" style={estilo}>Sobre mim</Link>
        <Link to="categorias" style={estilo}>Categorias</Link>
        <a href="/vitrine">
          <img src="https://fontmeme.com/permalink/220830/30e7ea842213160c9fea656a0b0ad516.png" alt="Infinity Store" width="380px" height="70px"></img>
          <img src="https://i.postimg.cc/RFdsj5nk/kindpng-1388115.png" alt="Manopla com joias" width="60px" height="90px"></img>
        </a>
        <Link to="novidades" style={estilo}> Novidades </Link>
        <Link to="categorias" style={estilo}>Meu Carrinho<FaShoppingCart /></Link>
      </div>
    </header>
  )
}
