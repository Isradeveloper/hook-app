/* eslint-disable padded-blocks */
import { useCallback, useState } from 'react'

import { ShowIncrement } from './ShowIncrement'

export const CallbackHooks = () => {

  const [counter, setCounter] = useState(10)

  const increment = useCallback( // Ejecuta la función sólamente cuando
    (value = 1) => {
      setCounter((c) => c + value)
    },
    []
  )

  return (
    <>
      <h1>useCallbackHook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  )
}
