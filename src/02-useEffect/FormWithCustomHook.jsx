import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const { username, email, password } = formState

  return (
    <>
      <h1>Formulario con custom Hook</h1>
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

      <input
        type='password'
        name='password'
        placeholder='Ingrese una contraseña'
        className='form-control mt-2'
        value={password}
        onChange={(e) => onInputChange(e)}
      />

      <button className='btn btn-danger mt-2' onClick={(e) => { onResetForm() }}>Reset</button>

    </>

  )
}
