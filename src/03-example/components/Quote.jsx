/* eslint-disable padded-blocks */
import { useState, useLayoutEffect, useRef } from 'react'

import { useFetch } from '../../hooks'

export const Quote = ({ quote, author, series }) => {

  const pRef = useRef()

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => { // Cuando la quote se renderiza por completo
    const { width, height } = (pRef.current.getBoundingClientRect())
    setBoxSize({ width, height })
  }, [quote])

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
          <blockquote className='blockquote' style={{ display: 'flex' }}>
            <p ref={pRef}>{quote}</p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            {author} in <cite title='Source Title'>{series}</cite>
          </figcaption>
        </figure>
      </div>
      <div className='imagen'>
        <img src={img} alt={author} />
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </div>
  )
}
