import Produtos from './Produtos';
import styled from "@emotion/styled";

function Vitrine() {

  const Info = styled.div`
    width: 600px;
    height: 50px;
    background-color: white;
    font-size: 25px;
    border-radius: 10px;
    font-family: 'Concert One', cursive;
    color: rgb(80, 75, 75);
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

  return (
    <main style={{ backgroundColor: "rgb(61, 14, 105)" }}>
      <Info>
        <p>Nossos produtos mais vendidos:</p>
      </Info>
      <Produtos />
    </main>
  );
}

export default Vitrine;