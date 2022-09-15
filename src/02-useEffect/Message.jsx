import { useState, useEffect } from 'react'

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [0])

  return (
    <>
      {console.log(coords)}
      <h4>{JSON.stringify(coords)}</h4>
    </>
  )
}
