import React from 'react'

export const Hijo = React.memo(({ numero, incrementar }) => { // El hijo solamente se renderiza cuando se modifican los numeros
  console.log('  Me volví a generar :(  ')

  return (
    <button
      className='btn btn-primary mr-3'
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  )
})
