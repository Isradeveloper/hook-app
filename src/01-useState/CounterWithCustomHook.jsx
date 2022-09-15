import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter()
  return (
    <>
      <h1>Counter With CustomHook: {counter}</h1>

      <hr />

      <button className='btn btn-primary' onClick={(e) => increment(2)}>+1</button>
      <button className='btn btn-primary' onClick={(e) => reset}>Reset</button>
      <button className='btn btn-primary' onClick={(e) => decrement(2)}>-1</button>
    </>
  )
}
