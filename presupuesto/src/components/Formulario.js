import React,{useState} from "react";
import  PropTypes from "prop-types";
import Error from "./Error";
import shortid from "shortid";

const Formulario=({guardarGasto,guardarCrearGasto})=>{
    const [nombre,guardarNombre]=useState('');
    const [cantidad,guardarCantidad]=useState(0);
    const [error,guardarError]=useState(false)

    //cuando el usuario agrega un gasto
    const agrearGasto=e=>{
        e.preventDefault();
        //validar 
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() ===''){
                guardarError(true);
                return;
        }
        guardarError(false);

        //construir el gasto 
            const gasto={
                nombre,
                cantidad,
                id:shortid.generate()
            }
         

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //resetear el form
        guardarNombre('');
        guardarCantidad('0');
    }
    return(
        <form 
                onSubmit={agrearGasto}
        >
            <h2>Agrega tus Gastos Aqui</h2>
            {error ? <Error mensaje="Ambos campos son Obligatorios o 
                presupuesto incorrecto "/>:null }

            <div className="campo ">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                
                />
            </div>
            <div className="campo ">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value ,10))}
                />
            </div>
            <input  
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    )
}
Formulario.propTypes={
    guardarGasto:PropTypes.func.isRequired,
    guardarCrearGasto:PropTypes.func.isRequired
}

export default Formulario;