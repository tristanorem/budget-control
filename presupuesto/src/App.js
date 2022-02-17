import React,{useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {
  //creacion de usestate
  const[presupuesto,guardarPrsupuesto]=useState(0)
  const[restante,guardarRestante]=useState(0)
  const[mostrarpregunta,actualizarPregunta]=useState(true)
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
                      <Formulario/>
                </div>
                <div className='one-half column'>
                          2
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
