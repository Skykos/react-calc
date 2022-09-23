//Importacion
/* eslint no-eval: 0 */
import React , {useState} from 'react'
import Words from 'lodash.words'
import Result from './Components/Result'
import Numbers from './Components/Numbers'
import Functions from './Components/Functions'
import Operations from './Components/Operations'

import './App.css'


//Generacion de la funcion del componente

const App = () => {


    const [stack,setStack] = useState('')
    
    const items = Words(stack,/[^-^+^*^/]+/g)

    const value = items.length > 0 ? items[items.length-1] : '0'

    
    //cuerpo de la funcion
    return <main className='react-calculator'>
        Calc App
        <Result value={value}></Result>
        <Numbers 
        onClickNumber={(dato)=>{setStack(`${stack}${dato}`)}}
        
        ></Numbers>
        <Functions 
            onDelete={()=>{setStack('')}}
            onClear = {()=>{
                if(stack.length > 0){
                    const newStack = stack.substring(0,stack.length-1)
                    setStack(newStack)
                }
                

        
        }}
        ></Functions>
        <Operations 
            onClickOperation={ operation =>{ 
                setStack(`${stack}${operation}`)
            }}
            onClickEqual = { equal =>{ 
                setStack(eval(stack))
            }}
        ></Operations>
    </main>
}

//exportación
export default App;