import styled from "@emotion/styled";


const Botao = styled.button`
 width: ${(props) => (props.maior ? "600px" : "100px")};
 height: ${(props) => (props.maior ? "40px" : "35px")};
 font-size: ${(props) => (props.maior ? "15px" : "12px")};
 background-color: ${(props) => (props.cinza ? "rgb(80, 75, 75)" : "rgb(227, 175, 43)")};
 color: ${(props) => (props.cinza ? "rgb(227, 175, 43)" : "rgb(80, 75, 75)")};
 font-weight: bold;
 border: 10px;
 border-radius: 90px;
 margin: 5px 20px;
 cursor: pointer;
`

export default Botao;

