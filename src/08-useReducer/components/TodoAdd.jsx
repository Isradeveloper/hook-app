import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    value: 3, description: '1'
  })

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (description.length === 1) return

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description
    }

    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={(e) => (onFormSubmit(e))}>
      <input
        type='text'
        placeholder='¿Qué hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={(e) => (onInputChange(e))}
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-2'
      >
        Agregar
      </button>
    </form>
  )
}
