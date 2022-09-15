
export const Who = ({ username }) => {
  if (username === 'stryder2') {
    return (
      <h1>Usuario ya existe.</h1>
    )
  } else {
    return (
      <h1 />
    )
  }
}
