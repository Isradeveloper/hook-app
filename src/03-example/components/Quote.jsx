import { useFetch } from '../../hooks'

export const Quote = ({ quote, author, series }) => {
  let formatAuthor = author.replace(/ /g, '+')
  if (author === 'Hank Schrader') {
    formatAuthor = 'Henry+Schrader'
  }
  const { data } = useFetch(`https://breakingbadapi.com/api/characters?name=${formatAuthor}`)
  const { img } = !!data && data[0]
  // console.log(author, name)

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
        <img src={img} alt={author} />
      </div>
    </div>
  )
}
