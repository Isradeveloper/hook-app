import { useState } from 'react'

export const useForm = (initalForm = {}) => {
  const [formState, setFormState] = useState({ initalForm })

  const onInputChange = ({ target }) => { // Propiedad target de event
    const { name, value } = target // Propiedades name y value de target
    setFormState({ // Cambia el objeto
      ...formState, // Traemos todos los datos del objeto original
      [name]: value // Teniendo el name seleccionado se remplazara en la propiedad con su mismo nombre
    })
  }

  const onResetForm = () => {
    setFormState(initalForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
