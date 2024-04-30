import { useState } from 'react'

import { Form } from './components/Formulario'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Agregar colaborador</h1>
      <Form />
    </>
  )
}

export default App
