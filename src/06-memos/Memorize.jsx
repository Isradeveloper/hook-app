/* eslint-disable padded-blocks */
import { useState } from 'react'
import { useCounter } from '../hooks/'
import { Small } from './Small'

export const Memorize = () => {

  const { counter, increment } = useCounter()

  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Counter:  <Small value={counter} /> </h1>
      <button className='btn btn-primary' onClick={(e) => increment()}>+1</button>
      <button className='btn btn-outline-primary' onClick={(e)=> setShow(!show)}>Show Hide {JSON.stringify(show)}</button>
    </>
  )
}
