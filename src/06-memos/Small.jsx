import { memo } from 'react'

export const Small = memo(({ value }) => { // Sólo cuando los properties cambian
  console.log('Me volví a dibujar')
  return (
    <small>{value}</small>
  )
})
