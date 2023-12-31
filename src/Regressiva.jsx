import React from "react";

const horario = {
    backgroundColor: "#2e0648",
    width: "380px",
    fontSize: "50px",
    margin: "20px",
    paddingLeft: "10px"
}

function Regressiva() {
    const [horas, setHorario] = React.useState();

    React.useEffect(tempo);

    function atualiza() {
        const hora = 23 - new Date().getHours();
        const min = 59 - new Date().getMinutes();
        const seg = 59 - new Date().getSeconds();

        setHorario(`${hora < 10 ? "0" : ""}${hora} : ${min < 10 ? "0" : ""}${min} : ${seg < 10 ? "0" : ""}${seg}`)
    }

    function tempo() {
        setTimeout(atualiza, 1000);
    }


    return <pre style={horario}>{horas}</pre>;
}

export default Regressiva;