import { useState, useEffect } from 'react'
import { Message } from './Message'
import { Who } from './Who'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: ''
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => { // Propiedad target de event
    const { name, value } = target // Propiedades name y value de target
    console.log({ name, value })
    setFormState({ // Cambia el objeto
      ...formState, // Traemos todos los datos del objeto original
      [name]: value // Teniendo el name seleccionado se remplazara en la propiedad con su mismo nombre
    })
  }

  useEffect(() => { // Se ejecuta cada vez que se modifica algo
    console.log('UseEffect called')
  }, [])

  useEffect(() => { // Se ejecuta cada vez que se modifica algo
    console.log('Formstate called')
  }, [formState])

  useEffect(() => { // Se ejecuta cada vez que se modifica algo
    console.log('Email called')
  }, [email])

  // [] Sólo se ejecuta una sola vez, cuando el componente se renderiza
  // [formState] Se ejecuta cuando el formulario es modificado
  // [email] Se ejecuta cuando el email cambia

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={(e) => onInputChange(e)}
      />

      <input
        type='email'
        name='email'
        placeholder='XXXXXX@ejemplo.com'
        className='form-control mt-2'
        value={email}
        onChange={(e) => onInputChange(e)}
      />

      <Who username={username} />
      {
        username === 'stryder2' && <Message />
      }

    </>

  )
}
