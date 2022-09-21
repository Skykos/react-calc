//Importacion
import React from 'react'
import Result from './Components/Result'
import Numbers from './Components/Numbers'
import Functions from './Components/Functions'
import Operations from './Components/Operations'

import './App.css'


//Generacion de la funcion del componente

const App = () => {
    //cuerpo de la funcion
    return <main className='react-calculator'>
        Calc App
        <Result value={1200}></Result>
        <Numbers onClickNumber={(dato)=>{console.log('Aqui sacando el dato: ',dato)}}></Numbers>
        <Functions 
            onDelete={()=>{console.log('Hola desde el borrar')}}
            onClear = {()=>{console.log('Hola desde el limpiar')}}
        ></Functions>
        <Operations 
            onClickOperation={ operation => console.log('Operacion= ',operation)}
            onClickEqual = { equal => console.log('Equal:',equal) }
        ></Operations>
    </main>
}

//exportación
export default App;