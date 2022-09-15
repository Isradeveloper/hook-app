import { useCounter, useFetch } from '../../hooks'

export const Quote = ({ quote, author, series }) => {
  const { counter, increment } = useCounter(1)
  const { data, isLoading, hasError } = useFetch(`https://breakingbadapi.com/api/characters/${counter}`)
  const { char_id, name, img } = !!data && data[0]

  let imagen = ''
  if (name === author) {
    imagen = img
  } else {
    imagen = ''
  }
  return (
    <div className='contenedor'>
      <div className='quote'>
        <figure className='text-center'>
          <blockquote className='blockquote'>
            <p>{quote}</p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            {author} in <cite title='Source Title'>{series}</cite>
          </figcaption>
        </figure>
      </div>
      <div className='imagen'>
        <img src={imagen} alt={author} />
      </div>
    </div>
  )
}
