import React,{Fragment,useState} from "react";

const Pregunta=()=>{
    //definir el sate
    const [cantidad,guardadCantidad]=useState(0);

    //FUNCION QUE LEE EL PRESUPUESTO
    const definirPresupuesto=e=>{
        console.log(e.target.value);
    }

    return(
        <Fragment>
            <h2>coloca tu presupuesto </h2>
            <from>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto"
                    onChange={definirPresupuesto}
                />
                <input  
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
                />
            </from>

        </Fragment>

    )
}

export default Pregunta;