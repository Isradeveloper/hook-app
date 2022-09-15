import { useCounter, useFetch } from '../hooks/'
import { LoadingQuote } from './components/LoadingQuote'
import { Quote } from './components/Quote'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
  const { quote, author, series } = !!data && data[0] // Si la data tiene un valor, entonces toma la data en la posicion 0

  // console.log({ data, isLoading, hasError })
  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote quote={quote} author={author} series={series} />
      }
      <button className='btn btn-primary' onClick={(e) => increment()}>Next Quote</button>
    </>
  )
}
