/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => { // Función async para realizar la peticion

    setState({
      ...state,
      isLoading: true
    })

    const resp = await fetch(url)
    const data = await resp.json()
    // console.log(data)

    setState({ 
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => { // Se vuelve a realizar la petición cuando el url es modifado
    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
