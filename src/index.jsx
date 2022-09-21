//import React from 'react'
import {createRoot}  from 'react-dom/client'
import App from './App'
//importar el componente

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App></App>)
//ReactDOM.render(<App/>,document.getElementById('root'))
