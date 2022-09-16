/* eslint-disable padded-blocks */
import { useMemo, useState } from 'react'

import { useCounter } from '../hooks/'

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahí vamos...')
  }

  return `${iterationNumber} iteraciones realizadas.`
}

export const MemoHook = () => {

  const { counter, increment } = useCounter(4000)
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]) // El valor memorizado, se va a mantener así, a menos de que las dependencias del use memo cambien
  // Sólo se ejecuta cuando el counter cambia

  return (
    <>
      <h1>Counter:  <small>{counter}</small> </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className='btn btn-primary' onClick={(e) => increment()}>+1</button>
      <button className='btn btn-outline-primary' onClick={(e) => setShow(!show)}>Show Hide {JSON.stringify(show)}</button>
    </>
  )
}
