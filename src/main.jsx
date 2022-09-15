import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './03-example/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HooksApp />
    {/* USE STATE */}
    {/* <CounterApp />
    <CounterWithCustomHook /> */}

    {/* USE EFFECT */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    <MultipleCustomHooks />

  </React.StrictMode>
)
