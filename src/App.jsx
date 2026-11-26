import { useState } from 'react'

function App() {

  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  const restar = () => {
    setContador(contador - 1)
  }

  const reiniciar = () => {
    setContador(0)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>

      <h1>Contador de John Javier Añaguaya Cutili</h1>

      <h2>{contador}</h2>

      <button onClick={sumar}>
        Aumentar contador
      </button>

      <button onClick={restar}>
        Reducir contador
      </button>

      <button onClick={reiniciar}>
        Reiniciar contador
      </button>

    </div>
  )
}

export default App