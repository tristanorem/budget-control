import React,{useState,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {
  //creacion de usestate
  const[presupuesto,guardarPrsupuesto]=useState(0)
  const[restante,guardarRestante]=useState(0)
  const[mostrarpregunta,actualizarPregunta]=useState(true)
  const[gastos,guardarGastos]=useState([]);
  const[gasto,guardarGasto]=useState({});
  const[crearGasto,guardarCrearGasto]=useState(false)


  //useEfect que actualiza el restante
  useEffect(() =>{
    if(crearGasto){
      //agrega el nuevo prrsupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);
      //resta el presupuesto actual 
        const presupuestoRestante=restante - gasto.cantidad;
        guardarRestante(presupuestoRestante)

      //resetear a false
      guardarCrearGasto(false);
    }

  },[gasto,crearGasto ,gastos,restante])
  
  return (
    <div className='container'>
      <header>
          <h1>Gasto semanal</h1>
          <div className='contenido-principal contenido'>
            {mostrarpregunta ? // carga condicional de un componente(si se comple la 1 condicion se ejecuta el primer componente si no el 2)
              (<Pregunta
                  guardarPrsupuesto={guardarPrsupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              ) : (
                <div className='row' >
                <div className='one-half column'>
                      <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                      />
                </div>
                <div className='one-half column'>
                          <Listado
                          gastos={gastos}
                          />
                          <ControlPresupuesto
                            presupuesto={presupuesto}
                            restante={restante}
                          />
                </div>
              </div>

              )
            }
          </div>
      </header>
    </div>
  );
}

export default App;
